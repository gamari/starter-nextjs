import React, { FunctionComponent } from "react";

import { Block } from "./Block";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Main } from "./Main";
import Head from "next/head";
import { CategoriesContextProvider } from "@/features/category/contexts/CategoriesContext";

interface Props {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

export const Layout: FunctionComponent<Props> = ({
  className,
  children,
  title,
}) => {
  return (
    <CategoriesContextProvider>
      <Head>
        <title>ブログ{title ? ` | ${title}` : ""}</title>
      </Head>

      <Header />

      <Main className="bg-gray-200/80 min-h-screen w-full">
        <Block className="max-w-[1100px] mx-auto grid grid-cols-[1fr,min-content] gap-8">
          <Block className={`${className || ""}`}>{children}</Block>

          <Sidebar className="mt-10" />
        </Block>
      </Main>
    </CategoriesContextProvider>
  );
};
