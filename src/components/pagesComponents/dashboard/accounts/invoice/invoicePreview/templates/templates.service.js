import { formatINRCurrency } from '@/utils/utilityFunctions';
import { TAX_TYPES_BY_STATES } from '../../invoice/staticData';

const getAllowedTaxes = {
  [TAX_TYPES_BY_STATES.intra]: ['cgst', 'sgst'],
  [TAX_TYPES_BY_STATES.inter]: ['igst'],
  [TAX_TYPES_BY_STATES.ut]: ['utgst'],
};

const getTaxableValue = (amount, discount) => {
  return amount + (amount / 100) * discount;
};

export const getValue = (type, item, taxType, invoice = {}) => {
  const taxes = {
    cgst: 0,
    sgst: 0,
    igst: 0,
    utgst: 0,
    cess: 0,
  };
  const allowedTaxes = getAllowedTaxes[taxType] || [];
  const newItems = invoice.invoiceItems || [];

  const newAmounts = newItems.map((itemObj) => {
    const { quantity, discount, taxPercent, item, id } = itemObj;
    const { price } = item;

    const grossPrice = price * quantity;
    const discountedPrice = grossPrice - (grossPrice * discount) / 100;
    const taxAmount = (discountedPrice * taxPercent) / 100;
    return { itemId: id, taxAmount, discountedPrice };
  });

  const requestedRowTax = newAmounts.find(
    (k) => k?.itemId === item?.id,
  )?.taxAmount;

  const numberOfTaxes = allowedTaxes.length;
  const singleTaxValue = requestedRowTax / numberOfTaxes;

  allowedTaxes.forEach((key) => {
    taxes[key] = singleTaxValue.toFixed(2).toString();
  });

  const taxableValue = getTaxableValue(
    item?.item?.price * item?.quantity,
    item?.discount,
  );

  const values = {
    totalInvoiceValue: invoice.totalAmount,
    totalGst: invoice.totalGst,

    taxableValue,
    cgst: taxes.cgst,
    sgst: taxes.sgst,
    igst: taxes.igst,
    utgst: taxes.utgst,
    cess: taxes.cess,
    total: formatINRCurrency(
      Object.values(taxes).reduce((acc, tax) => +tax + acc, 0) + taxableValue,
    ),
  };

  return values[type] || 0;
};
