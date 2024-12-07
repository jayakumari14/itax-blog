import { z } from 'zod';

// Default value for blog post form, also used for rendering form inputs
export const defaultValuesBlogPost = {
  title: '',
  contentHeading: '',
  category: '',
  contentDescription: '',
  image: null,
};

export const labelKeyMappingBlogPost = {
  title: 'Title',
  contentHeading: 'Content Heading',
  category: 'Category',
  contentDescription: 'Description',
  image: 'Post Image',
};

export const categoryOptions = [
  { label: 'Account & Audit', value: 'account&audit' },
  { label: 'Company Law', value: 'companylaw' },
  { label: 'Competition Law', value: 'competitionlaw' },
  { label: 'FEMA & Banking', value: 'fema&banking' },
  { label: 'GST & Customs', value: 'gst&customs' },
  { label: 'Income Tax', value: 'incometax' },
  { label: 'Indian Acts', value: 'indinacts' },
  { label: 'Insolvency and Bankruptcy', value: 'insolvencyandbankruptcy' },
  { label: 'International Tax', value: 'internationaltax' },
  { label: 'Labour & Industrial Laws', value: 'labour&industriallaws' },
  { label: 'Other Laws', value: 'otherlaws' },
  { label: 'Transfer Pricing', value: 'transferpricing' },
];

export const blogSchema = z.object({
  title: z.string().min(1, 'This is required'),
  contentHeading: z.string().min(1, 'This is required'),
  category: z.string('This is required').min(1, 'This is required'),
  contentDescription: z.string().min(1, 'This is required'),
  image: z.any().optional(),
});
