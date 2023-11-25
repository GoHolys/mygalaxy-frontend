export function parseStringOrNumber(str: string) {
    return Number(str) || str;
  }