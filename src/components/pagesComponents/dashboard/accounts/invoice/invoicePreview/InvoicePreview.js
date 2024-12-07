'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import EditTemplate from './editTemplate/EditTemplate';
import InvoiceTemplate_4 from './templates/InvoiceTemplate_4';
import InvoiceTemplate_3 from './templates/InvoiceTemplate_3';
import InvoiceTemplate_2 from './templates/InvoiceTemplate_2';
import InvoiceTemplate_1 from './templates/InvoiceTemplate_1';
import TemplateOption from './TemplateOption/TemplateOption';
import { useForm } from 'react-hook-form';
import InvoiceTemplate_5 from './templates/InvoiceTemplate_5';
import { formatDate } from '@/utils/utilityFunctions';

function HeaderNav(props) {
  const { isEditable, setIsEditable, onPrint } = props;
  return (
    <div className="flex gap-2 flex-wrap-reverse justify-between p-2 container 2xl:max-w-7xl mx-auto">
      <div className="shadow-inner shadow-neutral-500/50 rounded-md p-2 grid gap-2 grid-cols-2 bg-gray-200">
        <button
          onClick={() => setIsEditable(false)}
          className={`rounded-md ${isEditable ? '' : 'bg-blue-500 text-neutral-50'} grid place-content-center py-1 px-2`}
          type="button"
        >
          Preview
        </button>
        <button
          onClick={() => setIsEditable(true)}
          className={`rounded-md ${isEditable ? 'bg-blue-500 text-neutral-50' : ''} grid place-content-center py-1 px-2`}
          type="button"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default function InvoicePreview(props) {
  const { respInvoice, respParty, businessProfile, user } = props;
  const [isEditable, setIsEditable] = useState(false);
  const pdf_ref = useRef();
  const [SelectedInvoiceTemplate, setSelectedInvoiceTemplate] = useState(1);

  // Fallback for undefined businessProfile
  const profile = businessProfile?.profile || {};

  const address =
    `${profile?.street ? profile.street + ',' : ''} ${profile?.landmark ? profile.landmark + ',' : ''} ${profile?.city ? profile.city + ',' : ''} ${profile?.dst ? profile.dst + ',' : ''} ${profile?.stcd ? profile.stcd + ',' : ''}`.trim();

  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      invoiceTitle: 'Invoice',
      invoiceBusinessName: profile?.businessName,
      invoiceNumber: respInvoice?.invoiceNumber,
      invoiceDate: formatDate(respInvoice?.invoiceDate),
      dueDate: formatDate(respInvoice?.dueDate),
      modeOfPayment: respInvoice?.modeOfPayment,
      bName_DetailsFrom: profile?.businessName,
      GSTIN_DetailsFrom: profile?.gstin,
      pan_DetailsFrom: profile?.pan,
      Address_DetailsFrom: address,
      phone_DetailsFrom: user.phone ?? '',
      email_DetailsFrom: user?.email,
      bName_DetailsTo: respParty?.partyName,
      GSTIN_DetailsTo: respParty?.gstin,
      pan_DetailsTo: respParty?.pan,
      Address_DetailsTo: respParty?.address,
      phone_DetailsTo: respParty?.phone,
      email_DetailsTo: respParty?.email,
      details: respInvoice?.details,
      extraDetails: respInvoice?.ExtraDetails,
      declaration:
        'We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.',
      regards: 'THANK YOU FOR YOUR BUSINESS!',
    },
  });

  const TemplatesMetaData = [
    {
      id: 1,
      title: 'Template 1',
      image: '/dashboard/account/invoice/template-1.png',
    },
    {
      id: 2,
      title: 'Template 2',
      image: '',
    },
    {
      id: 3,
      title: 'Template 3',
      image: '',
    },
    {
      id: 4,
      title: 'Template 4',
      image: '/dashboard/account/invoice/template-4.png',
    },
    {
      id: 5,
      title: 'Template 5',
      image: '/dashboard/account/invoice/template-5.png',
    },
    {
      id: 6,
      title: 'Template 6',
      image: '',
    },
  ];

  const generatePDF = useReactToPrint({
    content: () => pdf_ref.current,
    documentTitle: 'Invoice',
  });

  const handleTemplateChange = (id) => {
    setSelectedInvoiceTemplate(id);
    setIsEditable(false);
  };

  const TransactionBetweenParty = {
    from: {
      businessName: profile?.businessName,
      phone: 'currentUser?.phone',
      GSTIN: profile?.gstin,
      pan: profile?.pan,
      address: profile?.address,
    },
    to: {
      businessName: respParty?.partyName,
      phone: respParty?.phone,
      GSTIN: respParty?.gstin,
      pan: respParty?.pan,
      address: respParty?.address,
      email: respParty?.email,
    },
  };

  const onCreatePDF = (data) => {
    generatePDF();
  };

  return (
    <div className="bg-gray-100 p-4">
      <HeaderNav
        onPrint={onCreatePDF}
        isEditable={isEditable}
        setIsEditable={setIsEditable}
      />
      <div className="mt-4 grid gap-4 xl:grid-cols-[3fr_1fr] mx-auto container 2xl:max-w-7xl">
        <form
          onSubmit={handleSubmit(onCreatePDF)}
          className="min-h-full p-4 bg-neutral-50"
        >
          {isEditable ? (
            <EditTemplate
              onCreatePDF={onCreatePDF}
              register={register}
              respInvoice={respInvoice}
            />
          ) : (
            <>
              <div className="grid justify-end">
                <button className="btn-primary ml-auto flex items-center">
                  <Icon
                    className="text-2xl mr-2"
                    icon="material-symbols:download"
                  />
                  PDF
                </button>
              </div>
              <div ref={pdf_ref} className="p-2">
                <div className="bg-neutral-50 p-2 max-w-7xl shadow-lg border border-neutral-400">
                  {SelectedInvoiceTemplate === 1 ? (
                    <InvoiceTemplate_1
                      watch={watch}
                      respInvoice={respInvoice}
                      businessProfile={businessProfile}
                      TransactionBetweenParty={TransactionBetweenParty}
                    />
                  ) : SelectedInvoiceTemplate === 2 ? (
                    <InvoiceTemplate_2
                      watch={watch}
                      respInvoice={respInvoice}
                      businessProfile={businessProfile}
                      TransactionBetweenParty={TransactionBetweenParty}
                    />
                  ) : SelectedInvoiceTemplate === 3 ? (
                    <InvoiceTemplate_3
                      watch={watch}
                      respInvoice={respInvoice}
                      businessProfile={businessProfile}
                      TransactionBetweenParty={TransactionBetweenParty}
                    />
                  ) : SelectedInvoiceTemplate === 4 ? (
                    <InvoiceTemplate_4
                      watch={watch}
                      respInvoice={respInvoice}
                      businessProfile={businessProfile}
                      TransactionBetweenParty={TransactionBetweenParty}
                    />
                  ) : SelectedInvoiceTemplate === 5 ? (
                    <InvoiceTemplate_5
                      watch={watch}
                      respInvoice={respInvoice}
                      businessProfile={businessProfile}
                      TransactionBetweenParty={TransactionBetweenParty}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </>
          )}
        </form>
        <TemplateOption
          SelectedInvoiceTemplate={SelectedInvoiceTemplate}
          handleTemplateChange={handleTemplateChange}
          TemplatesMetaData={TemplatesMetaData}
        />
      </div>
    </div>
  );
}
