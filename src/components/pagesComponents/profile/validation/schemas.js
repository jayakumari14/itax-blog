import regex from '@/utils/regex';
import { z } from 'zod';

export const userCreate = {
  avatar: null,
  aadhaar: '',
  address: '',
  email: '',
  firstName: '',
  gender: '',
  lastName: '',
  middleName: '',
  pan: '',
  phone: '',
  pin: '',
};

export const userSchema = z.object({
  pan: z.string().regex(regex.PAN_CARD, 'This is not a valid pan number*'),
  aadhaar: z
    .string()
    .regex(regex.AADHAAR, 'This is not a valid aadhaar number*'),
  firstName: z.string().min(1, 'First name is required*'),
  lastName: z.string().min(1, 'Last name is required*'),
  middleName: z.string().optional(),
  email: z.string().email('This is not a valid email*'),
  phone: z.string().min(10, 'Please enter a 10 digit phone number*'),
  address: z.string().min(1, 'Please enter your address*'),
  gender: z.string().min(1, 'Please select your gender*'),
  avatar: z.any().optional(),
  pin: z
    .string()
    .regex(regex.stringNumberRegex, 'A pin code must be in numbers'),
});

export const bsProfileCreateSchema = z.object({
  pan: z
    .string()
    .min(1, 'This is required*')
    .regex(regex.PAN_CARD, 'This is not a valid pan number*')
    .refine((val) => val.toUpperCase()),
  statecode: z
    .string()
    .min(1, 'This is required*')
    .max(2, 'It must be 2 digits at most*')
    .regex(regex.stringNumberRegex, 'This is not a valid state number*'),
  businessName: z.string().min(1, 'This is required*'),
  taxpayer_type: z.string().min(1, 'This is required*'),
  gstin: z
    .string()
    .min(1, 'This is required*')
    .regex(regex.GSTIN, 'This is not a valid gstin'),
  status: z.string().min(1, 'This is required*'),
  ctb: z.string().min(1, 'This is required*'),
  street: z.string().min(1, 'This is required*'),
  landmark: z.string().optional(),
  city: z.string().min(1, 'This is required*'),
  dst: z.string().min(1, 'This is required*'),
  stcd: z.string().min(1, 'This is required*'),
});
