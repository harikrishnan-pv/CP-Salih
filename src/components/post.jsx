import React, { useState } from 'react'
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";



export default function Post({ article }) {
    const [showModal, setShowModal] = useState(false)
    console.log(article)
    const { title, featuredImage, description, short } = article.fields
    return (
        <div>
            <div >
                <Card>
                    {featuredImage && <CardImage
                        src={featuredImage.fields.file.url}
                        alt="Card Image"
                    />}

                    <CardBody>
                        <p className="text-xl font-bold">{title}</p>
                        <p>{short}</p>

                    </CardBody>

                    <CardFooter>
                        <Button
                            color="blueGray"
                            type="button"
                            onClick={(e) => setShowModal(true)}
                            ripple="light"
                        >
                            Show more
                        </Button>

                        <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>

                            <ModalHeader className="text-center" toggler={() => setShowModal(false)}>
                                {title}
                            </ModalHeader>
                            <br />
                            <br />
                            <ModalBody>
                                {featuredImage && <CardImage className="max-w-lg mx-auto"
                                    src={featuredImage.fields.file.url}
                                    alt="Card Image"
                                />}
                                <br />
                                <br />
                                <p className="max-w-2xl text-justify px-5">
                                    {description}
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="red"
                                    buttonType="link"
                                    onClick={(e) => setShowModal(false)}
                                    ripple="dark"
                                >
                                    Close
                                </Button>


                            </ModalFooter>
                        </Modal>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
