import styled from 'styled-components';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const token = process.env.NEXT_PUBLIC_WEB_TOKEN;
export const BLAZ_URL = process.env.NEXT_PUBLIC_BLAZ_URL;

export const Para = styled.p`
  max-height: 100px;
  min-height: 100px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

export const StyledButtonLink =
    'cursor-pointer inline-block bg-blue-600 text-white mt-8 px-8 py-3 text-gray-500 rounded-md font-semibold text-sm';

export const ourServicesCards = [
    {
        heading: 'For Individuals',
        items: [
            {
                icon: 'itr.png',
                link: '/itr-filling/personal-info',
                label: 'Easy ITR',
                upcoming: true,
            },
            {
                icon: 'itr.png',
                link: `${BLAZ_URL}/form-16`,
                label: 'Form-16',
                upcoming: true,
            },
            {
                icon: 'invest.png',
                link: `${BLAZ_URL}`,
                label: 'Easy Investment',
            },
            {
                icon: 'invoice.png',
                link: `/loan`,
                label: 'Apply For Loan',
            },
        ],
    },
    {
        heading: 'For Enterprises',
        items: [
            {
                icon: 'itr.png',
                link: '/itr-filling/personal-info',
                label: 'Easy ITR',
                upcoming: true,
            },
            {
                icon: 'gst.png',
                link: `${BLAZ_URL}/gst/gstr`,
                label: 'Easy GSTR',
                upcoming: true,
            },
            {
                icon: 'invoice.png',
                link: `${BLAZ_URL}/invoice`,
                label: 'Easy E-Invoice',
            },
            {
                icon: 'graph.png',
                link: `${BLAZ_URL}`,
                label: 'Easy Audit',
                upcoming: true,
            },
        ],
    },
    {
        heading: 'For Tax Experts',
        items: [
            {
                icon: 'itr.png',
                link: '/itr-filling/personal-info',
                label: 'Easy ITR',
                upcoming: true,
            },
            {
                icon: 'gst.png',
                externalLink: `${BLAZ_URL}/gst/gstr`,
                label: 'Easy GSTR',
                upcoming: true,
            },
            {
                icon: 'rupees.png',
                link: `${BLAZ_URL}`,
                label: 'Easy TDS',
                upcoming: true,
            },
            {
                icon: 'graph.png',
                link: `${BLAZ_URL}`,
                label: 'Easy Audit',
                upcoming: true,
            },
        ],
    },
    {
        heading: 'For SMEs',
        items: [
            {
                icon: 'itr.png',
                link: '/itr-filling/personal-info',
                label: 'Easy ITR',
                upcoming: true,
            },
            {
                icon: 'gst.png',
                link: `${BLAZ_URL}/gst/gstr`,
                label: 'Easy GSTR',
                upcoming: true,
            },
            {
                icon: 'invoice.png',
                link: `${BLAZ_URL}/invoice`,
                label: 'Easy E-Invoice',
            },
            {
                icon: 'graph.png',
                link: `${BLAZ_URL}`,
                label: 'Easy Audit',
                upcoming: true,
            },
        ],
    },
];


//FEATURE: icons for the service card
export const iconForServiceCard = [
    {
        icon: 'carbon:document',
        heading: 'GST'
    },
    {
        icon: '',
        heading: 'INCOME TAX LINKS'
    },
    {
        icon: '',
        heading: 'ITR'
    },
    {
        icon: '',
        heading: 'AADHAAR'
    },
    {
        icon: '',
        heading: 'BANK'
    },

];

export const ongoingProjects = [
    {
        img: 'build_the_future.png',
        label: 'Build The Future',
    },
    {
        img: 'homes.png',
        label: 'Buy & Rent The House With Us',
    },
    {
        img: 'buy_sell_cars.png',
        label: 'Best Way To BUY/SELL Cars',
    },
    {
        img: 'health.png',
        label: 'Health Care Management Consultancy',
    },
    {
        img: 'upcoming.webp',
        label: 'Blaze',
    },
    {
        img: 'upcoming.webp',
        label: 'Accounts',
    },
    {
        img: 'upcoming.webp',
        label: 'Ninja Hosting',
    },
    {
        img: 'upcoming.webp',
        label: 'Block Chain',
    },
];

export const corporatePartners = [
    {
        img: 'lic.png',
        label: 'Life Insurance Corporation of India (LIC)',
    },
    {
        img: 'rbi.png',
        label: 'Liability On Long-Term Capital Gains',
    },
    {
        img: 'star.png',
        label: 'Star Health And Allied Insurance Co Ltd',
    },
    {
        img: 'yes.png',
        label: 'YES Securities (India) Limited (YSL)',
    },
    {
        img: 'bajajCapital.png',
        label: 'Bajaj Capital',
    },
    {
        img: 'iciciciHomeLogo.svg',
        label: 'ICICICI Home Finance',
    },
];
