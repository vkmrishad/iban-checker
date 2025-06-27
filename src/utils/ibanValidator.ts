// IBAN validation utilities
export interface IBANCountry {
  code: string;
  name: string;
  length: number;
  structure: string;
  example: string;
  regex: RegExp;
  sepa: boolean;
}

export const IBAN_COUNTRIES: IBANCountry[] = [
  {
    code: 'AD',
    name: 'Andorra',
    length: 24,
    structure: 'AD2!n4!n4!n12!c',
    example: 'AD1400080001001234567890',
    regex: /^AD\d{2}\d{4}\d{4}[A-Z0-9]{12}$/,
    sepa: true
  },
  {
    code: 'AE',
    name: 'United Arab Emirates',
    length: 23,
    structure: 'AE2!n3!n16!n',
    example: 'AE460090000000123456789',
    regex: /^AE\d{2}\d{3}\d{16}$/,
    sepa: false
  },
  {
    code: 'AL',
    name: 'Albania',
    length: 28,
    structure: 'AL2!n8!n16!c',
    example: 'AL35202111090000000001234567',
    regex: /^AL\d{2}\d{8}[A-Z0-9]{16}$/,
    sepa: true
  },
  {
    code: 'AO',
    name: 'Angola',
    length: 25,
    structure: 'AO2!n21!n',
    example: 'AO06004400006729503010102',
    regex: /^AO\d{2}\d{21}$/,
    sepa: false
  },
  {
    code: 'AT',
    name: 'Austria',
    length: 20,
    structure: 'AT2!n5!n11!n',
    example: 'AT483200000012345864',
    regex: /^AT\d{2}\d{5}\d{11}$/,
    sepa: true
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    length: 28,
    structure: 'AZ2!n4!a20!c',
    example: 'AZ77VTBA00000000001234567890',
    regex: /^AZ\d{2}[A-Z]{4}[A-Z0-9]{20}$/,
    sepa: false
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    length: 20,
    structure: 'BA2!n3!n3!n8!n2!n',
    example: 'BA393385804800211234',
    regex: /^BA\d{2}\d{3}\d{3}\d{8}\d{2}$/,
    sepa: false
  },
  {
    code: 'BE',
    name: 'Belgium',
    length: 16,
    structure: 'BE2!n3!n7!n2!n',
    example: 'BE71096123456769',
    regex: /^BE\d{2}\d{3}\d{7}\d{2}$/,
    sepa: true
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    length: 28,
    structure: 'BF2!n23!n',
    example: 'BF42BF0840101300463574000390',
    regex: /^BF\d{2}[A-Z0-9]{23}$/,
    sepa: false
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    length: 22,
    structure: 'BG2!n4!a6!n8!c',
    example: 'BG18RZBB91550123456789',
    regex: /^BG\d{2}[A-Z]{4}\d{6}[A-Z0-9]{8}$/,
    sepa: true
  },
  {
    code: 'BH',
    name: 'Bahrain',
    length: 22,
    structure: 'BH2!n4!a14!c',
    example: 'BH02CITI00001077181611',
    regex: /^BH\d{2}[A-Z]{4}[A-Z0-9]{14}$/,
    sepa: false
  },
  {
    code: 'BI',
    name: 'Burundi',
    length: 27,
    structure: 'BI2!n12!n',
    example: 'BI1320001100010000123456789',
    regex: /^BI\d{2}\d{12}$/,
    sepa: false
  },
  {
    code: 'BJ',
    name: 'Benin',
    length: 28,
    structure: 'BJ2!n24!n',
    example: 'BJ66BJ0610100100144390000769',
    regex: /^BJ\d{2}[A-Z0-9]{24}$/,
    sepa: false
  },
  {
    code: 'BR',
    name: 'Brazil',
    length: 29,
    structure: 'BR2!n8!n5!n10!n1!a1!c',
    example: 'BR1500000000000010932840814P2',
    regex: /^BR\d{2}\d{8}\d{5}\d{10}[A-Z][A-Z0-9]$/,
    sepa: false
  },
  {
    code: 'BY',
    name: 'Belarus',
    length: 28,
    structure: 'BY2!n4!c4!n16!c',
    example: 'BY86AKBB10100000002966000000',
    regex: /^BY\d{2}[A-Z0-9]{4}\d{4}[A-Z0-9]{16}$/,
    sepa: false
  },
  {
    code: 'CH',
    name: 'Switzerland',
    length: 21,
    structure: 'CH2!n5!n12!c',
    example: 'CH5604835012345678009',
    regex: /^CH\d{2}\d{5}[A-Z0-9]{12}$/,
    sepa: true
  },
  {
    code: 'CI',
    name: 'Ivory Coast',
    length: 28,
    structure: 'CI2!n24!c',
    example: 'CI93CI0080111301134291200589',
    regex: /^CI\d{2}[A-Z0-9]{24}$/,
    sepa: false
  },
  {
    code: 'CM',
    name: 'Cameroon',
    length: 27,
    structure: 'CM2!n23!n',
    example: 'CM2110002000300277976315008',
    regex: /^CM\d{2}\d{23}$/,
    sepa: false
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    length: 22,
    structure: 'CR2!n4!n14!n',
    example: 'CR23015108410026012345',
    regex: /^CR\d{2}\d{4}\d{14}$/,
    sepa: false
  },
  {
    code: 'CV',
    name: 'Cape Verde',
    length: 25,
    structure: 'CV2!n21!n',
    example: 'CV64000500000020108215144',
    regex: /^CV\d{2}\d{21}$/,
    sepa: false
  },
  {
    code: 'CY',
    name: 'Cyprus',
    length: 28,
    structure: 'CY2!n3!n5!n16!c',
    example: 'CY21002001950000357001234567',
    regex: /^CY\d{2}\d{3}\d{5}[A-Z0-9]{16}$/,
    sepa: true
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    length: 24,
    structure: 'CZ2!n4!n6!n10!n',
    example: 'CZ5508000000001234567899',
    regex: /^CZ\d{2}\d{4}\d{6}\d{10}$/,
    sepa: true
  },
  {
    code: 'DE',
    name: 'Germany',
    length: 22,
    structure: 'DE2!n8!n10!n',
    example: 'DE75512108001245126199',
    regex: /^DE\d{2}\d{8}\d{10}$/,
    sepa: true
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    length: 27,
    structure: 'DJ2!n23!n',
    example: 'DJ2110002010010409943020008',
    regex: /^DJ\d{2}\d{23}$/,
    sepa: false
  },
  {
    code: 'DK',
    name: 'Denmark',
    length: 18,
    structure: 'DK2!n4!n9!n1!n',
    example: 'DK9520000123456789',
    regex: /^DK\d{2}\d{4}\d{9}\d{1}$/,
    sepa: true
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    length: 28,
    structure: 'DO2!n4!c20!n',
    example: 'DO22ACAU00000000000123456789',
    regex: /^DO\d{2}[A-Z0-9]{4}\d{20}$/,
    sepa: false
  },
  {
    code: 'DZ',
    name: 'Algeria',
    length: 26,
    structure: 'DZ2!n20!n',
    example: 'DZ580002100001113000000570',
    regex: /^DZ\d{2}\d{20}$/,
    sepa: false
  },
  {
    code: 'EE',
    name: 'Estonia',
    length: 20,
    structure: 'EE2!n2!n2!n11!n1!n',
    example: 'EE471000001020145685',
    regex: /^EE\d{2}\d{2}\d{2}\d{11}\d{1}$/,
    sepa: true
  },
  {
    code: 'EG',
    name: 'Egypt',
    length: 29,
    structure: 'EG2!n4!n4!n17!n',
    example: 'EG800002000156789012345180002',
    regex: /^EG\d{2}\d{4}\d{4}\d{17}$/,
    sepa: false
  },
  {
    code: 'ES',
    name: 'Spain',
    length: 24,
    structure: 'ES2!n4!n4!n1!n1!n10!n',
    example: 'ES7921000813610123456789',
    regex: /^ES\d{2}\d{4}\d{4}\d{1}\d{1}\d{10}$/,
    sepa: true
  },
  {
    code: 'FI',
    name: 'Finland',
    length: 18,
    structure: 'FI2!n6!n7!n1!n',
    example: 'FI1410093000123458',
    regex: /^FI\d{2}\d{6}\d{7}\d{1}$/,
    sepa: true
  },
  {
    code: 'FK',
    name: 'Falkland Islands',
    length: 18,
    structure: 'FK2!n12!c',
    example: 'FK12SC987654321098',
    regex: /^FK\d{2}[A-Z0-9]{12}$/,
    sepa: false
  },
  {
    code: 'FO',
    name: 'Faroe Islands',
    length: 18,
    structure: 'FO2!n4!n9!n1!n',
    example: 'FO9264600123456789',
    regex: /^FO\d{2}\d{4}\d{9}\d{1}$/,
    sepa: false
  },
  {
    code: 'FR',
    name: 'France',
    length: 27,
    structure: 'FR2!n5!n5!n11!c2!n',
    example: 'FR7630006000011234567890189',
    regex: /^FR\d{2}\d{5}\d{5}[A-Z0-9]{11}\d{2}$/,
    sepa: true
  },
  {
    code: 'GA',
    name: 'Gabon',
    length: 27,
    structure: 'GA2!n23!n',
    example: 'GA2140021010032001890020126',
    regex: /^GA\d{2}\d{23}$/,
    sepa: false
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    length: 22,
    structure: 'GB2!n4!a6!n8!n',
    example: 'GB33BUKB20201555555555',
    regex: /^GB\d{2}[A-Z]{4}\d{6}\d{8}$/,
    sepa: true
  },
  {
    code: 'GE',
    name: 'Georgia',
    length: 22,
    structure: 'GE2!n2!a16!n',
    example: 'GE60NB0000000123456789',
    regex: /^GE\d{2}[A-Z]{2}\d{16}$/,
    sepa: false
  },
  {
    code: 'GI',
    name: 'Gibraltar',
    length: 23,
    structure: 'GI2!n4!a15!c',
    example: 'GI56XAPO000001234567890',
    regex: /^GI\d{2}[A-Z]{4}[A-Z0-9]{15}$/,
    sepa: true
  },
  {
    code: 'GL',
    name: 'Greenland',
    length: 18,
    structure: 'GL2!n4!n9!n1!n',
    example: 'GL8964710123456789',
    regex: /^GL\d{2}\d{4}\d{9}\d{1}$/,
    sepa: false
  },
  {
    code: 'GR',
    name: 'Greece',
    length: 27,
    structure: 'GR2!n3!n4!n16!c',
    example: 'GR9608100010000001234567890',
    regex: /^GR\d{2}\d{3}\d{4}[A-Z0-9]{16}$/,
    sepa: true
  },
  {
    code: 'GT',
    name: 'Guatemala',
    length: 28,
    structure: 'GT2!n4!c20!c',
    example: 'GT20AGRO00000000001234567890',
    regex: /^GT\d{2}[A-Z0-9]{4}[A-Z0-9]{20}$/,
    sepa: false
  },
  {
    code: 'GW',
    name: 'Guinea-Bissau',
    length: 25,
    structure: 'GW2!n19!c',
    example: 'GW04GW1430010181800637601',
    regex: /^GW\d{2}[A-Z0-9]{19}$/,
    sepa: false
  },
  {
    code: 'HN',
    name: 'Honduras',
    length: 28,
    structure: 'HN2!n4!a20!n',
    example: 'HN54PISA00000000000000123124',
    regex: /^HN\d{2}[A-Z]{4}\d{20}$/,
    sepa: false
  },
  {
    code: 'HR',
    name: 'Croatia',
    length: 21,
    structure: 'HR2!n7!n10!n',
    example: 'HR1723600001101234565',
    regex: /^HR\d{2}\d{7}\d{10}$/,
    sepa: true
  },
  {
    code: 'HU',
    name: 'Hungary',
    length: 28,
    structure: 'HU2!n3!n4!n1!n15!n1!n',
    example: 'HU93116000060000000012345676',
    regex: /^HU\d{2}\d{3}\d{4}\d{1}\d{15}\d{1}$/,
    sepa: true
  },
  {
    code: 'IE',
    name: 'Ireland',
    length: 22,
    structure: 'IE2!n4!a6!n8!n',
    example: 'IE64IRCE92050112345678',
    regex: /^IE\d{2}[A-Z]{4}\d{6}\d{8}$/,
    sepa: true
  },
  {
    code: 'IL',
    name: 'Israel',
    length: 23,
    structure: 'IL2!n3!n3!n13!n',
    example: 'IL170108000000012612345',
    regex: /^IL\d{2}\d{3}\d{3}\d{13}$/,
    sepa: false
  },
  {
    code: 'IQ',
    name: 'Iraq',
    length: 23,
    structure: 'IQ2!n4!a15!n',
    example: 'IQ20CBIQ861800101010500',
    regex: /^IQ\d{2}[A-Z]{4}\d{15}$/,
    sepa: false
  },
  {
    code: 'IR',
    name: 'Iran',
    length: 26,
    structure: 'IR2!n22!n',
    example: 'IR710570029971601460641001',
    regex: /^IR\d{2}\d{22}$/,
    sepa: false
  },
  {
    code: 'IS',
    name: 'Iceland',
    length: 26,
    structure: 'IS2!n4!n2!n6!n10!n',
    example: 'IS750001121234563108962099',
    regex: /^IS\d{2}\d{4}\d{2}\d{6}\d{10}$/,
    sepa: true
  },
  {
    code: 'IT',
    name: 'Italy',
    length: 27,
    structure: 'IT2!n1!a5!n5!n12!c',
    example: 'IT60X0542811101000000123456',
    regex: /^IT\d{2}[A-Z]\d{5}\d{5}[A-Z0-9]{12}$/,
    sepa: true
  },
  {
    code: 'JO',
    name: 'Jordan',
    length: 30,
    structure: 'JO2!n4!a4!n18!c',
    example: 'JO71CBJO0000000000001234567890',
    regex: /^JO\d{2}[A-Z]{4}\d{4}[A-Z0-9]{18}$/,
    sepa: false
  },
  {
    code: 'KM',
    name: 'Comoros',
    length: 27,
    structure: 'KM2!n23!n',
    example: 'KM4600005000010010904400137',
    regex: /^KM\d{2}\d{23}$/,
    sepa: false
  },
  {
    code: 'KW',
    name: 'Kuwait',
    length: 30,
    structure: 'KW2!n4!a22!c',
    example: 'KW81CBKU0000000000001234560101',
    regex: /^KW\d{2}[A-Z]{4}[A-Z0-9]{22}$/,
    sepa: false
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    length: 20,
    structure: 'KZ2!n3!n13!c',
    example: 'KZ244350000012344567',
    regex: /^KZ\d{2}\d{3}[A-Z0-9]{13}$/,
    sepa: false
  },
  {
    code: 'LB',
    name: 'Lebanon',
    length: 28,
    structure: 'LB2!n4!n20!c',
    example: 'LB92000700000000123123456123',
    regex: /^LB\d{2}\d{4}[A-Z0-9]{20}$/,
    sepa: false
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
    length: 32,
    structure: 'LC2!n4!a24!c',
    example: 'LC14BOSL123456789012345678901234',
    regex: /^LC\d{2}[A-Z]{4}[A-Z0-9]{24}$/,
    sepa: false
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    length: 21,
    structure: 'LI2!n5!n12!c',
    example: 'LI7408806123456789012',
    regex: /^LI\d{2}\d{5}[A-Z0-9]{12}$/,
    sepa: true
  },
  {
    code: 'LT',
    name: 'Lithuania',
    length: 20,
    structure: 'LT2!n5!n11!n',
    example: 'LT601010012345678901',
    regex: /^LT\d{2}\d{5}\d{11}$/,
    sepa: true
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    length: 20,
    structure: 'LU2!n3!n13!c',
    example: 'LU120010001234567891',
    regex: /^LU\d{2}\d{3}[A-Z0-9]{13}$/,
    sepa: true
  },
  {
    code: 'LV',
    name: 'Latvia',
    length: 21,
    structure: 'LV2!n4!a13!c',
    example: 'LV97HABA0012345678910',
    regex: /^LV\d{2}[A-Z]{4}[A-Z0-9]{13}$/,
    sepa: true
  },
  {
    code: 'LY',
    name: 'Libya',
    length: 25,
    structure: 'LY2!n21!n',
    example: 'LY38021001000000123456789',
    regex: /^LY\d{2}\d{21}$/,
    sepa: false
  },
  {
    code: 'MA',
    name: 'Morocco',
    length: 28,
    structure: 'MA2!n24!n',
    example: 'MA64011519000001205000534921',
    regex: /^MA\d{2}\d{24}$/,
    sepa: false
  },
  {
    code: 'MC',
    name: 'Monaco',
    length: 27,
    structure: 'MC2!n5!n5!n11!c2!n',
    example: 'MC5810096180790123456789085',
    regex: /^MC\d{2}\d{5}\d{5}[A-Z0-9]{11}\d{2}$/,
    sepa: true
  },
  {
    code: 'MD',
    name: 'Moldova',
    length: 24,
    structure: 'MD2!n2!c18!c',
    example: 'MD21EX000000000001234567',
    regex: /^MD\d{2}[A-Z0-9]{2}[A-Z0-9]{18}$/,
    sepa: true
  },
  {
    code: 'ME',
    name: 'Montenegro',
    length: 22,
    structure: 'ME2!n3!n13!n2!n',
    example: 'ME25505000012345678951',
    regex: /^ME\d{2}\d{3}\d{13}\d{2}$/,
    sepa: true
  },
  {
    code: 'MG',
    name: 'Madagascar',
    length: 27,
    structure: 'MG2!n23!n',
    example: 'MG4600005030071289421016045',
    regex: /^MG\d{2}\d{23}$/,
    sepa: false
  },
  {
    code: 'MK',
    name: 'North Macedonia',
    length: 19,
    structure: 'MK2!n3!n10!c2!n',
    example: 'MK07200002785123453',
    regex: /^MK\d{2}\d{3}[A-Z0-9]{10}\d{2}$/,
    sepa: true
  },
  {
    code: 'ML',
    name: 'Mali',
    length: 28,
    structure: 'ML2!n24!c',
    example: 'ML13ML0160120102600100668497',
    regex: /^ML\d{2}[A-Z0-9]{24}$/,
    sepa: false
  },
  {
    code: 'MN',
    name: 'Mongolia',
    length: 20,
    structure: 'MN2!n16!n',
    example: 'MN580050099123456789',
    regex: /^MN\d{2}\d{16}$/,
    sepa: false
  },
  {
    code: 'MR',
    name: 'Mauritania',
    length: 27,
    structure: 'MR13!n5!n5!n11!n2!n',
    example: 'MR1300020001010000123456753',
    regex: /^MR\d{2}\d{5}\d{5}\d{11}\d{2}$/,
    sepa: false
  },
  {
    code: 'MT',
    name: 'Malta',
    length: 31,
    structure: 'MT2!n4!a5!n18!c',
    example: 'MT31MALT01100000000000000000123',
    regex: /^MT\d{2}[A-Z]{4}\d{5}[A-Z0-9]{18}$/,
    sepa: true
  },
  {
    code: 'MU',
    name: 'Mauritius',
    length: 30,
    structure: 'MU2!n4!a2!n2!n12!n3!n3!a',
    example: 'MU43BOMM0101123456789101000MUR',
    regex: /^MU\d{2}[A-Z]{4}\d{2}\d{2}\d{12}\d{3}[A-Z]{3}$/,
    sepa: false
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    length: 25,
    structure: 'MZ2!n21!n',
    example: 'MZ59000301080016367102371',
    regex: /^MZ\d{2}\d{21}$/,
    sepa: false
  },
  {
    code: 'NE',
    name: 'Niger',
    length: 28,
    structure: 'NE2!n26!c',
    example: 'NE58NE0380100100130305000268',
    regex: /^NE\d{2}[A-Z0-9]{26}$/,
    sepa: false
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    length: 28,
    structure: 'NI2!n20!n',
    example: 'NI79BAMC00000000000003123123',
    regex: /^NI\d{2}\d{20}$/,
    sepa: false
  },
  {
    code: 'NL',
    name: 'Netherlands',
    length: 18,
    structure: 'NL2!n4!a10!n',
    example: 'NL02ABNA0123456789',
    regex: /^NL\d{2}[A-Z]{4}\d{10}$/,
    sepa: true
  },
  {
    code: 'NO',
    name: 'Norway',
    length: 15,
    structure: 'NO2!n4!n6!n1!n',
    example: 'NO8330001234567',
    regex: /^NO\d{2}\d{4}\d{6}\d{1}$/,
    sepa: true
  },
  {
    code: 'OM',
    name: 'Sultanate of Oman',
    length: 23,
    structure: 'OM2!n18!c',
    example: 'OM040280000012345678901',
    regex: /^OM\d{2}[A-Z0-9]{18}$/,
    sepa: false
  },
  {
    code: 'PK',
    name: 'Pakistan',
    length: 24,
    structure: 'PK2!n4!a16!c',
    example: 'PK36SCBL0000001123456702',
    regex: /^PK\d{2}[A-Z]{4}[A-Z0-9]{16}$/,
    sepa: false
  },
  {
    code: 'PL',
    name: 'Poland',
    length: 28,
    structure: 'PL2!n8!n16!c',
    example: 'PL10105000997603123456789123',
    regex: /^PL\d{2}\d{8}[A-Z0-9]{16}$/,
    sepa: true
  },
  {
    code: 'PS',
    name: 'Palestine',
    length: 29,
    structure: 'PS2!n4!a21!c',
    example: 'PS92PALS000000000400123456702',
    regex: /^PS\d{2}[A-Z]{4}[A-Z0-9]{21}$/,
    sepa: false
  },
  {
    code: 'PT',
    name: 'Portugal',
    length: 25,
    structure: 'PT2!n4!n4!n11!n2!n',
    example: 'PT50002700000001234567833',
    regex: /^PT\d{2}\d{4}\d{4}\d{11}\d{2}$/,
    sepa: true
  },
  {
    code: 'QA',
    name: 'Qatar',
    length: 29,
    structure: 'QA2!n4!a21!c',
    example: 'QA54QNBA000000000000693123456',
    regex: /^QA\d{2}[A-Z]{4}[A-Z0-9]{21}$/,
    sepa: false
  },
  {
    code: 'RO',
    name: 'Romania',
    length: 24,
    structure: 'RO2!n4!a16!c',
    example: 'RO66BACX0000001234567890',
    regex: /^RO\d{2}[A-Z]{4}[A-Z0-9]{16}$/,
    sepa: true
  },
  {
    code: 'RS',
    name: 'Serbia',
    length: 22,
    structure: 'RS2!n3!n13!n2!n',
    example: 'RS35105008123123123173',
    regex: /^RS\d{2}\d{3}\d{13}\d{2}$/,
    sepa: true
  },
  {
    code: 'RU',
    name: 'Russia',
    length: 33,
    structure: 'RU2!n9!n5!n15!n',
    example: 'RU0204452560040702810412345678901',
    regex: /^RU\d{2}\d{9}\d{5}\d{15}$/,
    sepa: false
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    length: 24,
    structure: 'SA2!n2!n18!c',
    example: 'SA4420000001234567891234',
    regex: /^SA\d{2}\d{2}[A-Z0-9]{18}$/,
    sepa: false
  },
  {
    code: 'SC',
    name: 'Seychelles',
    length: 31,
    structure: 'SC2!n4!a2!n2!n16!n3!a',
    example: 'SC74MCBL01031234567890123456USD',
    regex: /^SC\d{2}[A-Z]{4}\d{2}\d{2}\d{16}[A-Z]{3}$/,
    sepa: false
  },
  {
    code: 'SD',
    name: 'Sudan',
    length: 18,
    structure: 'SD2!n14!n',
    example: 'SD8811123456789012',
    regex: /^SD\d{2}\d{14}$/,
    sepa: false
  },
  {
    code: 'SE',
    name: 'Sweden',
    length: 24,
    structure: 'SE2!n3!n16!n1!n',
    example: 'SE7280000810340009783242',
    regex: /^SE\d{2}\d{3}\d{16}\d{1}$/,
    sepa: true
  },
  {
    code: 'SI',
    name: 'Slovenia',
    length: 19,
    structure: 'SI2!n5!n8!n2!n',
    example: 'SI56192001234567892',
    regex: /^SI\d{2}\d{5}\d{8}\d{2}$/,
    sepa: true
  },
  {
    code: 'SK',
    name: 'Slovakia',
    length: 24,
    structure: 'SK2!n4!n6!n10!n',
    example: 'SK8975000000000012345671',
    regex: /^SK\d{2}\d{4}\d{6}\d{10}$/,
    sepa: true
  },
  {
    code: 'SM',
    name: 'San Marino',
    length: 27,
    structure: 'SM2!n1!a5!n5!n12!c',
    example: 'SM76P0854009812123456789123',
    regex: /^SM\d{2}[A-Z]\d{5}\d{5}[A-Z0-9]{12}$/,
    sepa: true
  },
  {
    code: 'SN',
    name: 'Senegal',
    length: 28,
    structure: 'SN2!n26!c',
    example: 'SN08SN0100152000048500003035',
    regex: /^SN\d{2}[A-Z0-9]{26}$/,
    sepa: false
  },
  {
    code: 'SO',
    name: 'Somalia',
    length: 23,
    structure: 'SO2!n19!n',
    example: 'SO061000001123123456789',
    regex: /^SO\d{2}\d{19}$/,
    sepa: false
  },
  {
    code: 'ST',
    name: 'Sao Tome and Principe',
    length: 25,
    structure: 'ST2!n21!n',
    example: 'ST23000200000289355710148',
    regex: /^ST\d{2}\d{21}$/,
    sepa: false
  },
  {
    code: 'SV',
    name: 'El Salvador',
    length: 28,
    structure: 'SV2!n4!a20!n',
    example: 'SV43ACAT00000000000000123123',
    regex: /^SV\d{2}[A-Z]{4}\d{20}$/,
    sepa: false
  },
  {
    code: 'TD',
    name: 'Chad',
    length: 27,
    structure: 'TD2!n23!n',
    example: 'TD8960002000010271091600153',
    regex: /^TD\d{2}\d{23}$/,
    sepa: false
  },
  {
    code: 'TG',
    name: 'Togo',
    length: 28,
    structure: 'TG2!n26!c',
    example: 'TG53TG0090604310346500400070',
    regex: /^TG\d{2}[A-Z0-9]{26}$/,
    sepa: false
  },
  {
    code: 'TL',
    name: 'Timor-Leste',
    length: 23,
    structure: 'TL2!n19!n',
    example: 'TL380010012345678910106',
    regex: /^TL\d{2}\d{19}$/,
    sepa: false
  },
  {
    code: 'TN',
    name: 'Tunisia',
    length: 24,
    structure: 'TN59!n2!n3!n13!n2!n',
    example: 'TN5904018104004942712345',
    regex: /^TN\d{2}\d{2}\d{3}\d{13}\d{2}$/,
    sepa: false
  },
  {
    code: 'TR',
    name: 'Turkey',
    length: 26,
    structure: 'TR2!n5!n1!c16!c',
    example: 'TR320010009999901234567890',
    regex: /^TR\d{2}\d{5}[A-Z0-9]\d{16}$/,
    sepa: false
  },
  {
    code: 'UA',
    name: 'Ukraine',
    length: 29,
    structure: 'UA2!n6!n19!c',
    example: 'UA903052992990004149123456789',
    regex: /^UA\d{2}\d{6}[A-Z0-9]{19}$/,
    sepa: false
  },
  {
    code: 'VA',
    name: 'Holy See (Vatican)',
    length: 22,
    structure: 'VA2!n18!n',
    example: 'VA59001123000012345678',
    regex: /^VA\d{2}\d{18}$/,
    sepa: true
  },
  {
    code: 'VG',
    name: 'British Virgin Islands',
    length: 24,
    structure: 'VG2!n4!a16!n',
    example: 'VG07ABVI0000000123456789',
    regex: /^VG\d{2}[A-Z]{4}\d{16}$/,
    sepa: false
  },
  {
    code: 'XK',
    name: 'Kosovo',
    length: 20,
    structure: 'XK2!n4!n10!n2!n',
    example: 'XK051212012345678906',
    regex: /^XK\d{2}\d{4}\d{10}\d{2}$/,
    sepa: false
  },
  {
    code: 'YE',
    name: 'Yemen',
    length: 30,
    structure: 'YE2!n4!a22!c',
    example: 'YE09CBKU0000000000001234560101',
    regex: /^YE\d{2}[A-Z]{4}[A-Z0-9]{22}$/,
    sepa: false
  }
];

