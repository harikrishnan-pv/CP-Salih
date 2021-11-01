import React from 'react'
import Carousell from '../components/carousel'
import Footer from '../components/footer'
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Paragraph from "@material-tailwind/react/Paragraph";
import Image from "@material-tailwind/react/Image";
import Button from "@material-tailwind/react/Button";


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
                    <div className="col-span-2">
                        <p className=" lg:px-20 px-10 pt-10 lg:pt-20 text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus vero quo error quidem commodi repudiandae, animi facere repellendus blanditiis distinctio explicabo nulla aperiam eius, accusamus sint quos! Ullam ipsum dignissimos consequatur iure exercitationem sunt quae enim beatae! Officiis natus facere vel laudantium commodi, perferendis, quas tenetur voluptates corporis numquam quo autem assumenda doloremque totam dicta, sapiente recusandae minima nostrum voluptatibus quisquam similique! Sint voluptates itaque ex voluptatum harum consequatur nemo veniam illo tempore aliquam aut nostrum ullam nam, maiores excepturi animi ut adipisci, aliquid repellat? Autem vel eaque molestias nostrum officiis in, illum atque natus nisi voluptates repudiandae necessitatibus?
                        </p>
                    </div>
                </div>
                
            </section>



            <section className="slide mt-20 px-4 stories">
                <div className="grid max-w-7xl pt-10 mx-auto lg:grid-cols-3 gap-6">
                    <div className="  ">
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
                    <div className="flex items-center justify-evenly">

                        <div>
                            <p className="text-7xl text-gray-600 font-bold">
                                STORIES
                            </p>
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
                        </div>
                    </div>
                    <div className="flex items-center">
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

            <section className="slide  px-28 flex justify-center  gallery">
                <div className="grid  py-10 lg:grid-cols-3 gap-6">
                    <div className="flex w-full lg:grid-cols-2 px-10 p-3 gap-6 rounded-lg shadow-2xl grid bg-gray-600 col-span-2 items-center">
                        <div className="p-10">
                            <Image
                                src="imgs/gallery1.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                        <div>
                            <Image
                                src="imgs/gallery2.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                        <div>
                            <Image
                                src="imgs/gallery3.png"
                                rounded={false}
                                raised={false}
                                alt="Image"
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <Button
                                color="blueGray"
                                buttonType="filled"
                                size="regular"
                                rounded={false}
                                block={false}
                                iconOnly={false}
                                ripple="light"
                            >
                                Button
                            </Button>
                        </div>

                    </div>



                </div>

            </section>
            <section className="slide founder">
                <div className="grid max-w-7xl mx-auto lg:grid-cols-3 h-screen flex justify-center items-center ">
                    <div>
                    </div>
                    <div className="col-span-2 ">
                        <div className=" font-bold text-center lg:text-justify text-gray-700 text-6xl lg:text-9xl">
                            FOUNDER
                        </div>
                        <p className="xl lg:mt-4 mt-10 px-10 lg:px-0 text-justify ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, facere
                            laborum! Assumenda voluptate maiores possimus consectetur a repudiandae,
                            reiciendis officia voluptatibus magni quam laboriosam culpa, placeat
                            dolor voluptas incidunt. Officia eveniet consectetur facilis deserunt
                            delectus sequi a animi explicabo blanditiis, eum dignissimos id ut
                            recusandae quod, dolorum laborum nam. Quibusdam numquam necessitatibus
                            assumenda quas. Commodi libero atque, soluta consequatur impedit earum
                            laboriosam dolorem veritatis porro sequi facilis eaque officia delenit
                            i illo vel, natus optio, pariatur minima molestiae totam adipisci!
                            Labore, omnis. At a officia soluta repellendus natus debitis
                            explicabo accusamus modi deserunt minima quisquam asperiores cum,
                            totam quibusdam temporibus rerum!
                        </p>
                    </div>
                </div>
            </section>
            <div className="footer">
            <Footer />
            </div>
        </div>
    )
}

