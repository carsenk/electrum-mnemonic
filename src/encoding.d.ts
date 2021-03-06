/// <reference types="node" />
export declare function encode(data: Buffer, wordlist?: string[]): string;
export declare function decode(mnemonic: string, wordlist?: string[]): Buffer;
export declare function bitlen(num: number): number;
export declare function normalizeText(str: string): string;
export declare function maskBytes(bytes: Buffer, bits: number): void;
