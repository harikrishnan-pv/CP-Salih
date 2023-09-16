import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { photos2 } from "./photos2";
import { photos3 } from "./photos3";
import { photos4 } from "./photos4";
import { photos5 } from "./photos5";
import { photos6 } from "./photos6";
import { photos7 } from "./photos7";
import { photos8 } from "./photos8";
import { photos9 } from "./photos9";



export default function Gallery1() {
  return (
    <div>
      <div className="flex py-40 pt-56 items-center justify-center">
        <div className="font-bold text-8xl">Gallery</div>
      </div>
      <div className="max-w-7xl pb-20 mx-auto">
        <div className="font-bold pl-4 pt-2 text-5xl">Various welfare and charity programs conducted by CP Trust in 2023 </div>
        <br />
        <Gallery margin={15} photos={photos9} />
        <div className="p-3 ">
            <video controls>
              <source src="imgs/welf1.mp4" type="video/mp4" />
            </video>
          </div>
        <br />
        <br />
        <div className="font-bold pl-4 pt-2 text-5xl">CFLTC Inaguration </div>
        <br />
        <Gallery margin={15} photos={photos} />
        <br />
        <br />

        <div className="font-bold pl-4 pt-2 text-5xl">
          Mammootty Visiting CFLTC{" "}
        </div>
        <br />
        <br />
        <Gallery margin={15} photos={photos3} />
        <br /> <br />
        <div className="font-bold pl-4 pt-2 text-5xl">Wishes for CFLTC </div>
        <br />
        <div className="p-3">
          <video controls>
            <source src="imgs/v2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="grid max-w-7xl pt-10 mx-auto lg:grid-cols-2 gap-9 pl-1">
          <div>
            <div className="p-3">
              <video controls>
                <source src="imgs/v3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div>
            <div className="p-3">
              <video controls>
                <source src="imgs/v4.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="font-bold pl-4 pt-2 text-5xl">
          Food Storage for CFLTC{" "}
        </div>
        <br />
        <Gallery margin={15} photos={photos4} />
        <div className="p-3">
          <video controls>
            <source src="imgs/v1.mp4" type="video/mp4" />
          </video>
        </div>
        <br />
        <br />
        <div className="font-bold pl-4 pt-2 text-5xl">Food Distribution</div>
        <br />
        <Gallery margin={15} photos={photos2} />
        <br />
        <br />
        <div className="font-bold pl-4 pt-2 text-5xl">
          Free Vaccination Camp
        </div>
        <br />
        <Gallery margin={15} photos={photos5} />
        <br />
        <br />
        <div className="font-bold pl-4 pt-2 text-5xl">Dream Home Project</div>
        <br />
        <Gallery margin={15} photos={photos6} />
        <Gallery margin={15} photos={photos7} />
        <br />
        <br />
        <div className="font-bold pl-4 pt-2 text-5xl">Water Distribution Project</div>
        <br />
        <Gallery margin={15} photos={photos8} />
        <div className="grid lg:grid-cols-2">
          <div className="p-3">
            <video controls>
              <source src="imgs/w1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-3">
            <video controls>
              <source src="imgs/w2.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-3">
            <video controls>
              <source src="imgs/w3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-3">
            <video controls>
              <source src="imgs/w5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <br /><br />
        <div className="font-bold pl-4 pt-2 text-5xl">Financial Support for Cancer Patients</div>
        <br />
        <div>
          <div className="p-3">
            <video controls>
              <source src="imgs/v5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
