export default function CalculateDiscountedPriceAndGST(originalPrice, discountRate, gstRate) {
    const discountAmount = originalPrice * (discountRate / 100);
    const discountedPrice = originalPrice - discountAmount;
    const gstAmount = discountedPrice * (gstRate / 100);
    
    return {
        amount:discountedPrice+gstAmount
    };
}