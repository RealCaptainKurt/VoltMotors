export interface Car {
  id: string;
  model: string;
  year: number;
  price: number;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}