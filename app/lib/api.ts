export async function fetchData<T>(endpoint: string): Promise<T> {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }
  return res.json();
}
