import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
export default function Gallery1() {
    return (
        <div>
            <div className="flex py-40 pt-56 items-center justify-center">
                <div className="font-bold text-8xl">
                    Gallery
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <Gallery margin={5} photos={photos} />
            </div>
        </div>
    )
}
