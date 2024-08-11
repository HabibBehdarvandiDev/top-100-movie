"use client";

import { useState } from "react";
import SearchInput from "./SearchInput";
import Movies from "./Movies";

const Container = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return <div className="p-3 flex flex-col gap-4">
    <SearchInput setSearchValue={setSearchValue} />
    <Movies searchValue={searchValue} />
  </div>;
};

export default Container;
