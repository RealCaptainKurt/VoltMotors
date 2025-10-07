const API_BASE_URL = '/api';

async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  return response.json();
}

export const api = {
  getCars: () => fetchApi<any[]>('/cars'),
  getCar: (id: string) => fetchApi<any>(`/cars/${id}`),
  createCar: (data: any) => fetchApi<any>('/cars', {
    method: 'POST',
    body: JSON.stringify(data),
  }),
};