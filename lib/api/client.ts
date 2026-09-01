const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.pratap.world";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public correlation_id?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export async function apiGet<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const url = `${BASE_URL}${path}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    let errorMessage = `Request failed with status ${res.status}`;
    try {
      const errorBody = (await res.json()) as { error?: string | { code?: string; message?: string } };
      if (errorBody.error) {
        errorMessage = typeof errorBody.error === "string"
          ? errorBody.error
          : errorBody.error.message || `Request failed with status ${res.status}`;
      }
    } catch { }
    throw new ApiError(res.status, errorMessage);
  }

  return res.json() as Promise<T>;
}
