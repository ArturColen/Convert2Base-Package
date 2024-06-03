"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binary_conversions_1 = require("./conversions/binary-conversions");
const decimal_conversions_1 = require("./conversions/decimal-conversions");
const hexadecimal_conversions_1 = require("./conversions/hexadecimal-conversions");
const octal_conversions_1 = require("./conversions/octal-conversions");
console.log('Testing binToOct:');
console.log((0, binary_conversions_1.binToOct)('101010'));
console.log('Testing binToDec:');
console.log((0, binary_conversions_1.binToDec)('101010'));
console.log('Testing binToHex:');
console.log((0, binary_conversions_1.binToHex)('101010'));
console.log('Testing octToBin:');
console.log((0, octal_conversions_1.octToBin)('52'));
console.log('Testing octToDec:');
console.log((0, octal_conversions_1.octToDec)('52'));
console.log('Testing octToHex:');
console.log((0, octal_conversions_1.octToHex)('52'));
console.log('Testing decToBin:');
console.log((0, decimal_conversions_1.decToBin)('42'));
console.log('Testing decToOct:');
console.log((0, decimal_conversions_1.decToOct)('42'));
console.log('Testing decToHex:');
console.log((0, decimal_conversions_1.decToHex)('42'));
console.log('Testing hexToBin:');
console.log((0, hexadecimal_conversions_1.hexToBin)('2A'));
console.log('Testing hexToOct:');
console.log((0, hexadecimal_conversions_1.hexToOct)('2A'));
console.log('Testing hexToDec:');
console.log((0, hexadecimal_conversions_1.hexToDec)('2A'));
