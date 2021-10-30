import React from 'react'
import Carousell from '../components/carousel'
import Footer from '../components/footer'

export default function Home() {

    return (
        <div className="slider">

            <section className="slide">
                <Carousell />
            </section>
            <section className="vision slide">
                <div class="grid h-screen  grid-cols-2 gap-4">
                    <div className="w-full mx-20 pr-40">
                        <p className="text-center font-display mt-40 mb-5 text-8xl">
                            Our Vision
                        </p>
                        <p className="text-xl text-justify">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus vero quo error quidem commodi repudiandae, animi facere repellendus blanditiis distinctio explicabo nulla aperiam eius, accusamus sint quos! Ullam ipsum dignissimos consequatur iure exercitationem sunt quae enim beatae! Officiis natus facere vel laudantium commodi, perferendis, quas tenetur voluptates corporis numquam quo autem assumenda doloremque totam dicta, sapiente recusandae minima nostrum voluptatibus quisquam similique! Sint voluptates itaque ex voluptatum harum consequatur nemo veniam illo tempore aliquam aut nostrum ullam nam, maiores excepturi animi ut adipisci, aliquid repellat? Autem vel eaque molestias nostrum officiis in, illum atque natus nisi voluptates repudiandae necessitatibus?
                        </p>
                    </div>
                </div>
            </section>
            <section className="slide stories">
                <div class="grid h-screen grid-cols-1  grid-cols-2 gap-4">
                    <div className="w-full mx-40 pr-20">
                        <div className=" mt-5  p-10 bg-green-200">
                            <img className="mx-auto w-full" src="imgs/stories1.png" alt="" />
                            <p className=" text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque error vero labore iste iusto asperiores,
                                nostrum culpa vel et repellendus possimus voluptates in unde fugit quibusdam voluptatem
                            </p>
                        </div>
                        <p className="font-bold text-center mt-8 text-9xl">
                            STORIES
                        </p>
                    </div>
                    <div className="px-40 ">
                        <div className=" mt-16  p-5 bg-green-300">
                            <img className="mx-auto w-full" src="imgs/stories2.png" alt="" />
                            <p className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque error vero labore iste iusto asperiores,
                                nostrum culpa vel et repellendus possimus voluptates in unde fugit quibusdam voluptatem
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="slide gallery">
                <div class="grid px-36   h-screen grid-cols-3 flex flex-wrap content-center grid-cols-2 ">
                    <div className="col-span-2  ">
                        <div className="  bg-green-300 p-10 pb-16  z-10 ">
                            <div className="grid grid-cols-2">
                                <div>
                                    <div className="p-10 mb-20">
                                        <img src="imgs/gallery1.png" alt="" />
                                    </div>
                                    <div className="p-2">
                                        <img src="imgs/gallery3.png" alt="" />
                                    </div>
                                </div>
                                <div className="p-3">
                                    <img src="imgs/gallery2.png" alt="" />
                                    <div className="mt-40 ml-60 ">
                                        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold px-5 py-3 text-xl rounded">
                                            View All
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="slide founder">
                <div class="grid grid-cols-2 flex flex-wrap content-center grid-cols-2 ">
                    <div>

                    </div>
                    <div className="  ">
                        <div className="mt-44 font-bold text-9xl">
                            FOUNDER
                        </div>
                        <p className="xl mt-4 text-justify mr-16">
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
           <Footer/>

           

        </div>
    )
}

