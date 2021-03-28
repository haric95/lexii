import { endpoints } from "endpoints";
import { fetcher } from "fetcher";
import { VolunteerPreview } from "pages/find-a-partner";
import React, { useEffect, useState } from "react";

type UserPreviewListProps = {
  handleCardSelect: (id: number) => void;
};

const colorArray = ["green", "pink", "red", "blue", "yellow"];

export const UserPreviewList: React.FC<UserPreviewListProps> = ({
  handleCardSelect,
}) => {
  const [partners, setPartners] = useState<VolunteerPreview[] | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    fetcher
      .get<{ partners: VolunteerPreview[] }>(endpoints.partners, { params })
      .then((response) => {
        return setPartners(response.data.partners);
      });
  }, []);

  return (
    <>
      <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {partners && partners.length > 0 ? (
          partners.map((partner) => (
            <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="flex-1 flex flex-col p-8">
                <img
                  className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=x7QNkZPUXj&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                />
                <h3 className="mt-6 text-left text-gray-900 text-sm font-medium">
                  {partner.name}
                </h3>
                <dl className="mt-1 flex-grow flex flex-col justify-between">
                  <dt className="sr-only">Title</dt>
                  <dd className="text-gray-500 text-sm text-left">
                    {partner.about_me}
                  </dd>
                  <dt className="sr-only">Role</dt>
                  <dd className="mt-3 flex justify-end">
                    {partner.interests.map((interest, index) => (
                      <span
                        className={`px-2 py-1 text-${
                          colorArray[index]
                        }-800 text-xs font-medium bg-${
                          colorArray[index]
                        }-100 rounded-full ${
                          index !== partner.interests.length - 1 && "mr-2"
                        }`}
                      >
                        {interest}
                      </span>
                    ))}
                  </dd>
                </dl>
              </div>
              <div>
                <div className="-mt-px flex divide-x divide-gray-200">
                  <div className="-ml-px w-0 flex-1 flex">
                    <a
                      href={partner.calendly_url}
                      className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                      target="_blank"
                    >
                      {/* Heroicon name: solid/phone */}
                      <svg
                        className="w-5 h-5 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span className="ml-3">Set up a call</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <h1>No results</h1>
        )}
      </ul>
    </>
  );
};
