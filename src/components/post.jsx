import React from 'react'
import marked from 'marked'

const Post = ({article}) => {
    console.log(article)
    const {title, featuredImage, description}= article.fields 
    const desc=marked(description)
    return (
        <div>
<<<<<<< HEAD
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
                                    <Paragraph dangerouslySetInnerHTML={{ __html: desc }} color="gray" />
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
=======
            <h2>{title}</h2>
            {featuredImage && <img src={featuredImage.fields.file.url} alt="dfkjhglk"/>}
            <p dangerouslySetInnerHTML={{ __html: desc }} />
>>>>>>> parent of 46871b7 (Services)
        </div>
    )
}

export default Post
