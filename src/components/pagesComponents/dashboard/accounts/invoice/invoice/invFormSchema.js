import regex from '@/utils/regex';
import { z } from 'zod';

export const createInvSchema = z.object({
  gstNumber: z
    .string()
    .min(1, 'This is required*')
    .regex(regex.GSTIN, 'This is not valid*'),
  partyId: z.string().min(1, 'This is required*'),
  invoiceNumber: z.string().min(1, 'This is required*'),
  type: z.string().min(1, 'This is required*'),
  stateOfSupply: z.string().min(1, 'This is required*'),
  credit: z.boolean(),
  cgst: z.string().min(1, 'This is required*'),
  sgst: z.string().min(1, 'This is required*'),
  igst: z.string().min(1, 'This is required*'),
  utgst: z.string().min(1, 'This is required*'),
  invoiceDate: z.string().min(1, 'This is required*'),
  dueDate: z.string().min(1, 'This is required*'),
  isInventory: z.string().min(1, 'This is required*'),
  totalAmount: z.string().min(1, 'This is required*'),
  totalGst: z.string().min(1, 'This is required*'),
  modeOfPayment: z.string().min(1, 'This is required*'),
  status: z.string().min(1, 'This is required*'),
  details: z.string().min(1, 'This is required*'),
  extraDetails: z.string().optional(),
  invoiceItems: z.array(
    z.object({
      itemId: z.string().min(1, 'This is required*'),
      itemName: z.string().min(1, 'This is required*'),
      quantity: z.string().min(1, 'This is required*'),
      discount: z.string().min(1, 'This is required*'),
    }),
  ),
});
