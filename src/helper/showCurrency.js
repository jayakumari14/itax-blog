export default function showCurrency(number, locale = "en-IN") {
    if (typeof number) {
        return new Intl.NumberFormat(locale).format(number);
    }
    return number;
}
