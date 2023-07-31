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
    console.log("AuthContextProvider");
    const accessToken = localStorage.getItem("access");

    if (accessToken) {
      const decodedToken = jwtDecode(accessToken) as IToken;
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("access");
        // TODO refresh token
      } else {
        setToken(decodedToken);
        fetchMe()
          .then((user) => {
            setUser(user);
          })
          .catch((error) => {
            // TODO エラー処理
          });
      }
    }
  }, []);

  const login = async (email: string, password: string) => {
    console.log("LOGIN");
    setErrors([]);

    // バリデーション
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
        const decodedToken = jwtDecode(access) as IToken;
        setToken(decodedToken);
        setUser(await fetchMe());
        localStorage.setItem("refresh", refresh);
      } else {
        // TODO ログインできない場合
      }
    } catch (e) {
      setErrors(["メールアドレスまたはパスワードが違います"]);
      throw e;
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, errors, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, useAuthContext };
