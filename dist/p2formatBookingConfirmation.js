"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// "Aisha's table for 4 guests is confirmed at 7:00 PM."
const formatBookingConfirmation = (booking) => {
    return `${booking.name}'s table for ${booking.guests} guests is confirmed at ${booking.time}.`;
};
// TEST CASE
const customer1 = {
    name: "Aisha",
    guests: 4,
    time: "7:00 PM"
};
const customer2 = {
    name: "Rahim",
    guests: 2,
    time: "8:30 PM"
};
console.log(formatBookingConfirmation(customer1));
console.log(formatBookingConfirmation(customer2));
//# sourceMappingURL=p2formatBookingConfirmation.js.map