import { BigNumber } from "ethers";
export declare const enforce: (conditional: boolean, errorMessage: string) => void;
export declare const firstOrNull: <T>(array: T[]) => T | null;
export declare const first: <T>(array: T[]) => T;
export declare const last: <T>(array: T[]) => T;
export declare type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;
export declare const assertUnreachable: (_x: never) => never;
export declare const unscale: (quantity: BigNumber, decimals?: number) => number;
