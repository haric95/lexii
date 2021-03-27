import { AutoComplete } from "antd";
import React, { useEffect, useState } from "react";
import { fetcher } from "../fetcher";
import { endpoints } from "../endpoints";

type Language = {
  id: number;
  name: string;
};

const DUMMY_OPTIONS = [
  { value: "French", label: "French" },
  { value: "Polish", label: "Polish" },
  { value: "Sudanese", label: "Sudanese" },
  { value: "Swahili", label: "Swahili" },
];

type LanguageSearchProps = {
  setId: (id: number) => void;
};

export const LanguageSearch: React.FC<LanguageSearchProps> = ({
  children,
  setId,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [languages, setLanguages] = useState<Language[] | null>(null);

  const suggestions = languages
    ? languages
        .filter((option) =>
          option.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((option) => ({ label: option.name, value: option.name }))
    : [];

  useEffect(() => {
    fetcher
      .get<{ languages: Language[] }>(endpoints.languages)
      .then((response) => setLanguages(response.data.languages));
  }, []);

  return (
    <div className="language-search">
      {
        <AutoComplete
          options={[{ options: suggestions }]}
          placeholder={"Enter your primary language"}
          value={searchValue}
          onChange={(value) => {
            setSearchValue(value);
          }}
          onSelect={(value, option) => {
            const language = languages?.find(
              (l) => l.name === value
            ) as Language;
            setId(language.id);
          }}
        />
      }
    </div>
  );
};
