import type { AuthResponse, LoginCredentials, RegisterCredentials } from "@/features/auth/types/auth.types";
import { apiClient } from "@/shared/api/apiClient";

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/auth/login", credentials);

  return data;
}

export async function registerUser(credentials: RegisterCredentials): Promise<AuthResponse> {
  const { data } = await apiClient.post<AuthResponse>("/auth/register", credentials);

  return data;
}