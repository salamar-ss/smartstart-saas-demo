import type { AuthResponse, LoginCredentials, RegisterCredentials } from "@/features/auth/types/auth.types";

const fakeUser = {
  id: "1",
  name: "SmartStart User",
  email: "user@smartstart.com",
  role: "user" as const,
};

function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

export async function loginUser(credentials: LoginCredentials): Promise<AuthResponse> {
  await wait(700);

  return {
    user: {
      ...fakeUser,
      email: credentials.email,
    },
    token: "fake-jwt-token",
  };
}

export async function registerUser(credentials: RegisterCredentials): Promise<AuthResponse> {
  await wait(700);

  return {
    user: {
      id: "2",
      name: credentials.name,
      email: credentials.email,
      role: "user",
    },
    token: "fake-register-token",
  };
}