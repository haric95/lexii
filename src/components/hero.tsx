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
            Start learning
          </button>
        </div>
      </div>


      <div className="relative bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-orange-600 rounded-md shadow-lg text-white">
                      <div className="font-extrabold text-lg">
                        <p>1</p>
                      </div>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Search for your language</h3>
                    <p className="mt-5 text-base text-gray-500">
                    In the search box above, choose the language that you speak the best or consider to be your mother tongue
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-orange-600 rounded-md shadow-lg text-white">
                      <div className="font-extrabold text-lg">
                        <p>2</p>
                      </div>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Choose your volunteer</h3>
                    <p className="mt-5 text-base text-gray-500">
                      Select the person you would like to practice your English with from the list of volunteers
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-orange-600 rounded-md shadow-lg text-white">
                      <div className="font-extrabold text-lg">
                        <p>3</p>
                      </div>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Select a time that works for you both</h3>
                    <p className="mt-5 text-base text-gray-500">
                    From the calendar choose when you will be available. Enter your phone number if you want the volunteer to call you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
