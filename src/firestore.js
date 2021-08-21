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

db.collection("descriptions")
  .doc("Sportmaster")
  .set({
    address:
      "Ulitsa Verkhnyaya Naberezhnaya, 10, Irkutsk, Irkutsk Oblast, 664022",
    lastVisit: firebase.firestore.Timestamp.fromDate(
      new Date("February 10, 2021 at 16:00:00 AM UTC+8")
    ),
    type: "Sporting goods store",
    website: "www.sportmaster.ru",
    name: "Sportmaster",
    about: {
      pros: ["In-store shopping", "Delivery", "In-store pick-up"],
    },
    phoneNumber: "+78007777771",
    ratingCount: 1902,
    ratingValue: 4.44,
    inside: db.doc("places/Yarkomoll"),
    schedule: {
      monday: {
        open: "10:00",
        close: "22:00",
      },
      tuesday: {
        open: "10:00",
        close: "22:00",
      },
      wednesday: {
        open: "10:00",
        close: "22:00",
      },
      thursday: {
        open: "10:00",
        close: "22:00",
      },
      friday: {
        open: "10:00",
        close: "22:00",
      },
      saturday: {
        open: "10:00",
        close: "22:00",
      },
      sunday: {
        open: "10:00",
        close: "22:00",
      },
    },
  })
  .then(() => {
    console.log("Document successfully written!");
  })
  .catch((error) => {
    console.error("Error writing document: ", error);
  });
