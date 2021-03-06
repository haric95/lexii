import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSignedInStatus, signOut } from "reducers/auth";
import { AppPath } from "../constants";
import Logo from "../assets/logo.svg";
import { setName } from "reducers/misc";

export type HeaderProps = {
  headerType: "publicMigrant" | "publicVolunteer" | "loggedIn";
};

export const Header: React.FC<HeaderProps> = ({ headerType }) => {
  const authState = useSelector(selectSignedInStatus);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    dispatch(signOut());
    dispatch(setName(""));
    window.localStorage.removeItem("userId");
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-white">
      <div className="max-w-12xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to={AppPath.ROOT}
              style={{
                transform: "scale(2.0) translateY(4px)",
                transformOrigin: "left",
              }}
            >
              <span className="sr-only">Workflow</span>
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {authState === "signed_out" ? (
              <Link
                to={AppPath.SIGN_IN}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign in
              </Link>
            ) : (
              <button
                onClick={handleSignOut}
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sign out
              </button>
            )}
            {headerType === "publicMigrant" ? (
              <Link
                to={AppPath.VOLUNTEER}
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 hover-text-white"
              >
                Sign up as a volunteer
              </Link>
            ) : (
              authState === "signed_out" && (
                <Link
                  to={AppPath.ROOT}
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 hover-text-white"
                >
                  Find a language partner
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* MOBILE */}
      {/* TODO(HC): Add transition */}
      {isMenuOpen && (
        <div className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Link
                    to={AppPath.ROOT}
                    style={{
                      transform: "scale(2.0) translateY(4px)",
                      transformOrigin: "left",
                    }}
                  >
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto sm:h-10" src={Logo} alt="" />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              {authState === "signed_out" ? (
                <Link
                  to={AppPath.SIGN_IN}
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium"
                >
                  Sign in
                </Link>
              ) : (
                <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium">
                  Sign out
                </button>
              )}
              <div>
                {headerType === "publicMigrant" ? (
                  <Link
                    to={AppPath.VOLUNTEER}
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700"
                  >
                    Sign up as a volunteer
                  </Link>
                ) : (
                  authState === "signed_out" && (
                    <Link
                      to={AppPath.ROOT}
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700 hover-text-white"
                    >
                      Find a language partner
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
