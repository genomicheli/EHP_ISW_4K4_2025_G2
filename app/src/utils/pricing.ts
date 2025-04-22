const REGULAR_PRICE = 6000;
const VIP_PRICE = 10000;

export const calculateTicketPrice = (ticket: {
  age: number | string;  // Acepta tanto number como string
  passType: string;
  isRetired: boolean;
}) => {
  const basePrice = ticket.passType === 'VIP' ? VIP_PRICE : REGULAR_PRICE;
  const age = typeof ticket.age === 'string' ? parseInt(ticket.age) : ticket.age;
  
  if (ticket.isRetired || (age <= 12 && !isNaN(age))) {
    return basePrice / 2;
  }
  
  return basePrice;
};