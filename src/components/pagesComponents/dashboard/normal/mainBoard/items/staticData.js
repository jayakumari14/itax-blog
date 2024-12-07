import regex from '@/utils/regex';
import { formatDate } from '@/utils/utilityFunctions';
import { z } from 'zod';

// create admin files

export const createSaleForm = {
  name: '',
  status: '',
  invoiceDate: '',
  invoiceNo: '',
  totalAmount: '',
  advanceAmount: '',
  //   fatherName: '',
  //   email: '',
  //   phone: '',
  //   password: '',
};

export const createSaleSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  status: z.string().min(1, 'Status is required!'),
  invoiceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format!',
  }),
  invoiceNo: z.string().min(1, 'Invoice number is required!'),
  totalAmount: z.number().positive('Total amount must be positive!'),
  advanceAmount: z.number().positive('Advance amount must be positive!'),
});

export const updateSaleSchema = z.object({
  name: z.string().min(1, 'Name is required!').optional(),
  status: z.string().min(1, 'Status is required!').optional(),
  invoiceDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format!',
    })
    .optional(),
  invoiceNo: z.string().min(1, 'Invoice number is required!').optional(),
  totalAmount: z.number().positive('Total amount must be positive!').optional(),
  advanceAmount: z
    .number()
    .positive('Advance amount must be positive!')
    .optional(),
});
export const validationResult = updateSaleSchema.safeParse(createSaleForm);

if (validationResult.success) {
  console.log('Validation successful:', validationResult.data);
} else {
  console.error('Validation errors:', validationResult.error.errors);
}
// export const createSaleSchema = z.object({
//   pan: z.string().regex(regex.PAN_CARD, 'Pan card is not valid!'),
//   aadhaar: z.string().regex(regex.AADHAAR, 'Aadhaar card is not valid!'),
//   firstName: z.string().min(1, 'First name is not valid!'),
//   middleName: z.string().optional(),
//   lastName: z.string().min(1, 'Last name is not valid!'),
//   gender: z.string('Gender is not valid!').min(1, 'Gender is not valid!'),
//   fatherName: z.string().min(1, 'Fathers name is not valid!'),
//   email: z.string().email('Email is not valid!'),
//   phone: z.string().regex(regex.PHONE_RGX, 'Phone number is not valid!'),
//   password: z
//     .string()
//     .min(6, 'Password needs to be at least 6 digits!')
//     .max(20, 'Password is too long!'),
// });

// export const updateSaleSchema = z.object({
//   pan: z.string().regex(regex.PAN_CARD, 'Pan card is not valid!'),
//   aadhaar: z.string().regex(regex.AADHAAR, 'Aadhaar card is not valid!'),
//   firstName: z.string().min(1, 'First name is not valid!'),
//   middleName: z.string().optional(),
//   lastName: z.string().min(1, 'Last name is not valid!'),
//   gender: z.string('Gender is not valid!').min(1, 'Gender is not valid!'),
//   fatherName: z.string().min(1, 'Fathers name is not valid!'),
//   email: z.string().email('Email is not valid!'),
//   phone: z.string().regex(regex.PHONE_RGX, 'Phone number is not valid!'),
//   password: z.string().optional(),
// });

export const createSaleInputs = {
  name: {
    id: 'name',
    label: 'Name*',
    type: 'text',
    placeholder: 'Enter your name',
  },
  status: {
    id: 'status',
    label: 'Status*',
    type: 'text',
    placeholder: 'Enter your status',
  },
  //   gender: {
  //     id: 'gender',
  //     label: 'Gender*',
  //     type: 'select',
  //     options: [
  //       { label: 'Male', value: 'male' },
  //       { label: 'Female', value: 'female' },
  //       { label: 'Others', value: 'others' },
  //     ],
  //     placeholder: 'Select your gender',
  //   },
  invoiceDate: {
    id: 'invoiceDate',
    label: ' Invoice Date*',
    type: 'text',
    placeholder: 'Enter  invoice date',
  },
  invoiceNo: {
    id: 'invoiceNo',
    label: 'Invoice No.',
    type: 'text',
    placeholder: 'Enter  invoice no.',
  },
  totalAmount: {
    id: 'totalAmount',
    label: 'Total Amount*',
    type: 'text',
    placeholder: 'Enter  total amount',
  },
  advanceAmount: {
    id: 'advanceAmount',
    label: 'Advance Amount*',
    type: 'text',
    placeholder: 'Enter advance Amount',
  },
  //   email: {
  //     id: 'email',
  //     label: 'Email*',
  //     type: 'email',
  //     placeholder: 'Enter your email',
  //   },
  //   phone: {
  //     id: 'phone',
  //     label: 'Phone*',
  //     type: 'text',
  //     placeholder: 'Enter your phone',
  //   },
  //   password: {
  //     id: 'password',
  //     label: 'Password*',
  //     type: 'text',
  //     placeholder: 'Enter your password',
  //   },
};

