export default function generateFY(baseYear) {
    const currentYear = new Date().getFullYear();
    let optionsHTML = [];

    for (let i = baseYear; i < currentYear; i++) {
        const startYear = i + 1;
        const endYear = i + 2;
        const shortEndYear = parseInt(endYear.toString().substring(2));
        optionsHTML.unshift({ startYear: startYear, endYear: shortEndYear });
    }

    return optionsHTML;
}
