import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";

export default function Gallery1() {
    return (
        <div>
            <Gallery photos={photos} />
        </div>
    )
}
