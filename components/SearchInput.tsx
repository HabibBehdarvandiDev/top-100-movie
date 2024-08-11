"use client";

import { Input } from "@nextui-org/react";
import Search01Icon from "./icons/Search01Icon";
import { Dispatch, SetStateAction } from "react";

const SearchInput = ({
  setSearchValue,
}: {
  setSearchValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Input
      size="lg"
      startContent={
        <Search01Icon className="w-6 h-6 text-zinc-400 placeholder:text-zinc-300" />
      }
      placeholder="ex: interstelar"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default SearchInput;
