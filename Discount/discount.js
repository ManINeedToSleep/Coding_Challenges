const originalPrice = 100;
console.log("Your Original Price Is: " + originalPrice)

function applyDiscount(price, discountCallback) {
    return discountCallback(price);
}

function regularCustomerDiscount(price) {
    return price * 0.95; // 5% discount
}

function premiumCustomerDiscount(price) {
    return price * 0.90; // 10% discount
}

function vipCustomerDiscount(price) {
    return price * 0.80; // 20% discount
}

function seasionalDiscount(price) {
    return price * 0.85; // 15% discount
}

const regcus = applyDiscount(originalPrice, regularCustomerDiscount)
const vipcus = applyDiscount(originalPrice, vipCustomerDiscount)
const premcus = applyDiscount(originalPrice, premiumCustomerDiscount)
const seasoncus = applyDiscount(originalPrice, seasionalDiscount)

console.log("Your VIP cost is: " + vipcus)
console.log("Your Premium cost is: " + premcus)
console.log("Your Seasonal cost is: " + seasoncus)
console.log("Your Regular cost is: " + regcus)