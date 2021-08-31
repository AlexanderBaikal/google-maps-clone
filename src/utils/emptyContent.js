import { firestore } from "../firebase";

export const emptyContent = {
  address: "Add address",
  lastVisit: firestore.Timestamp.fromDate(
    new Date("March 1, 2021 at 12:00:00 AM UTC+8")
  ),
  website: "Add website",
  name: "Add name",
  phoneNumber: "Add phone number",
  ratingCount: 0,
  ratingValue: 5,
  inside: null,
  schedule: {
    monday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
    tuesday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
    wednesday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
    thursday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
    friday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
    saturday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
    sunday: {
      open: "8:00",
      close: "23:00",
      allDay: false,
      closed: false
    },
  },
};
