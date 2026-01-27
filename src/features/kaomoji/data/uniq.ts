export function uniq(values: readonly string[]) {
  const seen = new Set<string>();
  return values
    .map((value) => value.trim())
    .filter((value) => value.length > 0)
    .filter((value) => {
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
}

