import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const API_BASE_URL = import.meta.env.VITE_API_URL;
const COOKIE_NAME = 'auth_token';

console.log(API_BASE_URL);

interface User {
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (email: string, password: string, name: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const checkUser = async () => {
      try {
        const token = Cookies.get(COOKIE_NAME);

        console.log({token});
        if (!token) {
          setLoading(false);
          return;
        }

        const response = await fetch(`${API_BASE_URL}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include' // Important for cookies
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          Cookies.remove(COOKIE_NAME);
        }
      } catch (error) {
        console.error('Session check failed:', error);
        Cookies.remove(COOKIE_NAME);
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, []);

  const signup = async (email: string, password: string, name: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name }),
        credentials: 'include' // Important for cookies
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      Cookies.set(COOKIE_NAME, data.token, { 
        expires: 7, // Cookie expires in 7 days
        secure: true, // Only send cookie over HTTPS
        sameSite: 'strict' // Prevent CSRF attacks
      });
      setUser(data.user);
      navigate('/');
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // Important for cookies
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      Cookies.set(COOKIE_NAME, data.token, { 
        expires: 7, // Cookie expires in 7 days
        secure: true, // Only send cookie over HTTPS
        sameSite: 'strict' // Prevent CSRF attacks
      });
      setUser(data.user);
      navigate('/');
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    try {
      const token = Cookies.get(COOKIE_NAME);
      if (token) {
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          credentials: 'include' // Important for cookies
        });
      }
      Cookies.remove(COOKIE_NAME);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error);
      Cookies.remove(COOKIE_NAME);
      setUser(null);
      navigate('/');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 