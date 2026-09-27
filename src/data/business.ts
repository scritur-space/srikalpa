import { BusinessInfo } from "@/types";

export const business: BusinessInfo = {
  name: "Sri Kalpa",
  tagline: "Crafted Furniture for Beautiful Spaces",
  address: {
    full:
      "No. 579, Sri Veerabadraswamy Nilaya, Ground Floor, Near Gasper School, Vinayaka Layout, Electronic City Phase 2, Bengaluru 560100",
    street: "No. 579, Sri Veerabadraswamy Nilaya, Ground Floor",
    area: "Vinayaka Layout, Near Gasper School",
    city: "Electronic City Phase 2, Bengaluru 560100",
    pincode: "560100",
  },
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91XXXXXXXXXX",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91XXXXXXXXXX",
  email: "",
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
};
