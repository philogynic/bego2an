import { delBasePath } from 'next/dist/next-server/lib/router/router'
import firebase from './firebase'





const firestore = firebase.firestore()

export function createDonation(data) {
    return firestore.collection('donations').add(data)
}

export async function getAllDonations() {
    const snapshot = await firestore.collection('donations').get()

    const donations = []

    snapshot.forEach((doc) => {
        donations.push({id: doc.id, ...doc.data()})
    })

    return {donations}
}