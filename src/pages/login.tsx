import { LoginForm } from "@/features/account/components/LoginForm";
import { Block } from "@/features/base/components/layout/Block";
import React from "react";

const Index = () => {
  return (
    <Block className="flex items-center justify-center h-screen bg-sky-100">
      <LoginForm />
    </Block>
  );
};

export default Index;
