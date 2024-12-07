import { z } from 'zod';

export const footerDefaults = {
  facebook: '',
  instagram: '',
  youtube: '',
  whatsapp: '',
  email: '',
  phone: '',
  address: '',
  addressAlternate: '',
  copyright: '',
};

export const footerInputs = {
  facebook: {
    id: 'facebook',
    label: 'facebook',
    placeholder: 'Enter facebook',
    type: 'text',
  },
  instagram: {
    id: 'instagram',
    label: 'instagram',
    placeholder: 'Enter instagram',
    type: 'text',
  },
  youtube: {
    id: 'youtube',
    label: 'youtube',
    placeholder: 'Enter youtube',
    type: 'text',
  },
  linkedin: {
    id: 'linkedin',
    label: 'linkedin',
    placeholder: 'Enter linkedin',
    type: 'text',
  },
  whatsapp: {
    id: 'whatsapp',
    label: 'whatsapp',
    placeholder: 'Enter whatsapp',
    type: 'text',
  },
  email: {
    id: 'email',
    label: 'email',
    placeholder: 'Enter email',
    type: 'text',
  },
  phone: {
    id: 'phone',
    label: 'phone',
    placeholder: 'Enter phone',
    type: 'text',
  },
  address: {
    id: 'address',
    label: 'address',
    placeholder: 'Enter address',
    type: 'text',
  },
  addressAlternate: {
    id: 'addressAlternate',
    label: 'address alternate',
    placeholder: 'Enter alternate address',
    type: 'text',
  },
  copyright: {
    id: 'copyright',
    label: 'copyright',
    placeholder: 'Enter copyright',
    type: 'text',
  },
};

export const footerValidation = z.object({
  facebook: z.string().min(1, 'Facebook link is required'),
  instagram: z.string().min(1, 'Instagram link is required'),
  youtube: z.string().min(1, 'Youtube link is required'),
  linkedin: z.string().min(1, 'Linkedin link is required'),
  whatsapp: z.string().min(1, 'Whatsapp link is required'),
  email: z.string().email('Email is invalid').min(1, 'Email link is required'),
  phone: z.string().min(1, 'Phone link is required'),
  address: z.string().min(1, 'Address link is required'),
  addressAlternate: z.string().min(1, 'Address alternate link is required'),
  copyright: z.string().min(1, 'Copyright notice is required'),
});
