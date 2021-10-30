import React from 'react'
import Carousell from '../components/carousel'

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
                
            </section>
            <section className="slide"></section>

            <section className="slide"></section>

           
        </div>
    )
}

