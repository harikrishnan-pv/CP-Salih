import React from 'react'
import Carousell from '../components/carousel'
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Paragraph from "@material-tailwind/react/Paragraph";
import Image from "@material-tailwind/react/Image";
import Button from "@material-tailwind/react/Button";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';

export default function Home() {


    return (
        <div className="slider lg:container-2xl  ">

            <section className="slide">
                <Carousell />
            </section>
            <section className="vision slide">
                <div className="grid min-h-screen max-w-7xl mx-auto flex items-center content-center  lg:grid-cols-3 ">
                    <div className="col-span-2">
                        <p className="text-center font-display   text-9xl">
                            Our Vision
                        </p>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div className="col-span-2 ">
                        <div className="App px-6 text-justify text-2xl">
                            <Typewriter

                                onInit={(typewriter) => {

                                    typewriter
                                        .changeDelay(70)
                                        .typeString("<br/>")
                                        .typeString("A little help with a little smile gives meaning to human life.")
                                        .pauseFor(500)
                                        .typeString("<br/>")
                                        .typeString("We make a living by what we get, <br/> but we live a life by what we give")
                                        .pauseFor(500)
                                        .typeString("<br/>")
                                        .typeString("Join us and see the need, not the cause")

                                        .start();
                                }}
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section className="slide mt-20 px-4 stories">
                <div className="grid max-w-7xl pt-10 mx-auto lg:grid-cols-3 gap-6">
                    <div className=" lg:hover:scale-110 z-50 transition transform ">
                        <Card className="bg-gray-400">
                            <CardImage
                                src="imgs/stories1.png"
                                alt="Card Image"
                            />
                            <CardBody>
                                <p className="text-center pb-2 text-2xl">
                                    Card title
                                </p>
                                <Paragraph color="gray">
                                    Don't be scared of the truth because we need to restart the human
                                    foundation in truth And I love you like Kanye loves Kanye I love
                                    Rick Owens’ bed design but the back is...
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="flex items-center  justify-evenly">

                        <div>
                            <p className="text-7xl text-gray-600 font-bold">
                                STORIES
                            </p>
                            <Link to="/activities">
                                <Button
                                    className="mx-auto mt-10"
                                    color="blueGray"
                                    buttonType="filled"
                                    size="lg"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                >
                                    Show more
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex lg:hover:scale-110 z-50 transition transform items-center">
                        <Card className="bg-gray-500" >
                            <CardImage
                                src="imgs/stories2.png"
                                alt="Card Image"
                            />
                            <CardBody>
                                <p className="text-center pb-2 text-2xl">
                                    Card title
                                </p>
                                <Paragraph color="">
                                    Don't be scared of the truth because we need to restart the human
                                    foundation in truth And I love you like Kanye loves Kanye I love
                                    Rick Owens’ bed design but the back is...
                                </Paragraph>
                            </CardBody>
                        </Card>
                    </div>


                </div>
            </section>

            <div className=" pt-16 slide lg:hidden px-4 flex justify-center">
                <Card className="bg-gray-500">
                    <CardImage
                        src='imgs/gallery1.png'
                        alt="Card Image"
                    />
                    <CardBody>
                        <p className="text-center text-white font-bold text-3xl">
                            Gallery
                        </p>
                        <p></p>

                    </CardBody>
                    <Link to="/gallery">
                        <Button
                            color="blueGray"
                            type="button"
                            ripple="light"
                        >
                            Show more
                        </Button>
                    </Link>


                </Card>
            </div>

            <section className="slide hidden lg:flex px-28 flex justify-center  gallery">
                <div className="grid  py-10 lg:grid-cols-3 gap-6">
                    <div className="flex w-full lg:grid-cols-2 px-10 p-3 gap-6 rounded-lg shadow-2xl grid bg-gray-600 col-span-2 items-center">
                        <div  className="p-10 lg:hover:scale-110 z-50 transition transform" >
                            <Image
                                src="imgs/b4.jpeg"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                        <div className="lg:hover:scale-110 z-50 transition transform" >
                            <Image
                                src="imgs/a2.jpeg"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                        <div className="lg:hover:scale-110 z-50 pb-2 transition transform" >
                            <Image
                                src="imgs/a1.jpeg"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Link to="/gallery">
                                <Button
                                    color="blueGray"
                                    buttonType="filled"
                                    size="regular"
                                    rounded={false}
                                    block={false}
                                    iconOnly={false}
                                    ripple="light"
                                >
                                    Show more
                                </Button>
                            </Link>
                        </div>

                    </div>



                </div>

            </section>
            <div className="py-16 slide lg:hidden px-4">
                <Card className="bg-gray-600">
                    <CardBody>
                        <div className="grid text-white grid-cols-2">
                            <div className="text-4xl font-bold text-center">
                                FOUNDER
                                <Image
                                    src="imgs/foundermb.png"
                                    rounded={false}
                                    raised={true}
                                    alt="Raised Image"
                                    className="pt-5"
                                />
                            </div>
                            <div className="px-1 pt-14 text-justify">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nulla non convallis nunc. Donec in semper diam, varius
                            </div>

                        </div>
                    </CardBody>
                </Card>
            </div>
            <section className="slide hidden mb-10 lg:flex founder">
                <div className="grid max-w-7xl mx-auto pt-10 lg:grid-cols-5 h-screen flex justify-center items-center ">
                    <div className="col-span-2">
                    </div>
                    <div className="col-span-3 items-center flex">
                        <div>
                        <div className=" font-bold text-center lg:text-justify text-gray-700 text-6xl lg:text-9xl">
                            FOUNDER
                        </div>
                        <p className="xl lg:mt-4 mt-10 px-10 lg:px-0 text-justify ">
                            Mohamed Salih C.P, our chairman, is a pioneer extraordinaire, altruist with the mind of a futurist.

                            He is the Chairman and Managing Director of AASA group of companies and the chairman of CP Mohamed Memorial Charitable Trust, which was founded purely for his charitable activities funded by his personal income from his overseas business
                        </p>
                        <Link className="p-5" to="/profile">
                            <Button
                                color="blueGray"
                                type="button"
                                ripple="light"
                            >
                                Read More
                            </Button>
                        </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

