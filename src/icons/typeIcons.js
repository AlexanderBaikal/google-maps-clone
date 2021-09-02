import L from "leaflet";
import shopIcon from "../icons/gshop.png";
import anyIcon from "../icons/any.png";
import studyIcon from "../icons/study.png";
import hotelIcon from "../icons/hotel.png";
import takeoutIcon from "../icons/takeout.png";
import foodIcon from "../icons/food.png";
import gasIcon from "../icons/gas.png";

export const getIcon = (name) => {
  let value;
  switch (name.toLowerCase()) {
    case "shopping mall":
    case "shopping supermarket":
      value = shopIcon;
      break;
    case "gas station":
      value = gasIcon;
      break;
    case "university":
    case "school":
      value = studyIcon;
      break;
    case "hotel" || "hostel":
      value = hotelIcon;
      break;
    case "restaurant":
    case "cafe":
      value = foodIcon;
      break;
    case "bar":
      value = takeoutIcon;
      break;
    default:
      value = anyIcon;
  }
  let resultIcon = L.Icon.extend({
    options: {
      iconUrl: value,
      iconSize: new L.Point(35, 35),
    },
  });
  return new resultIcon();
};
