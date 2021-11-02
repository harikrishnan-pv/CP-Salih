import React, { useState } from 'react'
import marked from 'marked'
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";



export default function Post({ article }) {
    const [showModal, setShowModal] = useState(false)
    console.log(article)
    const { title, featuredImage, description, short } = article.fields
    const desc = marked(description)
    return (
        <div>
            <div>
                <Card>
                    {featuredImage && <CardImage
                        src={featuredImage.fields.file.url}
                        alt="Card Image"
                    />}

                    <CardBody>
                        <H6 color="gray">{title}</H6>
                        <p>{short}</p>

                    </CardBody>

                    <CardFooter>
                        <Button
                            color="lightBlue"
                            type="button"
                            onClick={(e) => setShowModal(true)}
                            ripple="light"
                        >
                            Show more
                        </Button>

                        <Modal size="lg" active={showModal} toggler={() => setShowModal(false)}>
                            <ModalHeader toggler={() => setShowModal(false)}>
                                {title}
                            </ModalHeader>
                            <ModalBody>
                                <p className="text-base leading-relaxed text-gray-600 font-normal">
                                    <Paragraph dangerouslySetInnerHTML={{ __html: desc }} color="gray" />
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
