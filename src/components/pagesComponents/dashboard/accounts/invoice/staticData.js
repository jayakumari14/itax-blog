export const invoiceDashboardNavItems = [
  {
    linkTo: '#',
    icon: 'iconamoon:invoice-duotone',
    title: 'invoice',
    data: '0',
    cssClass:
      'p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500',
  },
  {
    linkTo: 'all-sales',
    icon: 'mdi:cart-sale',
    title: 'sale',
    data: '0',
    cssClass:
      'p-3 mr-4 text-yellow-500 bg-yellow-100 rounded-full dark:text-yellow-100 dark:bg-yellow-500',
  },
  {
    linkTo: 'all-purchase',
    icon: 'carbon:purchase',
    title: 'purchase',
    data: '0',
    cssClass:
      'p-3 mr-4 text-indigo-500 bg-indigo-100 rounded-full dark:text-indigo-100 dark:bg-indigo-500',
  },
  {
    linkTo: 'items',
    icon: 'solar:box-broken',
    title: 'item',
    data: '0',
    cssClass:
      'p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500',
  },
  {
    linkTo: 'customers',
    icon: 'ph:users-four',
    title: 'customer',
    data: '0',
    cssClass:
      'p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500',
  },
  {
    linkTo: 'suppliers',
    icon: 'ph:users-four',
    title: 'supplier',
    data: '0',
    cssClass:
      'p-3 mr-4 text-red-500 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-500',
  },
  {
    linkTo: 'cash-bank',
    icon: 'game-icons:cash',
    title: 'cash/bank',
    data: '0',
    cssClass:
      'p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500',
  },
];

export const invoicesTableHeaders = [
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">INVOICE NUMBER</span>
      </div>
    ),
    dataField: 'invoiceNumber',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">{`${data || 'N/A'}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">CGST</span>
      </div>
    ),
    dataField: 'cgst',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium">{`₹${data || 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">SGST</span>
      </div>
    ),
    dataField: 'sgst',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium">{`₹${data || 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">IGST</span>
      </div>
    ),
    dataField: 'igst',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium">{`₹${data || 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">UTGST</span>
      </div>
    ),
    dataField: 'utgst',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium">{`₹${data || 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">TOTAL GST</span>
      </div>
    ),
    dataField: 'totalGst',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium">{`₹${data || 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">Taxable Value</span>
      </div>
    ),
    dataField: 'totalGst',
    formatter: (data, row) => (
      <div className="flex justify-start items-center">
        <span className="font-medium">{`₹${data ? row.totalAmount - data : 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex items-center max-w-xs">
        <span className="font-medium">TOTAL AMOUNT</span>
      </div>
    ),
    dataField: 'totalAmount',
    formatter: (data) => (
      <div className="flex items-center max-w-xs">
        <span className="font-medium">{`₹${data || 0}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex items-center max-w-xs">
        <span className="font-medium">PAYMENT</span>
      </div>
    ),
    dataField: 'modeOfPayment',
    formatter: (data, row) => {
      const status = row.status;
      return (
        <div className="flex items-center max-w-xs">
          <span className="font-medium uppercase">{`${status || 'N/A'}`}</span>
        </div>
      );
    },
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">TYPE</span>
      </div>
    ),
    dataField: 'type',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">{`${data || 'N/A'}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">CREDIT</span>
      </div>
    ),
    dataField: 'credit',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">{`${data === false ? 'No' : 'Yes' || 'N/A'}`}</span>
      </div>
    ),
  },
  {
    text: (
      <div className="flex justify-start items-center">
        <span className="font-medium">GST NUMBER</span>
      </div>
    ),
    dataField: 'gstNumber',
    formatter: (data) => (
      <div className="flex justify-start items-center">
        <span className="font-medium capitalize">{`${data || 'N/A'}`}</span>
      </div>
    ),
  },
];
