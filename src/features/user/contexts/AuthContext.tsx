import React, {
  createContext,
  useState,
  useEffect,
  FunctionComponent,
  useContext,
} from "react";
import jwtDecode from "jwt-decode";
import { fetchMe, fetchToken } from "../libs/external/userFetcher";

interface AuthContextProps {
  user: IUser | null | undefined;
  token: IToken | null | undefined;
  errors: string[];
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  errors: [],
  login: () => {},
  logout: () => {},
});

interface Props {
  children: React.ReactNode;
}

const useAuthContext = () => {
  return useContext(AuthContext);
};

const AuthContextProvider: FunctionComponent<Props> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>();
  const [token, setToken] = useState<IToken | null>();
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const init = async () => {
      const access = localStorage.getItem("access");

      if (access) {
        const decodedToken = jwtDecode(access) as IToken;
        if (decodedToken.exp * 1000 < Date.now()) {
          reset();
        } else {
          setToken(decodedToken);

          try {
            const me = await fetchMe();
            setUser(me);
          } catch (e) {
            localStorage.removeItem("access");
          }
        }
      }
    };

    init();
  }, []);

  function reset() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }

  const login = async (email: string, password: string) => {
    setErrors([]);

    const newErrors = [];
    if (!email) newErrors.push("メールアドレスを入力してください");

    if (!password) newErrors.push("パスワードを入力してください");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      throw new Error("エラー発生");
    }

    try {
      const { access, refresh } = await fetchToken(email, password);

      if (access) {
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        const decodedToken = jwtDecode(access) as IToken;
        setToken(decodedToken);
        setUser(await fetchMe());
      } else {
        reset();
      }
    } catch (e) {
      setErrors(["メールアドレスまたはパスワードが違います"]);
      throw e;
    }
  };

  const logout = () => {
    reset();
  };

  return (
    <AuthContext.Provider value={{ user, token, errors, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
