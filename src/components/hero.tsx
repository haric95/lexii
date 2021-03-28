import { AppPath } from "../constants";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { LanguageSearch } from "./languageSearch";

export const Hero: React.FC = ({ children }) => {
  const history = useHistory();
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleNavigateToList = () => {
    history.push(`${AppPath.FIND_A_PARTNER}?language=${selectedLanguage}`);
  };
  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">
            Find a language mentor
            <br />
          </span>
          <span className="block text-orange-600 xl:inline">
            in your community
          </span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-5 max-w-md flex-col mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow mb-4" style={{ width: "100%" }}>
            <LanguageSearch setLanguage={setSelectedLanguage} />
          </div>
          <button
            type="button"
            className="mb-4 inline-flex justify-center items-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleNavigateToList}
          >
            Search
          </button>
        </div>
      </div>
    </main>
  );
};
