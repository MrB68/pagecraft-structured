import { RuntimeData } from "@/types";

const VAR_RE = /\{\{\s*([^{}]+?)\s*\}\}/g;

function getPath(obj: any, path: string): any {
  if (!obj || typeof obj !== "object") return undefined;
  const keys = path.split(".");
  let current = obj;
  for (const key of keys) {
    if (current == null || typeof current !== "object") return undefined;
    current = current[key];
  }
  return current;
}

function resolveString(str: string, data: RuntimeData): string {
  return str.replace(VAR_RE, (_, path) => {
    const value = getPath(data, path.trim());
    if (value === undefined || value === null) {
      return "";
    }
    return String(value);
  });
}

export function resolveValue<T>(value: T, data: RuntimeData): T {
  if (typeof value === "string") {
    return resolveString(value, data) as unknown as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveValue(item, data)) as unknown as T;
  }

  if (value !== null && typeof value === "object" && !(value instanceof Date)) {
    const result: Record<string, any> = {};
    for (const [key, val] of Object.entries(value)) {
      result[key] = resolveValue(val, data);
    }
    return result as unknown as T;
  }

  return value;
}

