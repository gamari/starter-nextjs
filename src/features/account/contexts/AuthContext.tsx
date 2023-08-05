import {
  FunctionComponent,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Account, Session } from "../types";
import { useErrors } from "@/features/error/hooks/useErrors";
import { Authentication } from "../lib/Authentication";

interface AuthContextProps {
  session: Session | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (newAccount: Account) => Promise<void>;
  errors: string[];
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
  session: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  errors: [],
  register: async () => {},
});

const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("AuthProvider内で利用してください");
  }

  return context;
};

interface Props {
  children: React.ReactNode;
}

const AuthProvider: FunctionComponent<Props> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { errors, setErrors, clearErrors } = useErrors();

  useEffect(() => {
    async function init() {
      const authentication = new Authentication(
        localStorage.getItem("access"),
        localStorage.getItem("refresh")
      );

      try {
        const newSession = await authentication.getUserByToken();
        setSession(newSession);
      } catch (e) {
        logout();
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  async function login(email: string, password: string) {
    try {
      clearErrors();
      const authentication = new Authentication();
      const newSession = await authentication.authenticate(email, password);

      if (newSession) {
        setSession(newSession);
        localStorage.setItem("access", newSession.access || "");
        localStorage.setItem("refresh", newSession.refresh || "");
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrors(["ログインできませんでした。"]);
      }
    }
  }

  async function register(newAccount: Account) {
    try {
      clearErrors();
      const authentication = new Authentication();
      const newSession = await authentication.singnup(newAccount);
      if (newSession) {
        setSession(newSession);
        localStorage.setItem("access", newSession.access || "");
        localStorage.setItem("refresh", newSession.refresh || "");
      }
    } catch (e) {
      if (e instanceof Error) {
        setErrors(["ユーザー登録できませんでした。"]);
      }
    }
  }

  async function logout() {
    setSession(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  return (
    <AuthContext.Provider
      value={{ session, loading, login, logout, register, errors }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
