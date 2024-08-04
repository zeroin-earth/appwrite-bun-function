export function throwIfMissing(obj: NodeJS.ProcessEnv, keys: string[]) {
  const missing = []
  for (const key of keys) {
    if (!(key in obj) || !obj[key]) {
      missing.push(key)
    }
  }
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`)
  }
}
