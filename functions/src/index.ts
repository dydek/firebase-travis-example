import * as admin from 'firebase-admin';
import { https, HttpsFunction } from 'firebase-functions';

admin.initializeApp();

export const helloWorld = https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


export const addMessage: HttpsFunction = https.onRequest((req, resp) => {
    const original = req.query.text;
    return admin.firestore()
        .collection('/messages')
        .doc()
        .set({original})
        .then(() => {
            resp.send('added....');
        })
});
