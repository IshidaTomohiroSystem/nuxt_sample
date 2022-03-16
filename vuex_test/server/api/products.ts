import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"

const apps = getApps()

if(!apps.length){
    initializeApp({
        credential: cert('./myapp-5fb21-firebase-adminsdk-vsteu-714befc174.json')
    })
}

export default async (req, res) => {
    const db = getFirestore()
    const productsSnap = await db.collection('todos-item').get()
    const productsData = productsSnap.docs.map(doc => {
        return {
            uuid: doc.id,
            ...doc.data()
        }
    })
    return productsData
}