const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCP9DAQpH2H3aAqffJzhImNdqM0G2k0HaI",
  authDomain: "g-maps-clone.firebaseapp.com",
  projectId: "g-maps-clone",
  storageBucket: "g-maps-clone.appspot.com",
  messagingSenderId: "38255311699",
  appId: "1:38255311699:web:73821598771c934fe93fa6",
});

var db = firebase.firestore();

{
  // Add a new document in collection "descriptions"
  // db.collection("descriptions")
  //   .doc("Yarkomoll")
  //   .set({
  //     address:
  //       "Ulitsa Verkhnyaya Naberezhnaya, 10, Irkutsk, Irkutsk Oblast, 664022",
  //     lastVisit: firebase.firestore.Timestamp.fromDate(
  //       new Date("March 3, 2021 at 12:00:00 AM UTC+8")
  //     ),
  //     website: "яркомолл-ирк.рф",
  //     name: "Yarkomoll",
  //     phoneNumber: "+73952487744",
  //     ratingCount: "9443",
  //     ratingValue: "4.456",
  //     schedule: {
  //       monday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //       tuesday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //       wednesday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //       thursday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //       friday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //       saturday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //       sunday: {
  //         open: "10:00",
  //         close: "23:00",
  //       },
  //     },
  //   })
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   });
}

{
  // db.collection("descriptions")
  //   .doc("Trendy Quarter")
  //   .set({
  //     address:
  //       "Ulitsa 3 Iyulya, 25, г.Иркутск, Irkutsk Oblast, 664022",
  //     lastVisit: firebase.firestore.Timestamp.fromDate(
  //       new Date("August 1, 2021")
  //     ),
  //     website: "модныйквартал.рф",
  //     name: "Trendy Quarter",
  //     phoneNumber: "+73952485325",
  //     ratingCount: "10667",
  //     ratingValue: "4.756",
  //     schedule: {
  //       monday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //       tuesday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //       wednesday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //       thursday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //       friday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //       saturday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //       sunday: {
  //         open: "10:00",
  //         close: "20:00",
  //       },
  //     },
  //   })
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   });
}

{
  //     db.collection("places")
  //   .doc("Yarkomoll")
  //   .set({
  //     coords: new firebase.firestore.GeoPoint(52.26842861026239, 104.28955947374631),
  //     name: "Yarkomoll",
  //     type: "Shopping mall",
  //   })
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   });
  //   db.collection("places")
  //   .doc("Trendy Quarter")
  //   .set({
  //     coords: new firebase.firestore.GeoPoint(52.27294529674519, 104.29188420752436),
  //     name: "Trendy Quarter",
  //     type: "Shopping mall",
  //   })
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   });
}

// var docRef = db.collection("descriptions").doc("Yarkomoll");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });

// db.collection("descriptions")
// .doc("O'key")
// .set({
//   address:
//     "Trts Komsomoll, Ulitsa Verkhnyaya Naberezhnaya, 10, Irkutsk, Irkutsk Oblast, 664022",
//   lastVisit: firebase.firestore.Timestamp.fromDate(
//     new Date("March 1, 2021 at 13:00:00 AM UTC+8")
//   ),
//   website: "okmarket.ru",
//   name: "O'key",
//   phoneNumber: "+73952784400",
//   ratingCount: "3343",
//   ratingValue: "4.42",
//   inside: db.doc('places/Yarkomoll'),
//   schedule: {
//     monday: {
//       open: "8:00",
//       close: "23:00",
//     },
//     tuesday: {
//       open: "8:00",
//       close: "23:00",
//     },
//     wednesday: {
//       open: "8:00",
//       close: "23:00",
//     },
//     thursday: {
//       open: "8:00",
//       close: "23:00",
//     },
//     friday: {
//       open: "8:00",
//       close: "23:00",
//     },
//     saturday: {
//       open: "8:00",
//       close: "23:00",
//     },
//     sunday: {
//       open: "8:00",
//       close: "23:00",
//     },
//   },
// })
// .then(() => {
//   console.log("Document successfully written!");
// })
// .catch((error) => {
//   console.error("Error writing document: ", error);
// });

// db.collection("comments")
//   .doc("Yarkomoll")
//   .set({
//     comments: [
//       {
//         author: { name: "Alex White", link: "/", reviewCount: 23 },
//         date: firebase.firestore.Timestamp.fromDate(
//           new Date("March 1, 2021 at 13:00:00 AM UTC+8")
//         ),
//         value: 4,
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat porro doloremque facilis ex officiis aperiam maiores. Enim neque a similique explicabo voluptates accusamus temporibus tempora nulla autem. Modi quae voluptates commodi! Recusandae veniam obcaecati quos qui veritatis a natus minus.",
//       },
//       {
//         author: { name: "John Jones", link: "/", reviewCount: 13 },
//         date: firebase.firestore.Timestamp.fromDate(
//           new Date("April 5, 2021 at 13:00:00 AM UTC+8")
//         ),
//         value: 5,
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat porro doloremque facilis ex officiis aperiam maiores. Enim neque a similique explicabo voluptates accusamus temporibus tempora nulla autem. Modi quae voluptates commodi! Recusandae veniam obcaecati quos qui veritatis a natus minus.",
//       },
//       {
//         author: { name: "Bad bad", link: "/", reviewCount: 23 },
//         date: firebase.firestore.Timestamp.fromDate(
//           new Date("August 1, 2021 at 22:00:00 AM UTC+8")
//         ),
//         value: 2,
//         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat porro doloremque facilis ex officiis aperiam maiores. Enim neque a similique explicabo voluptates accusamus temporibus tempora nulla autem. Modi quae voluptates commodi! Recusandae veniam obcaecati quos qui veritatis a natus minus.",
//       },
//     ],
//   })
//   .then(() => {
//     console.log("Document successfully written!");
//   })
//   .catch((error) => {
//     console.error("Error writing document: ", error);
//   });

// var child = storageRef.child('Yarkomoll/2334e4edcc2678a8c413231e1cc68740.jpg')

var ref = db.collection("descriptions").doc("O'key");
return ref
  .update({
    schedule: {
      monday: { open: "10:00", close: "20:00", allDay: false, closed: false },
      tuesday: { open: "10:00", close: "20:00", allDay: false, closed: false },
      wednesday: { open: "10:00", close: "20:00", allDay: false, closed: false },
      thursday: { open: "10:00", close: "20:00", allDay: false, closed: false },
      friday: { open: "10:00", close: "20:00", allDay: false, closed: false },
      saturday: { open: "10:00", close: "20:00", allDay: false, closed: false },
      sunday: { open: "10:00", close: "20:00", allDay: false, closed: false },
    },
  })
  .then(() => {
    console.log("Document successfully updated!");
  })
  .catch((error) => {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });
