import { BigNumber } from "ethers";

// =================== GENERAL UTILS =====================
export const enforce = (conditional: boolean, errorMessage: string) => {
  if (!conditional) throw new Error(errorMessage)
}

/// ================== FIRST / LAST IN LIST ======================
export const firstOrNull = <T>(array: Array<T>): T | null => {
  if (array.length === 0) return null
  return array[0]
}

export const first = <T>(array: Array<T>): T => {
  enforce(array.length > 0, 'First for empty array')
  return array[0]
}

export const last = <T>(array: Array<T>): T => {
  enforce(array.length > 0, 'Last for empty array')
  return array[array.length - 1]
}

// ======================= TYPESCRIPT INTROSPECTION =======================
export type PromiseType<T> = T extends PromiseLike<infer U> ? U : T
// type PromiseType = PromiseType<typeof promisedOne> // => number

export const assertUnreachable = (_x: never): never => { throw new Error('Didn\'t expect to get here') }

// ===================== MATH ===========================
export const unscale = (quantity: BigNumber, decimals = 18): number => {
  const digits = quantity.toString().length
  let digitsToRemove = digits - 15
  if (digitsToRemove > decimals) {
    throw new Error('number too large')
  }
  while(digitsToRemove > 9) {
    quantity = quantity.div(1e9)
    digitsToRemove -= 9
    decimals -= 9
  }
  let num = 0
  if (digitsToRemove > 0)  {
    decimals -= digitsToRemove
    num = quantity.div(10**digitsToRemove).toNumber()
  } else {
    num = quantity.toNumber()
  }
  const result = num / (10**decimals)
  return result
}
