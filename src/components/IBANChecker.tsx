import React, { useState, useEffect } from 'react';
import { validateIBAN, formatIBAN, ValidationResult } from '../utils/ibanValidator';
import { CheckCircle, XCircle, Copy, AlertCircle, CreditCard } from 'lucide-react';

const IBANChecker: React.FC = () => {
  const [iban, setIban] = useState('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!iban.trim()) {
      setValidation(null);
      return;
    }

    setIsValidating(true);
    const timer = setTimeout(() => {
      const result = validateIBAN(iban);
      setValidation(result);
      setIsValidating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [iban]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getInputBorderColor = () => {
    if (!validation && !isValidating) return 'border-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400';
    if (isValidating) return 'border-yellow-400 dark:border-yellow-500 focus:border-yellow-500 dark:focus:border-yellow-400';
    return validation?.isValid 
      ? 'border-green-500 dark:border-green-400 focus:border-green-600 dark:focus:border-green-300' 
      : 'border-red-500 dark:border-red-400 focus:border-red-600 dark:focus:border-red-300';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <CreditCard className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 transition-colors duration-200" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">
            IBAN Checker
          </h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
          Validate International Bank Account Numbers instantly. Enter an IBAN below to check its format, 
          structure, and authenticity using advanced validation algorithms.
        </p>
      </div>

      {/* Main Input Card */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 mb-8 transition-all duration-200">
        <div className="space-y-6">
          <div>
            <label htmlFor="iban-input" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 transition-colors duration-200">
              Enter IBAN
            </label>
            <div className="relative">
              <input
                id="iban-input"
                type="text"
                value={iban}
                onChange={(e) => setIban(e.target.value.toUpperCase())}
                placeholder="GB29 NWBK 6016 1331 9268 19"
                className={`w-full px-4 py-4 text-lg font-mono border-2 rounded-xl transition-all duration-200 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 ${getInputBorderColor()} focus:outline-none focus:ring-4 focus:ring-blue-100 dark:focus:ring-blue-900/50`}
                spellCheck={false}
              />
              {isValidating && (
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="animate-spin h-5 w-5 border-2 border-yellow-400 dark:border-yellow-500 border-t-transparent rounded-full"></div>
                </div>
              )}
            </div>
          </div>

          {/* Validation Results */}
          {validation && !isValidating && (
            <div className="space-y-4">
              {/* Status Banner */}
              <div className={`flex items-center p-4 rounded-xl transition-colors duration-200 ${
                validation.isValid 
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
              }`}>
                {validation.isValid ? (
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 transition-colors duration-200" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 transition-colors duration-200" />
                )}
                <div>
                  <h3 className={`font-semibold transition-colors duration-200 ${
                    validation.isValid ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'
                  }`}>
                    {validation.isValid ? 'Valid IBAN' : 'Invalid IBAN'}
                  </h3>
                  <p className={`text-sm transition-colors duration-200 ${
                    validation.isValid ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
                  }`}>
                    {validation.isValid 
                      ? 'This IBAN passes all validation checks.' 
                      : 'This IBAN has formatting or structure issues.'}
                  </p>
                </div>
              </div>

              {/* Country Information */}
              {validation.country && (
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center transition-colors duration-200">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white px-2 py-1 rounded text-sm font-bold mr-3 transition-colors duration-200">
                      {validation.country.code}
                    </span>
                    {validation.country.name}
                    {validation.country.sepa && (
                      <span className="ml-3 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-bold transition-colors duration-200">
                        SEPA
                      </span>
                    )}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-blue-700 dark:text-blue-300 transition-colors duration-200">Length:</span>
                      <span className="ml-2 text-blue-800 dark:text-blue-200 transition-colors duration-200">{validation.country.length} characters</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-700 dark:text-blue-300 transition-colors duration-200">Structure:</span>
                      <span className="ml-2 font-mono text-blue-800 dark:text-blue-200 transition-colors duration-200">{validation.country.structure}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="font-medium text-blue-700 dark:text-blue-300 transition-colors duration-200">Example:</span>
                      <div className="mt-2 p-3 bg-white dark:bg-gray-900 rounded-lg border border-blue-200 dark:border-blue-700 transition-colors duration-200">
                        <code className="text-blue-800 dark:text-blue-200 font-mono transition-colors duration-200">{formatIBAN(validation.country.example)}</code>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Formatted Result */}
              {validation.formatted && (
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 transition-colors duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200">Formatted IBAN</h3>
                    <button
                      onClick={() => handleCopy(validation.formatted!)}
                      className="flex items-center px-3 py-2 text-sm bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-200">
                    <code className="text-lg font-mono text-gray-800 dark:text-gray-200 tracking-wider transition-colors duration-200">
                      {validation.formatted}
                    </code>
                  </div>
                </div>
              )}

              {/* Errors */}
              {validation.errors.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 transition-colors duration-200">
                  <h3 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center transition-colors duration-200">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Issues Found
                  </h3>
                  <ul className="space-y-2">
                    {validation.errors.map((error, index) => (
                      <li key={index} className="flex items-start text-sm text-red-700 dark:text-red-300 transition-colors duration-200">
                        <span className="w-2 h-2 bg-red-400 dark:bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 transition-colors duration-200"></span>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Sample IBANs */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 transition-all duration-200">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-200">Try Sample IBANs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { country: 'Germany', iban: 'DE75512108001245126199' },
            { country: 'United Kingdom', iban: 'GB33BUKB20201555555555' },
            { country: 'France', iban: 'FR7630006000011234567890189' },
            { country: 'Italy', iban: 'IT60X0542811101000000123456' },
            { country: 'Spain', iban: 'ES7921000813610123456789' },
            { country: 'Netherlands', iban: 'NL02ABNA0123456789' },
            { country: 'Yemen', iban: 'YE09CBKU0000000000001234560101' },
            { country: 'Brazil', iban: 'BR1500000000000010932840814P2' },
            { country: 'Russia', iban: 'RU0204452560040702810412345678901' }
          ].map((sample, index) => (
            <button
              key={index}
              onClick={() => setIban(sample.iban)}
              className="p-3 text-left bg-gray-50 hover:bg-gray-100 dark:bg-gray-700/50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-200 group"
            >
              <div className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1 transition-colors duration-200">{sample.country}</div>
              <div className="font-mono text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 break-all transition-colors duration-200">
                {formatIBAN(sample.iban)}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IBANChecker;