// Mod-97 algorithm for IBAN check digit verification
export function mod97(iban: string): number {
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (char) => 
    (char.charCodeAt(0) - 55).toString()
  );
  
  let remainder = '';
  for (let i = 0; i < numeric.length; i++) {
    remainder += numeric[i];
    if (remainder.length >= 9) {
      remainder = (parseInt(remainder) % 97).toString();
    }
  }
  
  return parseInt(remainder) % 97;
}

export interface ValidationResult {
  isValid: boolean;
  country?: IBANCountry;
  errors: string[];
  formatted?: string;
}

export function validateIBAN(iban: string): ValidationResult {
  const cleanIban = iban.replace(/\s/g, '').toUpperCase();
  const errors: string[] = [];
  
  // Basic format check
  if (!/^[A-Z]{2}\d{2}[A-Z0-9]+$/.test(cleanIban)) {
    errors.push('IBAN must start with 2 letters, followed by 2 digits, then alphanumeric characters');
  }
  
  if (cleanIban.length < 15 || cleanIban.length > 34) {
    errors.push('IBAN length must be between 15 and 34 characters');
  }
  
  const countryCode = cleanIban.slice(0, 2);
  const country = IBAN_COUNTRIES.find(c => c.code === countryCode);
  
  if (!country) {
    errors.push(`Country code '${countryCode}' is not supported`);
    return { isValid: false, errors };
  }
  
  // Length check for specific country
  if (cleanIban.length !== country.length) {
    errors.push(`IBAN for ${country.name} must be exactly ${country.length} characters long`);
  }
  
  // Structure check
  if (!country.regex.test(cleanIban)) {
    errors.push(`IBAN format is incorrect for ${country.name}`);
  }
  
  // Check digit validation using mod-97 algorithm
  try {
    const checkResult = mod97(cleanIban);
    if (checkResult !== 1) {
      errors.push('IBAN check digits are invalid');
    }
  } catch (e) {
    errors.push('Unable to validate check digits');
  }
  
  const isValid = errors.length === 0;
  
  return {
    isValid,
    country,
    errors,
    formatted: isValid ? formatIBAN(cleanIban) : undefined
  };
}

export function formatIBAN(iban: string): string {
  const cleaned = iban.replace(/\s/g, '');
  return cleaned.replace(/(.{4})/g, '$1 ').trim();
}

export function searchCountries(query: string): IBANCountry[] {
  const searchTerm = query.toLowerCase();
  return IBAN_COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(searchTerm) ||
    country.code.toLowerCase().includes(searchTerm)
  );
}