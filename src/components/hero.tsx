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
          We connect you with English speakers who speak your first language
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

<div className="py-20 bg-white ">
  <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 className="sr-only">Search for your language</h2>
    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      <div>
        <dt>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
            <div className="font-extrabold text-lg">
              <p>1</p>
            </div>
          </div>
          <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Search for your language</p>
        </dt>
        <dd className="mt-2 text-base text-gray-500">
         In the search box above, choose the language that you speak the best.
        </dd>
      </div>

      <div>
        <dt>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">

          <div className="font-extrabold text-lg">
              <p>2</p>
            </div>
          </div>
          <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Choose your volunteer</p>
        </dt>
        <dd className="mt-2 text-base text-gray-500">
        From the list select the person you would like to practice your English with. 
        </dd>
      </div>

      <div>
        <dt>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-600 text-white">
          <div className="font-extrabold text-lg">
              <p>3</p>
            </div>
          </div>
          <p className="mt-5 text-lg leading-6 font-medium text-gray-900">Select a time that works for you both</p>
        </dt>
        <dd className="mt-2 text-base text-gray-500">
        From the calendar choose when you will be available. Enter your phone number if you want the volunteer to call you.        </dd>
      </div>
    </dl>
  </div>
</div>
    </main>
  );
};
