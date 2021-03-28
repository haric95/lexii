import { AutoComplete } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { useEffect, useState } from "react";
import "./languageSearch.scss";

type LanguageSearchProps = {
  setLanguage: (id: string) => void;
  prefilledLanguage?: string | null;
  size?: SizeType;
  className?: string;
};

const languages = [
  "Spanish",
  "English",
  "Hindi/Urdu",
  "Arabic",
  "Bengali",
  "Portuguese",
  "Russian",
  "Japanese",
  "German",
  "Punjabi",
  "Wu",
  "French",
  "Telugu",
  "Vietnamese",
  "Marathi",
  "Korean",
  "Tamil",
  "Italian",
  "Turkish",
  "Cantonese/Yue",
  "Polish",
  "Somali",
];

export const LanguageSearch: React.FC<LanguageSearchProps> = ({
  prefilledLanguage = null,
  setLanguage,
  size = "large",
  className = "",
}) => {
  const [searchValue, setSearchValue] = useState("");

  const suggestions = languages
    ? languages
        .filter((language) =>
          language.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((language) => ({ label: language, value: language }))
    : [];

  useEffect(() => {
    if (prefilledLanguage && languages && languages?.length > 0) {
      setSearchValue(prefilledLanguage);
      setLanguage(prefilledLanguage);
    }
  }, [prefilledLanguage, languages]);

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
          onSelect={(value) => {
            setLanguage(value);
          }}
          size={size}
          className={className}
        />
      }
    </div>
  );
};
