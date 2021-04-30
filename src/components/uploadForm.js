import { Fragment, useState } from 'react'

import ProgressBar from './progressBar'

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    let VALID_IMAGE_TYPES = ['image/png', 'image/jpeg']

    const fileSelectHandler = e => {
        let file = e.target.files[0]
        if (file && VALID_IMAGE_TYPES.includes(file.type)) {
            setError(null)
            setFile(e.target.files[0])
        } else {
            setFile(null)
            setError('Please choose an image !')
        }
    }

    return <div className='uploadForm'>
        <form className='center'>
            <div className='mt-2'>
                <label>
                    <input type="file" className='hide-el' onChange={fileSelectHandler} />
                    <i className='fas fa-plus'></i>
                </label>
                <div className='output-file mt'>
                    {error && <div className='error'>{error}</div>}
                    {file && <div className='file'>{file.name}</div>}
                </div>
            </div>
        </form>
        {file && <ProgressBar file={file} setFile={setFile} />}
    </div>
}

export default UploadForm