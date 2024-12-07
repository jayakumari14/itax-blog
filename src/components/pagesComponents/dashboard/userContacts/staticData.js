import Image from 'next/image';
import ViewResumeModal from './ViewResumeModal';
export const contactsTableHeaders = [
  {
    text: 'Name',
    dataField: 'name',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Email',
    dataField: 'email',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Phone Number',
    dataField: 'phoneNumber',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Message',
    dataField: 'message',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
];
export const careerTableHeaders = [
  {
    text: 'Name',
    dataField: 'name',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Email',
    dataField: 'email',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Phone Number',
    dataField: 'mobile',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Gender',
    dataField: 'gender',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Skills',
    dataField: 'skills',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Address',
    dataField: 'address',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Pin',
    dataField: 'pin',
    formatter: (data) => (
      <div className="flex   justify-start items-center">
        <span className="font-medium">{data}</span>
      </div>
    ),
  },
  {
    text: 'Cv',
    dataField: 'cv',
    formatter: (data) => (
      <>
        <ViewResumeModal data={data} />
      </>
    ),
  },
];
