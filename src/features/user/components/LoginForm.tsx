import { Block } from "@/features/base/components/Block";
import { Card } from "@/features/base/components/Card";
import { Title } from "@/features/base/components/Title";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { Errors } from "@/features/base/components/Errors";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, errors } = useAuthContext();

  const handleLogin = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    await login(email, password);
    router.push("/");
  };

  return (
    <Card className="p-4 rounded-lg flex flex-col space-y-3">
      <Title>ログイン</Title>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="border p-1"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="border p-1"
      />
      <button
        type="submit"
        className="p-2 bg-gray-500 text-white"
        onClick={handleLogin}
      >
        Login
      </button>

      <Errors errors={errors} />
    </Card>
  );
};
