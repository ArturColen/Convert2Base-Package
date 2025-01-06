import { binToDec } from './conversions/binary/binary-to-decimal-conversion';
import { binToHex } from './conversions/binary/binary-to-hexadecimal-conversion';
import { binToOct } from './conversions/binary/binary-to-octal-conversion';
import { decToBin } from './conversions/decimal/decimal-to-binary-conversion';
import { decToHex } from './conversions/decimal/decimal-to-hexadecimal-conversion';
import { decToOct } from './conversions/decimal/decimal-to-octal-conversion';
import { hexToBin } from './conversions/hexadecimal/hexadecimal-to-binary-conversion';
import { hexToDec } from './conversions/hexadecimal/hexadecimal-to-decimal-conversion';
import { hexToOct } from './conversions/hexadecimal/hexadecimal-to-octal-conversion';
import { octToBin } from './conversions/octal/octal-to-binary-conversion';
import { octToDec } from './conversions/octal/octal-to-decimal-conversion';
import { octToHex } from './conversions/octal/octal-to-hexadecimal-conversion';

console.log('Testing binToOct:');
console.log(binToOct('101010')); // Output: '52'

console.log('Testing binToDec:');
console.log(binToDec('101010')); // Output: '42'

console.log('Testing binToHex:');
console.log(binToHex('101010')); // Output: '2A'

console.log('Testing octToBin:');
console.log(octToBin('52')); // Output: '101010'

console.log('Testing octToDec:');
console.log(octToDec('52')); // Output: '42'

console.log('Testing octToHex:');
console.log(octToHex('52')); // Output: '2A'

console.log('Testing decToBin:');
console.log(decToBin('42')); // Output: '101010'

console.log('Testing decToOct:');
console.log(decToOct('42')); // Output: '52'

console.log('Testing decToHex:');
console.log(decToHex('42')); // Output: '2A'

console.log('Testing hexToBin:');
console.log(hexToBin('2A')); // Output: '00101010'

console.log('Testing hexToOct:');
console.log(hexToOct('2A')); // Output: '52'

console.log('Testing hexToDec:');
console.log(hexToDec('2A')); // Output: '42'
