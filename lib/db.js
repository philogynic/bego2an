import firebase from './firebase'





const firestore = firebase.firestore()

export function createDonation(data) {
    return firestore.collection('donations').add(data)
}

