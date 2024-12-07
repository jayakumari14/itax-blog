import regex from '@/utils/regex';
import { z } from 'zod';

export const createStartupSchema = z.object({
  title: z.string().min(1, 'This is required'),
  categories: z.string().min(1, 'This is required'),
  priceWithGst: z
    .string()
    .min(1, 'This is required')
    .regex(regex.stringNumberRegex, 'Enter a number'),
  aboutService: z
    .string()
    .min(1, 'This is required')
    .max(1500, 'This is too long!'),
  image: z.any().refine(
    (file) => {
      if (file) {
        if (!file.type || !file.type.startsWith('image/')) return false;
        if (file.size > 1024 * 1024) return false;
      }
      return true;
    },
    { message: 'Only Image are allowed with less than 1mb size' },
  ),
});

export const updateStartupSchema = z.object({
  title: z.string().min(1, 'This is required'),
  categories: z.string().min(1, 'This is required'),
  priceWithGst: z
    .string()
    .min(1, 'This is required')
    .regex(regex.stringNumberRegex, 'Enter a number'),
  aboutService: z
    .string()
    .min(1, 'This is required')
    .max(1500, 'This is too long!'),
  image: z
    .any()
    .refine(
      (file) => {
        if (file && file.type) {
          if (!file.type || !file.type.startsWith('image/')) return false;
          if (file.size > 1024 * 1024) return false;
        }
        return true;
      },
      { message: 'Only Image are allowed with less than 1mb size' },
    )
    .optional()
    .nullable(),
});

// SELECT OPTIONS
export const startupCategoryOptions = [
  { value: 'registration', label: 'Registration' },
  { value: 'companyRegistration', label: 'Company Registration' },
  { value: 'returns', label: 'Returns' },
  { value: 'audits', label: 'Audits' },
];
