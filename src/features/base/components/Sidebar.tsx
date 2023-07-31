import React, { FunctionComponent } from "react";

import { Aside } from "./Aside";
import { ProfilePanel } from "@/features/user/components/ProfilePanel";
import { SearchPanel } from "@/features/search/components/SearchPanel";
import { CategoryListPanel } from "@/features/category/components/CategoryListPanel";
import { ManagePanel } from "@/features/user/components/ManagePanel";
import { useContextCategories } from "@/features/category/contexts/CategoriesContext";

interface Props {
  className?: string;
}

export const Sidebar: FunctionComponent<Props> = ({ className }) => {
  const { categories } = useContextCategories();

  return (
    <Aside className={`w-[300px] flex flex-col space-y-12 ${className || ""}`}>
      <ProfilePanel />
      <SearchPanel />
      <CategoryListPanel />
      <ManagePanel />
    </Aside>
  );
};
