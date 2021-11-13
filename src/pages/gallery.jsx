import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { photos2 } from "./photos2";
import { photos3 } from "./photos3";
import { photos4 } from "./photos4";
import { photos5 } from "./photos5";
export default function Gallery1() {
    return (
        <div>
            <div className="flex py-40 pt-56 items-center justify-center">
                <div className="font-bold text-8xl">
                    Gallery
                </div>
            </div>
            <div className="max-w-7xl pb-20 mx-auto">
            <div className="font-bold pl-4 pt-2 text-4xl">
CFLTC Inaguration                </div>
<br />
                <Gallery margin={15} photos={photos} />
                <div className="font-bold pl-4 pt-2 text-4xl">
Mammootty Visiting CFLTC              </div>
<br />
                <Gallery margin={15} photos={photos3} />
                <div className="font-bold pl-4 pt-2 text-4xl">
Food Storage             </div>
<br />
<Gallery margin={15} photos={photos4} />
                <div className="font-bold pl-4 pt-2 text-4xl">
                    Food Distribution
                </div>
                <br />

                <Gallery margin={15} photos={photos2} />
                <div className="font-bold pl-4 pt-2 text-4xl">
                    Free Vaccination
                </div>
                <br />
                <Gallery margin={15} photos={photos5} />
            </div>
            
        </div>
    )
}
