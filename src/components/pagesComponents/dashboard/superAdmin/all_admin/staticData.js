import regex from '@/utils/regex';
import { formatDate } from '@/utils/utilityFunctions';
import { z } from 'zod';

// create admin files

export const createAdminForm = {
  pan: '',
  aadhaar: '',
  firstName: '',
  middleName: '',
  lastName: '',
  gender: '',
  fatherName: '',
  email: '',
  phone: '',
  password: '',
};

export const createAdminSchema = z.object({
  pan: z.string().regex(regex.PAN_CARD, 'Pan card is not valid!'),
  aadhaar: z.string().regex(regex.AADHAAR, 'Aadhaar card is not valid!'),
  firstName: z.string().min(1, 'First name is not valid!'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is not valid!'),
  gender: z.string('Gender is not valid!').min(1, 'Gender is not valid!'),
  fatherName: z.string().min(1, 'Fathers name is not valid!'),
  email: z.string().email('Email is not valid!'),
  phone: z.string().regex(regex.PHONE_RGX, 'Phone number is not valid!'),
  password: z
    .string()
    .min(6, 'Password needs to be at least 6 digits!')
    .max(20, 'Password is too long!'),
});

export const updateAdminSchema = z.object({
  pan: z.string().regex(regex.PAN_CARD, 'Pan card is not valid!'),
  aadhaar: z.string().regex(regex.AADHAAR, 'Aadhaar card is not valid!'),
  firstName: z.string().min(1, 'First name is not valid!'),
  middleName: z.string().optional(),
  lastName: z.string().min(1, 'Last name is not valid!'),
  gender: z.string('Gender is not valid!').min(1, 'Gender is not valid!'),
  fatherName: z.string().min(1, 'Fathers name is not valid!'),
  email: z.string().email('Email is not valid!'),
  phone: z.string().regex(regex.PHONE_RGX, 'Phone number is not valid!'),
  password: z.string().optional(),
});

export const createAdminInputs = {
  pan: {
    id: 'pan',
    label: 'Pan*',
    type: 'text',
    placeholder: 'Enter your pan',
  },
  aadhaar: {
    id: 'aadhaar',
    label: 'Aadhaar*',
    type: 'text',
    placeholder: 'Enter your aadhaar',
  },
  gender: {
    id: 'gender',
    label: 'Gender*',
    type: 'select',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Others', value: 'others' },
    ],
    placeholder: 'Select your gender',
  },
  firstName: {
    id: 'firstName',
    label: 'First Name*',
    type: 'text',
    placeholder: 'Enter your first name',
  },
  middleName: {
    id: 'middleName',
    label: 'Middle Name (If Applicable)',
    type: 'text',
    placeholder: 'Enter your middle name',
  },
  lastName: {
    id: 'lastName',
    label: 'Last Name*',
    type: 'text',
    placeholder: 'Enter your last name',
  },
  fatherName: {
    id: 'fatherName',
    label: 'Father Name*',
    type: 'text',
    placeholder: 'Enter your father name',
  },
  email: {
    id: 'email',
    label: 'Email*',
    type: 'email',
    placeholder: 'Enter your email',
  },
  phone: {
    id: 'phone',
    label: 'Phone*',
    type: 'text',
    placeholder: 'Enter your phone',
  },
  password: {
    id: 'password',
    label: 'Password*',
    type: 'text',
    placeholder: 'Enter your password',
  },
};

// get admin files

export const getAdminTableHeaders = [
  {
    dataField: 'id',
    text: 'ID',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'firstName',
    text: 'First Name',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'lastName',
    text: 'Last Name',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'email',
    text: 'Email',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'phone',
    text: 'Phone',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'aadhaar',
    text: 'Aadhaar',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'address',
    text: 'Address',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'pan',
    text: 'PAN',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'createdAt',
    text: 'Created At',
    formatter: (data) => (
      <div>
        <span>{formatDate(data)}</span>
      </div>
    ),
  },
  {
    dataField: 'userType',
    text: 'User Type',
    formatter: (data) => (
      <div>
        <span className="capitalize">{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'pin',
    text: 'PIN',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
];
