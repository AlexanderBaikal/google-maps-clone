import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP9DAQpH2H3aAqffJzhImNdqM0G2k0HaI",
  authDomain: "g-maps-clone.firebaseapp.com",
  projectId: "g-maps-clone",
  storageBucket: "g-maps-clone.appspot.com",
  messagingSenderId: "38255311699",
  appId: "1:38255311699:web:73821598771c934fe93fa6",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

// Create a root reference
export const storageRef = firebase.storage().ref();

export async function uploadPhotoFirebase(file, keyword = "All") {
  var fileRef;
  if (keyword === "All") {
    fileRef = storageRef.child(file.name);
  } else {
    fileRef = storageRef.child(`${keyword}/${file.name}`);
  }

  try {
    await fileRef.put(file);
    var res;
    if (keyword === "All") {
      res = await storageRef.root.listAll();
    } else {
      res = await storageRef.child(`${keyword}/uid`).listAll();
    }
    console.log("Done", res);
    return await fileRef.getDownloadURL();
  } catch (e) {
    console.error(e);
  }
}

export async function editDescription(data) {
  var { content, photos } = data;

  try {
    if (photos) {
      var promises = photos.map((file) =>
        uploadPhotoFirebase(file, content.name)
      );
      photos = await Promise.all(promises);
    }

    const ref = db.collection("descriptions").doc("test");

    await ref.set({
      ...content,
      inside: content.inside ? db.doc(`descriptions/${content.inside}`) : null,
    });

    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function createComment(data) {
  //! if doc doesn exists ? if commets doesnt exists?
  var { place, author, value, photos, text } = data;

  try {
    if (photos) {
      var promises = photos.map((file) => uploadPhotoFirebase(file, place));
      photos = await Promise.all(promises);
    }

    const ref = db.collection("comments").doc(place);
    const doc = await ref.get();
    if (!doc.exists) {
      ref.set({ comments: [] });
    }
    await ref.update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        author: {
          name: author.name,
          link: author.link || "/",
          reviewCount: author.reviewCount || 1,
        },
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        value,
        text,
        photos: photos || [],
      }),
    });

    console.log("Document successfully written!");
  } catch (e) {
    console.error("Error writing document: ", e);
  }
}

export async function getComments(document, limit = 3) {
  try {
    const doc = await db.collection("comments").doc(document).get();
    return doc.data();
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}
