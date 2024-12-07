import regex from '@/utils/regex';
import { z } from 'zod';

export const createPartySchema = z.object({
  gstin: z
    .string()
    .min(1, 'This is required*')
    .regex(regex.GSTIN, 'This is not valid*'),
  partyName: z.string().min(1, 'This is required*'),
  contactPerson: z.string().min(1, 'This is required*'),
  pan: z.string().min(1, 'This is required*'),
  partyType: z.string().min(1, 'This is required*'),
  upi: z.string().min(1, 'This is required*'),
  phone: z
    .string()
    .min(10, 'This is required*')
    .regex(regex.PHONE_RGX, 'This is not valid*'),
  email: z
    .string()
    .min(1, 'This is required*')
    .regex(regex.EMAIL_RGX, 'This is not valid*'),
  bank: z.string().min(1, 'This is required*'),
  address: z.string().min(1, 'This is required*'),
  bankName: z.string().min(1, 'This is required*'),
  bankAccountNumber: z.string().min(1, 'This is required*'),
  bankIfsc: z.string().min(1, 'This is required*'),
  bankBranch: z.string().min(1, 'This is required*'),
});
