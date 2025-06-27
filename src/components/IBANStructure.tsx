import React, { useState, useMemo } from 'react';
import { IBAN_COUNTRIES, IBANCountry, searchCountries, formatIBAN } from '../utils/ibanValidator';
import { Search, Globe, Hash, Eye, Copy, CheckCircle } from 'lucide-react';

const IBANStructure: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<IBANCountry | null>(null);
  const [copied, setCopied] = useState('');

  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return IBAN_COUNTRIES;
    return searchCountries(searchQuery);
  }, [searchQuery]);

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(''), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const parseStructure = (structure: string) => {
    const parts = [];
    let currentPart = '';
    let i = 0;
    
    while (i < structure.length) {
      if (structure[i] === '!') {
        // Handle fixed length indicators like 2!n, 4!a
        const lengthMatch = currentPart.match(/(\d+)$/);
        if (lengthMatch) {
          const length = lengthMatch[1];
          currentPart = currentPart.replace(/\d+$/, '');
          i++; // skip the '!'
          const type = structure[i];
          parts.push({ 
            prefix: currentPart, 
            length: parseInt(length), 
            type,
            description: getTypeDescription(type)
          });
          currentPart = '';
        }
      } else {
        currentPart += structure[i];
      }
      i++;
    }
    
    return parts;
  };

  const getTypeDescription = (type: string) => {
    switch (type) {
      case 'n': return 'Numeric';
      case 'a': return 'Alphabetic';
      case 'c': return 'Alphanumeric';
      default: return 'Mixed';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'n': return 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200';
      case 'a': return 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200';
      case 'c': return 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200';
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
    }
  };

  const sepaCountries = IBAN_COUNTRIES.filter(country => country.sepa);
  const nonSepaCountries = IBAN_COUNTRIES.filter(country => !country.sepa);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3 transition-colors duration-200" />
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-200">IBAN Structure Reference</h1>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-200">
          Comprehensive reference for International Bank Account Number structures across all supported countries. 
          Learn about format requirements, length specifications, and validation rules.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Countries List */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-200">
            <div className="p-6 border-b border-gray-100 dark:border-gray-700 transition-colors duration-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 transition-colors duration-200" />
                <input
                  type="text"
                  placeholder="Search countries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-200"
                />
              </div>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => setSelectedCountry(country)}
                  className={`w-full text-left p-4 border-b border-gray-50 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 ${
                    selectedCountry?.code === country.code ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200 flex items-center">
                        {country.name}
                        {country.sepa && (
                          <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 ml-2" />
                        )}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center mt-1 transition-colors duration-200">
                        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-bold mr-2 transition-colors duration-200">
                          {country.code}
                        </span>
                        <Hash className="h-3 w-3 mr-1" />
                        {country.length} chars
                        {country.sepa && (
                          <span className="ml-2 text-xs text-green-600 dark:text-green-400 font-medium">SEPA</span>
                        )}
                      </div>
                    </div>
                    {selectedCountry?.code === country.code && (
                      <Eye className="h-5 w-5 text-blue-600 dark:text-blue-400 transition-colors duration-200" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Summary Stats */}
          <div className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 transition-all duration-200">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-200">Coverage Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Total Countries</span>
                <span className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200">{IBAN_COUNTRIES.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">SEPA Countries</span>
                <span className="font-bold text-green-600 dark:text-green-400 transition-colors duration-200">{sepaCountries.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Non-SEPA Countries</span>
                <span className="font-bold text-gray-600 dark:text-gray-400 transition-colors duration-200">{nonSepaCountries.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Shortest IBAN</span>
                <span className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200">15 chars</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">Longest IBAN</span>
                <span className="font-bold text-gray-800 dark:text-gray-200 transition-colors duration-200">33 chars</span>
              </div>
            </div>
          </div>
        </div>

        {/* Country Details */}
        <div className="lg:col-span-2">
          {selectedCountry ? (
            <div className="space-y-6">
              {/* Country Header */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 transition-all duration-200">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                      {selectedCountry.name}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <span className="bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded-lg font-bold transition-colors duration-200">
                        {selectedCountry.code}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 transition-colors duration-200">
                        <Hash className="inline h-4 w-4 mr-1" />
                        {selectedCountry.length} characters
                      </span>
                      {selectedCountry.sepa && (
                        <span className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-3 py-1 rounded-lg font-bold text-sm transition-colors duration-200 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          SEPA
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Structure Breakdown */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 transition-colors duration-200">Structure Format</h3>
                  <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl transition-colors duration-200">
                    <code className="text-lg font-mono text-gray-800 dark:text-gray-200 transition-colors duration-200">
                      {selectedCountry.structure}
                    </code>
                  </div>
                </div>

                {/* Structure Components */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 transition-colors duration-200">Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {parseStructure(selectedCountry.structure).map((part, index) => (
                      <div key={index} className="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg transition-colors duration-200">
                        <div className={`px-2 py-1 rounded text-xs font-bold mr-3 transition-colors duration-200 ${getTypeColor(part.type)}`}>
                          {part.type}
                        </div>
                        <div>
                          <div className="font-medium text-gray-800 dark:text-gray-200 transition-colors duration-200">
                            {part.prefix}{part.length} {part.description}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 transition-colors duration-200">
                            {part.length} character{part.length !== 1 ? 's' : ''}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Example */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-200">Example IBAN</h3>
                    <button
                      onClick={() => handleCopy(selectedCountry.example, 'example')}
                      className="flex items-center px-3 py-2 text-sm bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      {copied === 'example' ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl transition-colors duration-200">
                    <code className="text-lg font-mono text-blue-800 dark:text-blue-200 tracking-wider break-all transition-colors duration-200">
                      {formatIBAN(selectedCountry.example)}
                    </code>
                  </div>
                </div>
              </div>

              {/* Format Legend */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 transition-all duration-200">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-4 transition-colors duration-200">Format Legend</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg transition-colors duration-200">
                    <div className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs font-bold mr-3 transition-colors duration-200">n</div>
                    <div>
                      <div className="font-medium text-blue-800 dark:text-blue-200 transition-colors duration-200">Numeric</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400 transition-colors duration-200">Digits 0-9 only</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg transition-colors duration-200">
                    <div className="bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs font-bold mr-3 transition-colors duration-200">a</div>
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200 transition-colors duration-200">Alphabetic</div>
                      <div className="text-xs text-green-600 dark:text-green-400 transition-colors duration-200">Letters A-Z only</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg transition-colors duration-200">
                    <div className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs font-bold mr-3 transition-colors duration-200">c</div>
                    <div>
                      <div className="font-medium text-purple-800 dark:text-purple-200 transition-colors duration-200">Alphanumeric</div>
                      <div className="text-xs text-purple-600 dark:text-purple-400 transition-colors duration-200">Letters & digits</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg transition-colors duration-200">
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
                    <strong>Format notation:</strong> Numbers before ! indicate fixed length (e.g., 4!n = exactly 4 numeric characters)
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-12 text-center transition-all duration-200">
              <Globe className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4 transition-colors duration-200" />
              <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-200">Select a Country</h3>
              <p className="text-gray-400 dark:text-gray-500 transition-colors duration-200">
                Choose a country from the list to view its IBAN structure details, 
                format requirements, and examples.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IBANStructure;