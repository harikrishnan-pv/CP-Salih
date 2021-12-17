import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { photos2 } from "./photos2";
import { photos3 } from "./photos3";
import { photos4 } from "./photos4";
import { photos5 } from "./photos5";
import { photos6 } from "./photos6";
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";
import PausedOverlay2 from "./v2";
import PausedOverlay3 from "./v3";
import PausedOverlay4 from "./v4";


export default function Gallery1() {
    return (
        <div>
            <div className="flex py-40 pt-56 items-center justify-center">
                <div className="font-bold text-8xl">
                    Gallery
                </div>
            </div>
            <div className="max-w-7xl pb-20 mx-auto">
                <div className="font-bold pl-4 pt-2 text-5xl">
                    CFLTC Inaguration                </div>
                <br />

                <Gallery margin={15} photos={photos} />
                <br />
                <br />
                <div className="font-bold pl-4 pt-2 text-5xl">
                    Mammootty Visiting CFLTC              </div>
                <br />
                <br />

                <Gallery margin={15} photos={photos3} />
                <br /> <br />
                <div className="font-bold pl-4 pt-2 text-5xl">
                    Wishes for CFLTC              </div>
                <br />

                <div className='pl-1' >
                    <HoverVideoPlayer
                        videoSrc="imgs\v2.mp4"
                        volume={0.5}
                        muted={false}
                        pausedOverlay={<PausedOverlay2 />}
                        loadingOverlay={<LoadingOverlay />}
                        style={{
                            width: '98.5%'
                        }}
                    />
                </div>

                <div className="grid max-w-7xl pt-10 mx-auto lg:grid-cols-2 gap-9 pl-1" >
                    <div>

                        <div >
                            <HoverVideoPlayer
                                videoSrc="imgs\v3.mp4"
                                volume={0.5}
                                muted={false}
                                pausedOverlay={<PausedOverlay3 />}
                                loadingOverlay={<LoadingOverlay />}
                                style={{
                                    width: '98.5%'
                                }}
                            />
                        </div>

                    </div>

                    <div>

                        <div className='pt-1' >
                            <HoverVideoPlayer
                                videoSrc="imgs\v4.mp4"
                                volume={0.5}
                                muted={false}
                                pausedOverlay={<PausedOverlay4 />}
                                loadingOverlay={<LoadingOverlay />}
                                style={{
                                    width: '97.5%'
                                }}
                            />
                        </div>

                    </div>
                </div>

                <br /><br />
                <div className="font-bold pl-4 pt-2 text-5xl">
                    Food Storage for CFLTC             </div>
                <br />

                <Gallery margin={15} photos={photos4} />

                

                <div className="p-1 pt-4">
                    <HoverVideoPlayer
                        videoSrc="imgs\v1.mp4"
                        volume={0.5}
                        muted={false}
                        pausedOverlay={<PausedOverlay />}
                        loadingOverlay={<LoadingOverlay />}
                    />
                </div>
                <br /><br />
                <div className="font-bold pl-4 pt-2 text-5xl">
                    Food Distribution
                </div>
                <br />

                <Gallery margin={15} photos={photos2} />
                <br /><br />
                <div className="font-bold pl-4 pt-2 text-5xl">
                    Free Vaccination Camp
                </div>
                <br />
                <Gallery margin={15} photos={photos5} />
                <br /><br />
                <div className="font-bold pl-4 pt-2 text-5xl">
                    Dream Home Project
                </div>
                <br />
                <Gallery margin={15} photos={photos6} />
            </div>

        </div>
    )
}
