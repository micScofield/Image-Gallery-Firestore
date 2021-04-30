import { Fragment } from 'react'

import Title from './components/title'
import UploadForm from './components/uploadForm'
import ImageGrid from './components/image-grid'
import './App.css'

const App = () => {
    return <Fragment>
        <div className='gallery'>
            <div className='landing'>
                <div className='landingOverlay'>
                    <div className='landingInner'>
                        <Title />
                        <UploadForm />
                    </div>
                </div>
            </div>
            <div className='container'>
                <ImageGrid />
            </div>
        </div>
    </Fragment>
}

export default App