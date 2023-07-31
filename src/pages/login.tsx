import React from "react";

import { Block } from "@/features/base/components/Block";
import { LoginForm } from "@/features/user/components/LoginForm";

const Index = () => {
  return (
    <Block className="flex items-center justify-center h-screen bg-sky-100">
      <LoginForm />
    </Block>
  );
};

export default Index;
