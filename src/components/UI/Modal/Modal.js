import { motion } from 'framer-motion'
import './Modal.css';

const modal = ({ show, img }) => {

    const cssClasses = ['Modal', show === 'entering' ? 'ModalOpen'
        : show === 'exiting' ? 'ModalClosed' : null]

    return (
        <div className={cssClasses.join(' ')}>
            <img src={img} alt='Please check your internet connection !' />
        </div>
    )
};

export default modal;