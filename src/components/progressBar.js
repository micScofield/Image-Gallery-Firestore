import { Fragment, useEffect } from 'react'
import { motion } from 'framer-motion'

import UseStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {

    const { url, progress } = UseStorage(file)

    useEffect(() => {
        if(url) setFile(null)
    }, [url, setFile])

    return <Fragment>
        {/* <div className='progress-bar' style={{width: progress+'%'}}></div> */}

        {/* For smoother progress display */}
        <motion.div className='progress-bar'
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        ></motion.div>
    </Fragment>
}

export default ProgressBar