// get admin files

export const getSaleTableHeaders = [
  //   {
  //     dataField: 'id',
  //     text: 'S No.',
  //     formatter: (data) => (
  //       <div>
  //         <span>{data ?? 'N/A'}</span>
  //       </div>
  //     ),
  //   },
  {
    dataField: 'name',
    text: ' Name',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'status',
    text: 'Status',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceDate',
    text: 'Invoice Date',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceNo',
    text: 'Invoice No.',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'totalAmount',
    text: 'Total Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'advanceAmount',
    text: 'Advance Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
];

//**************************Purchasetable********************** */

export const createPurchaseForm = {
  name: '',
  status: '',
  invoiceDate: '',
  invoiceNo: '',
  totalAmount: '',
  advanceAmount: '',
};

export const createPurchaseSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  status: z.string().min(1, 'Status is required!'),
  invoiceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format!',
  }),
  invoiceNo: z.string().min(1, 'Invoice number is required!'),
  totalAmount: z.number().positive('Total amount must be positive!'),
  advanceAmount: z.number().positive('Advance amount must be positive!'),
});

export const updatePurchaseSchema = z.object({
  name: z.string().min(1, 'Name is required!').optional(),
  status: z.string().min(1, 'Status is required!').optional(),
  invoiceDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format!',
    })
    .optional(),
  invoiceNo: z.string().min(1, 'Invoice number is required!').optional(),
  totalAmount: z.number().positive('Total amount must be positive!').optional(),
  advanceAmount: z
    .number()
    .positive('Advance amount must be positive!')
    .optional(),
});
export const validationResultPurchase =
  updatePurchaseSchema.safeParse(createPurchaseForm);

if (validationResultPurchase.success) {
  console.log('Validation successful:', validationResultPurcahse.data);
} else {
  console.error('Validation errors:', validationResultPurchase.error.errors);
}

export const createPurchaseInputs = {
  name: {
    id: 'name',
    label: 'Name*',
    type: 'text',
    placeholder: 'Enter your name',
  },
  status: {
    id: 'status',
    label: 'Status*',
    type: 'text',
    placeholder: 'Enter your status',
  },
  invoiceDate: {
    id: 'invoiceDate',
    label: ' Invoice Date*',
    type: 'text',
    placeholder: 'Enter  invoice date',
  },
  invoiceNo: {
    id: 'invoiceNo',
    label: 'Invoice No.',
    type: 'text',
    placeholder: 'Enter  invoice no.',
  },
  totalAmount: {
    id: 'totalAmount',
    label: 'Total Amount*',
    type: 'text',
    placeholder: 'Enter  total amount',
  },
  advanceAmount: {
    id: 'advanceAmount',
    label: 'Advance Amount*',
    type: 'text',
    placeholder: 'Enter advance Amount',
  },
};

// get admin files

export const getPurchaseTableHeaders = [
  //   {
  //     dataField: 'id',
  //     text: 'S No.',
  //     formatter: (data) => (
  //       <div>
  //         <span>{data ?? 'N/A'}</span>
  //       </div>
  //     ),
  //   },
  {
    dataField: 'name',
    text: ' Name',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'status',
    text: 'Status',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceDate',
    text: 'Invoice Date',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceNo',
    text: 'Invoice No.',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'totalAmount',
    text: 'Total Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'advanceAmount',
    text: 'Advance Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
];

/**************************Payments Table********************** */

export const createPaymentsForm = {
  name: '',
  status: '',
  invoiceDate: '',
  invoiceNo: '',
  totalAmount: '',
  advanceAmount: '',
};

export const createPaymentsSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  status: z.string().min(1, 'Status is required!'),
  invoiceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format!',
  }),
  invoiceNo: z.string().min(1, 'Invoice number is required!'),
  totalAmount: z.number().positive('Total amount must be positive!'),
  advanceAmount: z.number().positive('Advance amount must be positive!'),
});

export const updatePaymentsSchema = z.object({
  name: z.string().min(1, 'Name is required!').optional(),
  status: z.string().min(1, 'Status is required!').optional(),
  invoiceDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format!',
    })
    .optional(),
  invoiceNo: z.string().min(1, 'Invoice number is required!').optional(),
  totalAmount: z.number().positive('Total amount must be positive!').optional(),
  advanceAmount: z
    .number()
    .positive('Advance amount must be positive!')
    .optional(),
});

export const validationResultPayments =
  updatePaymentsSchema.safeParse(createPaymentsForm);

