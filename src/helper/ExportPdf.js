import { jsPDF } from 'jspdf';

export const exportPDF = (htmlContent, fileName) => {
  const pdf = new jsPDF();
  const options = {
    pagesplit: true,
    background: true,
  };
  pdf.html(htmlContent, options);
  pdf.save(fileName + '.pdf');
};
