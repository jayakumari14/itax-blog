const invoice = '/icons/home/services/invoice.png';
const gst = '/icons/home/gst.png';
const hsn = '/icons/home/hsn.png';
const sac = '/icons/home/sac.png';

import {
  Authentication,
  Bank,
  ImagePDF,
  Post_Office,
  E_KYC,
  Extraction,
  All_Apis,
  pan,
  ifsc,
  logout,
  login,
  signUp,
  pdfMerge,
  form16,
  google,
  aadhar,
  verify,
  pinCode,
  pinCity,
  compress,
} from './icons';

export const iconList = {
  Signup: { icon: signUp },
  'Admin SignUp': { icon: signUp },
  'Form-16': { icon: form16 },
  Aadhaar: { icon: aadhar },
  Pan: { icon: pan },
  Login: { icon: login },
  'Admin Login': { icon: login },
  Logout: { icon: logout },
  Invoice: { src: invoice },
  'E-KYC': { icon: E_KYC },
  'IFSC Details': { icon: ifsc },
  'Verify Accounts': { icon: verify },
  'PIN Code Info': { icon: pinCode },
  'PIN Code by City': { icon: pinCity },
  'PDF Merge': { icon: pdfMerge },
  'IMG to PDF': { icon: ImagePDF },
  Compress: { icon: compress },
  'Login with Google': { icon: google },
  'HSN Code API': { src: hsn },
  'SAC Code API': { src: sac },
  Verify: { icon: verify },
};

export const categories = [
  {
    id: 'all_apis',
    icon: All_Apis,
    title: 'All Apis',
    path: '/apis/all_apis',
  },
  {
    id: 'authentication',
    icon: Authentication,
    title: 'Authentication',
    path: '/apis/authentication',
  },
  {
    id: 'bank',
    icon: Bank,
    title: 'Bank',
    path: '/apis/bank',
  },
  {
    id: 'image_pdf',
    icon: ImagePDF,
    title: 'Image/PDF',
    path: '/apis/image_pdf',
  },
  {
    id: 'post_office',
    icon: Post_Office,
    title: 'Post Office',
    path: '/apis/post_office',
  },
  {
    id: 'gst',
    src: gst,
    title: 'GST',
    path: '/apis/gst',
  },
  {
    id: 'extraction_e_kyc',
    icon: Extraction,
    title: 'Extraction & E-KYC',
    path: '/apis/extraction_e_kyc',
  },
];