if (validationResultPayments.success) {
  console.log('Validation successful:', validationResultPayments.data);
} else {
  console.error('Validation errors:', validationResultPayments.error.errors);
}

export const createPaymentsInputs = {
  name: {
    id: 'name',
    label: 'Name*',
    type: 'text',
    placeholder: 'Enter your name',
  },
  status: {
    id: 'status',
    label: 'Status*',
    type: 'text',
    placeholder: 'Enter your status',
  },
  invoiceDate: {
    id: 'invoiceDate',
    label: ' Invoice Date*',
    type: 'text',
    placeholder: 'Enter  invoice date',
  },
  invoiceNo: {
    id: 'invoiceNo',
    label: 'Invoice No.',
    type: 'text',
    placeholder: 'Enter  invoice no.',
  },
  totalAmount: {
    id: 'totalAmount',
    label: 'Total Amount*',
    type: 'text',
    placeholder: 'Enter  total amount',
  },
  advanceAmount: {
    id: 'advanceAmount',
    label: 'Advance Amount*',
    type: 'text',
    placeholder: 'Enter advance Amount',
  },
};

// get admin files

export const getPaymentsTableHeaders = [
  //   {
  //     dataField: 'id',
  //     text: 'S No.',
  //     formatter: (data) => (
  //       <div>
  //         <span>{data ?? 'N/A'}</span>
  //       </div>
  //     ),
  //   },
  {
    dataField: 'name',
    text: ' Name',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'status',
    text: 'Status',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceDate',
    text: 'Invoice Date',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceNo',
    text: 'Invoice No.',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'totalAmount',
    text: 'Total Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'advanceAmount',
    text: 'Advance Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
];

/**************************Receivable Table********************** */

export const createReceivableForm = {
  name: '',
  status: '',
  invoiceDate: '',
  invoiceNo: '',
  totalAmount: '',
  advanceAmount: '',
};

export const createReceivableSchema = z.object({
  name: z.string().min(1, 'Name is required!'),
  status: z.string().min(1, 'Status is required!'),
  invoiceDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: 'Invalid date format!',
  }),
  invoiceNo: z.string().min(1, 'Invoice number is required!'),
  totalAmount: z.number().positive('Total amount must be positive!'),
  advanceAmount: z.number().positive('Advance amount must be positive!'),
});

export const updateReceivableSchema = z.object({
  name: z.string().min(1, 'Name is required!').optional(),
  status: z.string().min(1, 'Status is required!').optional(),
  invoiceDate: z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), {
      message: 'Invalid date format!',
    })
    .optional(),
  invoiceNo: z.string().min(1, 'Invoice number is required!').optional(),
  totalAmount: z.number().positive('Total amount must be positive!').optional(),
  advanceAmount: z
    .number()
    .positive('Advance amount must be positive!')
    .optional(),
});
export const validationResultReceivable =
  updateReceivableSchema.safeParse(createReceivableForm);

if (validationResultReceivable.success) {
  console.log('Validation successful:', validationResultReceivable.data);
} else {
  console.error('Validation errors:', validationResultReceivable.error.errors);
}

export const createReceivableInputs = {
  name: {
    id: 'name',
    label: 'Name*',
    type: 'text',
    placeholder: 'Enter your name',
  },
  status: {
    id: 'status',
    label: 'Status*',
    type: 'text',
    placeholder: 'Enter your status',
  },
  invoiceDate: {
    id: 'invoiceDate',
    label: ' Invoice Date*',
    type: 'text',
    placeholder: 'Enter  invoice date',
  },
  invoiceNo: {
    id: 'invoiceNo',
    label: 'Invoice No.',
    type: 'text',
    placeholder: 'Enter  invoice no.',
  },
  totalAmount: {
    id: 'totalAmount',
    label: 'Total Amount*',
    type: 'text',
    placeholder: 'Enter  total amount',
  },
  advanceAmount: {
    id: 'advanceAmount',
    label: 'Advance Amount*',
    type: 'text',
    placeholder: 'Enter advance Amount',
  },
};

// get admin files

export const getReceivableTableHeaders = [
  //   {
  //     dataField: 'id',
  //     text: 'S No.',
  //     formatter: (data) => (
  //       <div>
  //         <span>{data ?? 'N/A'}</span>
  //       </div>
  //     ),
  //   },
  {
    dataField: 'name',
    text: ' Name',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'status',
    text: 'Status',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceDate',
    text: 'Invoice Date',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'invoiceNo',
    text: 'Invoice No.',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'totalAmount',
    text: 'Total Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
  {
    dataField: 'advanceAmount',
    text: 'Advance Amount',
    formatter: (data) => (
      <div>
        <span>{data ?? 'N/A'}</span>
      </div>
    ),
  },
];
