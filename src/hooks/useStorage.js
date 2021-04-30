import { useState, useEffect } from 'react'

import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const UseStorage = file => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        //create a reference to the file in the storage bucket
        const storageRef = projectStorage.ref(file.name)

        //Put the file in the location/reference
        storageRef.put(file).on('state_changed', snap => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage)
        }, err => {
            console.log(err)
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            //Add a new document in the images collection in firestore so that we can fetch images from there
            // collectionRef.add({ url, createdAt: timestamp() })
            const obj = {
                url,
                createdAt: timestamp()
            }
            projectFirestore.collection('images').doc().set(obj)
            setUrl(url)
        })
    }, [file])

    return { progress, url, error }
}

export default UseStorage