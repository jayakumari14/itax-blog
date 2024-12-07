import { z } from 'zod';

export const insuranceInitialData = {
  name: '',
  email: '',
  address: '',
  mobile: '',
  dob: '',
  gender: '',
  maritalStatus: '',
  type: '',
};

export const insuranceFormFields = {
  name: {
    id: 'name',
    label: 'Name',
    type: 'text',
    placeholder: 'Enter name of applicant',
  },
  email: {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email..',
  },
  address: {
    id: 'address',
    label: 'Address',
    type: 'text',
    placeholder: 'Enter address here..',
  },
  mobile: {
    id: 'phone',
    label: 'Phone Number',
    type: 'text',
    placeholder: 'Enter phone number..',
  },
  dob: {
    id: 'dob',
    label: 'Date of Birth',
    type: 'date',
    placeholder: 'Enter phone date of birth..',
  },
  gender: {
    id: 'gender',
    label: 'Gender',
    type: 'select',
    placeholder: 'Select gender..',
    options: [
      {
        label: 'Male',
        value: 'male',
      },
      {
        label: 'Female',
        value: 'female',
      },
      {
        label: 'Others',
        value: 'others',
      },
    ],
  },
  maritalStatus: {
    id: 'ms',
    label: 'Martial Status',
    type: 'select',
    placeholder: 'Select martial status..',
    options: [
      {
        label: 'Married',
        value: 'married',
      },
      {
        label: 'Single',
        value: 'single',
      },
    ],
  },
  type: {
    id: 'toi',
    label: 'Type of Insurance',
    type: 'select',
    placeholder: 'Select type of insurance..',
    options: [
      {
        label: 'Type 1',
        value: 'Type 1',
      },
    ],
  },
};

// Form validation schema
export const insuranceValidationSchema = z.object({
  name: z.string('name').min(1, 'This is required'),
  email: z
    .string('email')
    .min(1, 'This is required')
    .email('This is not valid'),
  address: z.string('address').min(1, 'This is required'),
  mobile: z.string('mobile').min(1, 'This is required'),
  dob: z.string('dob').min(1, 'This is required'),
  gender: z.string('gender').min(1, 'This is required'),
  maritalStatus: z.string('maritalStatus').min(1, 'This is required'),
  type: z.string('type').min(1, 'This is required'),
});
