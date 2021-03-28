import { AutoComplete } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { useEffect, useState } from "react";
import "./languageSearch.scss";

type LanguageSearchProps = {
  setLanguage: (id: string) => void;
  prefilledLanguage?: string | null;
  size?: SizeType;
  className?: string;
  placeholder?: string;
};

const languages = [
  "Arabic",
  "Bengali",
  "Cantonese/Yue",
  "English",
  "French",
  "German",
  "Hindi/Urdu",
  "Italian",
  "Japanese",
  "Korean",
  "Marathi",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Russian",
  "Somali",
  "Spanish",
  "Tamil",
  "Telugu",
  "Turkish",
  "Vietnamese",
  "Wu",
];

export const LanguageSearch: React.FC<LanguageSearchProps> = ({
  prefilledLanguage = null,
  setLanguage,
  size = "large",
  className = "",
  placeholder,
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
          placeholder={placeholder ? placeholder : "Enter your first language"}
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
