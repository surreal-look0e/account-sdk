// src/utils/addressHelpers.ts

/** Checks if a value is a valid hex string. */
export function isHexString(value: unknown): value is `0x${string}` {
  return typeof value === "string" && /^0x[0-9a-fA-F]+$/.test(value);
}

/** Validates a standard Ethereum address (0x + 40 hex chars). */
export function isValidEthAddress(address: unknown): boolean {
  return typeof address === "string" && isHexString(address) && address.length === 42;
}

/** Shortens an Ethereum address for display (e.g., 0x123456…abcd). */
export function shortenEthAddress(address: string, left = 6, right = 4): string {
  if (!isValidEthAddress(address)) return address;
  return `${address.slice(0, 2 + left)}…${address.slice(-right)}`;
}
