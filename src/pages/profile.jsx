import React from 'react'
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Image from '@material-tailwind/react/Image';



export default function Profile() {
    return (
        <div>
            <div className="pt-28  h-screen flex items-center px-40 justify-center ">
                <div className="grid   grid-cols-3">
                    <div className="col-span-2 p-10 profile-top">

                    </div>
                    <div className="bg-gray-500 text-white p-10">
                        <div className="text-3xl mt -8 font-bold">
                            Lorem ipsum dolor
                            sit amet, consectetur
                            adipiscing elit.
                        </div>
                        <div className="text-3xl mt-8">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis nunc. Donec in semper diam, varius tristique lacus. Sed viverra, metus in volutpat finibus,
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="max-w-7xl pt-40 mx-auto">
                <Card>
                    <CardBody>
                        <div className="grid lg:grid-cols-4 gap-10">
                            <div className="text-2xl col-span-2 my-auto">
                                <div className="font-bold">
                                    Lorem ipsum dolor
                                    sit amet, consectetur
                                    adipiscing elit.

                                </div>
                                <div className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis nunc. Donec in semper diam, varius tristique lacus. Sed viverra, metus in volutpat finibus,
                                </div>
                            </div>

                            <Image
                                src="imgs/gallery1.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                            <Image
                                src="imgs/gallery1.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="max-w-7xl pt-28 mx-auto">
                <Card>
                    <CardBody>
                        <div className="grid lg:grid-cols-3 gap-10">
                            <Image
                                src="imgs/gallery1.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                           <div className="text-2xl col-span-2 my-auto">
                                <div className="font-bold">
                                    Lorem ipsum dolor
                                    sit amet, consectetur
                                    adipiscing elit.

                                </div>
                                <div className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis nunc. Donec in semper diam, varius tristique lacus. Sed viverra, metus in volutpat finibus,
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="max-w-7xl pt-28 mx-auto">
                <Card>
                    <CardBody>
                        <div className="grid lg:grid-cols-4 gap-10">
                           <div className="text-2xl my-auto col-span-3">
                                <div className="font-bold">
                                    Lorem ipsum dolor
                                    sit amet, consectetur
                                    adipiscing elit.

                                </div>
                                <div className="text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non convallis nunc. Donec in semper diam, varius tristique lacus. Sed viverra, metus in volutpat finibus,
                                </div>
                            </div>
                            <Image
                                src="imgs/gallery1.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}
