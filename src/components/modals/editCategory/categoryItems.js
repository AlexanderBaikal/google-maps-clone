import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import WeekendOutlinedIcon from "@material-ui/icons/WeekendOutlined";
import HotelIcon from "@material-ui/icons/Hotel";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import DomainIcon from "@material-ui/icons/Domain";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";

export const categoryItems = [
  {
    key: "Food & drink",
    value: {
      IconComponent: RestaurantIcon,
      nested: [
        "Bakery",
        "Bar",
        "Butchers",
        "Coffee shop",
        "Farm",
        "Ice cream shop",
        "Nightclub",
        "Soup kitchen",
        "Supermarket",
      ],
    },
  },
  {
    key: "Shopping",
    value: {
      IconComponent: ShoppingCartOutlinedIcon,
      nested: [
        "Auto parts store",
        "Book Shop",
        "Building material supplier",
        "Car dealer",
        "Clothing shop",
        "Convenience store",
        "Cosmetics shop",
        "Electronics Retail and Repair Shop",
        "Florist",
        "General Store",
        "Gift Shop",
        "Hardware Shop",
        "Home Furniture Shop",
        "Jewellery Store",
        "Ladies' Clothes Shop",
        "Market",
        "Mobile Phone Shop",
        "Pharmacy",
        "Shoe Shop",
        "Shopping Centre",
        "Supermarket",
        "Tobacco shop",
        "Tyre Shop",
      ],
    },
  },
  {
    key: "Services",
    value: {
      IconComponent: WeekendOutlinedIcon,
      nested: [
        "Medical/Health services",
        "Bank",
        "Barber shop",
        "Beauty Salon",
        "Car Park",
        "Car rental company",
        "Car wash",
        "Cashpoint",
        "Electric vehicle charging station",
        "Other service",
      ],
    },
  },
  {
    key: "Hotels & lodging",
    byCategory: "Hotel",
    value: {
      IconComponent: HotelIcon,
      nested: [
        "Hotel",
        "Bed & breakfast",
        "Camping cabin",
        "Campsite",
        "Holiday apartmant rental",
        "Home Stay",
        "Hostel",
        "Motel",
        "Villa",
      ],
    },
  },
  {
    key: "Outdoors & recreation",
    value: {
      IconComponent: LocalFloristIcon,
      nested: [
        "Garden",
        "Gym",
        "Hiking area",
        "Historical landmark",
        "Museum",
        "Park and Garden",
        "Playground",
        "Sports club",
        "Tourist attraction",
      ],
    },
  },
  {
    key: "Religion",
    value: {
      IconComponent: AccessibilityIcon,
      nested: [
        "Place of worship",
        "Buddhist temple",
        "Church",
        "Gurdwara",
        "Hindi temple",
        "Mosque",
        "Pagoda",
        "Parsi tempel",
        "Other religious place",
      ],
    },
  },
  {
    key: "Office & industrial",
    value: {
      IconComponent: DomainIcon,
      nested: [
        "Association or organisation",
        "Community centre",
        "Construction Company",
        "Corporate office",
        "Government office",
        "Manufacturer",
        "Non-profit organisation",
        "Warehouse",
        "Wholesaler",
      ],
    },
  },
  {
    key: "Residential",
    value: {
      IconComponent: HomeIcon,
      nested: [
        "Apartment building",
        "Apartment complex",
        "Flat complex",
        "Housing Development",
        "Housing complex",
        "Housing society",
      ],
    },
  },
  {
    key: "Education",
    value: {
      IconComponent: SchoolIcon,
      nested: [
        "College",
        "Driving school",
        "Education Centre",
        "Pre-school",
        "Primary school",
        "School",
        "Secondary School",
        "University",
      ],
    },
  },
];

export const byCategory = (category) => {
  switch (category) {
    case "Grocery stores":
      return [
        "Convenience store",
        "Market",
        "Shopping Centre",
        "Supermarket",
        "Tobacco shop",
      ];
    case "Restaurants":
      return [
        "Bakery",
        "Bar",
        "Butchers",
        "Coffee shop",
        "Farm",
        "Ice cream shop",
        "Soup kitchen",
        "Restaurant",
        "Cafe",
      ];
    case "Takeaway food":
      return [
        "Fast food",
        "Bar",
        "Ice cream shop",
        "Cafe",
        "Supermarket",
        "Grocery store",
      ];
    case "Hostels":
      return [
        "Hotel",
        "Bed & breakfast",
        "Camping cabin",
        "Campsite",
        "Holiday apartmant rental",
        "Home Stay",
        "Hostel",
        "Motel",
        "Villa",
      ];
    case "Banks":
      return ["Bank", "ATM", "Cashpoint"];
    case "Gas stations":
      return ["Gas station", "Electric vehicle charging station"];
    case "Car parks":
      return ["Car Park", "Car rental company", "Car wash"];
    case "Pharamacies":
      return ["Pharmacy", "Medical/Health services", "Hospital"];
    case "Post stations":
      return ["Post office", "Post station"];
    case "Hospitals":
      return ["Pharmacy", "Medical/Health services", "Hospital"];
  }
};

export const findCategories = (substring) => {
  var result = [];
  for (var item of categoryItems) {
    for (var category of item.value.nested) {
      if (
        category.toLowerCase().startsWith(substring.toLowerCase()) &&
        !result.includes(category)
      ) {
        result.push(category);
      }
    }
  }
  return result;
};
