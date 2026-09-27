const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+91XXXXXXXXXX";

export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}?text=${encoded}`;
}

export function getProductEnquiryMessage(productName: string): string {
  return `Hello, I am interested in the ${productName}. I would like to know the current price and availability.`;
}

export function getGeneralEnquiryMessage(): string {
  return "Hello, I would like to enquire about Sri Kalpa's furniture collection. Please share more details.";
}
