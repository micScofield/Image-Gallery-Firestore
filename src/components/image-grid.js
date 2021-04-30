import { Fragment, useState } from 'react'
import Transition from 'react-transition-group/Transition'

import UseFirestore from '../hooks/useFirestore'
import Spinner from './UI/spinner/spinner'
import Modal from './UI/Modal/Modal'
import Backdrop from './UI/Backdrop/Backdrop'
import { motion } from 'framer-motion'

const ImageGrid = () => {

    const { docs } = UseFirestore('images')

    const [showModal, setShowModal] = useState(false)
    const [img, setImg] = useState(null)

    if (docs.length === 0) {
        return <Spinner />
    }

    console.log(docs)

    const openImageHandler = url => {
        setShowModal(true)
        setImg(url)
    }

    const hideModalHandler = () => {
        setShowModal(false)
        setImg(null)
    }

    let content
    content = (
        <Fragment>
            {docs.length !== 0 && docs.map(doc => {
                return (
                    <motion.div key={doc.id} className='image-wrap' whileHover={{ opacity: 0.8 }} layout>
                        <motion.img src={doc.url} alt='Cant fetch' onClick={() => openImageHandler(doc.url)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                        />
                    </motion.div>
                )
            })}

            <Transition
                mountOnEnter
                unmountOnExit
                in={showModal}
                timeout={700}>

                {showModal => <Modal show={showModal} img={img} />}

            </Transition>

            <div>
                <Backdrop show={showModal} clicked={hideModalHandler} />
            </div>
        </Fragment>
    )

    return <div className='image-grid my-2'>{content}</div>
}

export default ImageGrid

