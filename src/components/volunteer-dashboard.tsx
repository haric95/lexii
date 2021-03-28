import React from "react";
import { Page } from "./page";
import Image  from "../assets/thank-you.jpeg"

export const VolunteerDashboard: React.FC = ({}) => {
  return (
        <div className="relative bg-white py-16 sm:py-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div className="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>
                <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>

              <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">

              <div className="absolute inset-0 bg-orange-500" ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-orange-600 via-orange-600 opacity-50"></div> 
              <img className="absolute inset-0 h-full w-full object-cover opacity-100" src={Image} alt=""/>
            </div>
            </div>
          </div>
        

            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              <div className="pt-12 sm:pt-16 lg:pt-20">
                <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                  Thank you for joining us!
                </h2>
                <div className="mt-6 text-gray-500 space-y-6">
                  <p className="text-lg">
                   Well done, you've just signed up to help a migrant successfully integrate to their community. 
                  </p>
                  <p className="text-base leading-7">
                   Lexii is very much engaged with promoting community engagement and cohesion through language exchange. We hope that you'll learn something new too and there is no better way than through conversations. 
                  </p>
                  <p className="text-base leading-7">
                    It is important to us that as a volunteer you have a mutually supportive experience with Lexii
                  </p>
                  <p className="text-base leading-7 font-bold">
                    Our expectations of you as a volunteer
                  </p>
                  <ul>
                    <li>- be supportive and </li>
                    <li>- support our values and behaviours and show respect for the person you are speaking with</li>
                    <li>- respect the confidentiality of the person and do not divulge what's shared unless permitted</li>
                    <li>- stake responsibility for your own health and safety and be aware of how your actions could impact those who work with you</li>
                    <li>- some of our migrants don't have regular access to internet so please copy the text below and call them on their number</li>
                  </ul>
                  <p>
                  We welcome any feedback and encourage you to raise concerns or complaints directly with us.
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                  <div className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">Founded</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
                  </div>

                  <div className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">Employees</dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">5</dd>
                  </div>
                </dl>
                <div className="mt-10">
                  <a href="https://www.crisis.org.uk/get-involved/real-life-homeless-stories/?sb=date" className="text-base font-medium text-indigo-600"> Learn more about how Crisis is changing the world <span aria-hidden="true">&rarr;</span> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};
