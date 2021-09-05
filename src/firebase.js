import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8JYEGPWAk3URkNgJqiYYbjI-4vxxb_rg",
  authDomain: "g-maps-clone.firebaseapp.com",
  projectId: "g-maps-clone",
  storageBucket: "g-maps-clone.appspot.com",
  messagingSenderId: "38255311699",
  appId: "1:38255311699:web:73821598771c934fe93fa6"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const firestore = firebase.firestore;

// Create a root reference
export const storageRef = firebase.storage().ref();

export const auth = firebase.auth();

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

    const ref = db.collection("descriptions").doc(content.name);

    const getInBuilding = (oldValue, newValue) => {
      let result = [];
      if (oldValue) {
        for (var value of oldValue) {
          let segments = value._delegate._key.path.segments;
          let itemName = segments[segments.length - 1];
          result.push(db.doc(`descriptions/${itemName}`));
        }
      }
      result.push(db.doc(`descriptions/${newValue}`));
      return result;
    };

    const newContent = {
      ...content,
      inBuilding: getInBuilding(content.inBuilding, content.inside),
      imageUrl: content.imageUrl || photos[0] || null,
      coords: new firebase.firestore.GeoPoint(
        content.coords.latitude,
        content.coords.longitude
      ),
    };

    const { inside, ...rest } = newContent; // remove .inside

    await ref.set(rest);

    if (content.coords) {
      const ref = db.collection("places").doc(content.name);
      await ref.set({
        name: content.name,
        type: content.type,
        coords: new firebase.firestore.GeoPoint(
          content.coords.latitude,
          content.coords.longitude
        ),
      });
    }

    console.log("Document successfully updated!");
  } catch (e) {
    console.error("Error updating document: ", e);
  }
}

export async function createComment(data) {
  //! if doc doesn exists ? if commets doesnt exists?
  var { place, author, value, photos, text } = data;
  console.log(data);

  try {
    if (photos) {
      var promises = photos.map((file) => uploadPhotoFirebase(file, place));
      photos = await Promise.all(promises);
    }

    const ref = db.collection("comments").doc(Date.now().toString());

    await ref.set({
      forPlace: place,
      author: {
        name: author.name,
        photoURL: author.photoURL || "/",
        email: author.email,
        reviewCount: author.reviewCount || 1,
      },
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      value,
      text,
      photos: photos || [],
    });

    console.log("Document successfully written!");
  } catch (e) {
    console.error("Error writing document: ", e);
  }
}

export async function getComments({ data, limit }) {
  limit = limit || 3;
  try {
    const query = await db
      .collection("comments")
      .where("forPlace", "==", data)
      .orderBy("date", "desc")
      .limit(limit)
      .get();
    let result = [];
    query.forEach((doc) => result.push(doc.data()));
    return result;
  } catch (e) {
    console.error("Error getting document: ", e);
  }
}
