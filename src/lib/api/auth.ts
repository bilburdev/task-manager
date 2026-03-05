const API_URL = 'http://localhost:8080';
// 'https://task-manager-backend-dif5.onrender.com';
// 'http://localhost:8080';

export async function signin(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Login failed');
  }
  return res.json();
}

export async function signup(email: string, password: string) {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Registration failed');
  }
  return res.json();
}

export async function signout() {
  const res = await fetch(`${API_URL}/auth/logout`, {
    method: 'DELETE',
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Logout failed');
  }
  return null;
}

export async function googleSignin() {
  const res = await fetch(`${API_URL}/auth/google/url`, {
    method: 'GET',
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Google Signin failed');
  }
  return res.json();
}

export async function confirmGoogleAuth(code: string) {
  const res = await fetch(`${API_URL}/auth/google/confirm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
    credentials: 'include',
  });
  if (!res.ok) {
    throw new Error('Google Authentication confirmation failed');
  }
  return res.json();
}
