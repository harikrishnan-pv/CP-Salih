import React from "react";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";

export default function Profile() {
  return (
    <div className="bg-white">
      <div className="pt-28 min-h-screen px-5 flex items-center lg:px-40 justify-center ">
        <div className="grid  grid-cols-1  lg:grid-cols-3">
          <div className="lg:col-span-2 p-10  profile-top"></div>
          <div className="bg-gray-600 lg:col-span- text-white p-10">
            <div className="text-2xl text-justify ">
              <b>
                Mohamed Salih C.P, our chairman, is a pioneer extraordinaire,
                altruist with the mind of a futurist.
              </b>
              <br />
              <br />
              <div className="text-justify">
                He is the Chairman and Managing Director of AASA group of
                companies and the chairman of CP Mohamed Memorial Charitable
                Trust, which was founded purely for his charitable activities
                funded by his personal income from his overseas business
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mt-20 px-5 mx-auto">
        <Card>
          <CardBody>
            <div className="grid lg:grid-cols-2 items-center gap-5 ">
              <div className="text-xl  my-auto">
                <div className="text-justify ">
                  <b>
                    The Economic Community of West African States (ECOWAS) has
                    appointed Salih CP, Chairman and MD of AASA Group and
                    Chairman of CP Trust as the Indian Trade Commissioner.
                  </b>
                  <br />
                  <br />
                  Salih’s appointment as the Indian Trade Commissioner was
                  announced at the International Day of African Descent
                  organized by the India-Africa Trade Council and ECOWAS at
                  Dubai Atlantis Hotel.
                  <br />
                  <br />
                  The letter in this regard was handed over to the ambassadors
                  of various African countries at the ceremony. In the changing
                  world order, by strengthening the UAE-India-Africa
                  relationship, Salih CP said that challenges including climate
                  change can be faced. He stated that commercial development
                  will also work for the betterment of the people. Counselor
                  General of India was present on the occasion.
                  <br />
                  <br />
                  Ghana’s traditional rulers and diplomatic representatives
                  attended. Diplomatic representatives of countries like
                  Namibia, Ethiopia, Gabon, Gambia and Zambia were also present.
                  Ajman Police Chief Brigadier General Sheikh Sultan bin
                  Abdullah Al Naimi was the chief guest at the event. ‘Vision
                  2050’ study report put forward by ECOWAS, was released by Salih C.P, who took
                  over as the Trade Commissioner. ASA Group Board of
                  Directors members Anhar Saleh, Sajjeed Saleh and Sahal Saleh
                  presented reports on the resources and potential of African
                  countries.
                </div>
              </div>
              <div className=" grid grid-rows-2 gap-4 ">
                <img src=" imgs/prfl4.jpg" alt="" />
                <img src=" imgs/prfl5.jpg" alt="" />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="max-w-7xl mt-20 px-5 mx-auto">
        <Card>
          <CardBody>
            <div className="grid lg:grid-cols-3 items-center gap-5">
              <div className="text-xl  my-auto">
                <div className="text-justify">
                  <b>
                    C.P Salih is widely known for his philanthropic activities
                    in the Middle East and back in his home town.
                  </b>
                  <br />
                  <br />
                  His companies provide jobs for 5000+ Indians. He is constantly
                  helping those who are in trouble financially, medically and
                  legally in UAE. He provided food, accommodation, medical
                  facilities and internet facilities to 400+ Indians who were
                  stranded in UAE on their way to Saudi Arabia due to COVID – 19
                  restrictions. He is sponsoring education of school children,
                  especially abled children (local and expatriates) in UAE and
                  Kerala.
                </div>
              </div>
              <img src=" imgs/prfl2.png" alt="" />

              <img src=" imgs/prfl3.jpeg" alt="" />
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="max-w-7xl pt-28 px-5 mx-auto">
        <Card>
          <CardBody>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="hidden lg:flex">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ps76s-0pRXo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="lg:hidden">
                <iframe
                  width="300"
                  height="170"
                  src="https://www.youtube.com/embed/ps76s-0pRXo"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="text-xl lg:col-span-1 my-auto">
                <div className="text-justify">
                  He is a role model for young entrepreneurs in UAE and India
                  and a motivator for new generation job seekers. He is always a
                  supporter and helping hand to those who are in dire need of
                  assistance. His good relations and contacts with UAE ruling
                  family members, department heads, Indian Missions, Indian
                  associations, etc. help a lot for his philanthropic
                  activities.
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="max-w-7xl py-28 px-5 mx-auto">
        <Card>
          <CardBody>
            <div className="grid lg:grid-cols-4 gap-10">
              <div className="text-2xl my-auto lg:col-span-4">
                <div className="font-bold">Early Life</div>
                <div className=" text-xl pt-2 text-justify">
                  C P Salih was born in Valapad village in Thrissur district.
                  The home he grew up, along with his 10 siblings, was a huge
                  one. He was born into a prominent aristocratic family which
                  was well known in Thrissur district. From a very young age, he
                  was influenced by his father, C.P Mohamed the then headman of
                  Chandana Parambil family, who was an agriculturist and well
                  known philanthropist of those time.
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
