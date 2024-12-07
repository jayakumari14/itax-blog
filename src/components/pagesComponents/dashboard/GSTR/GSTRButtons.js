import Button from './Button';

export default function GSTRButtons() {
  const buttonData = [
    {
      linkTo: 'check-return-status',
      title: 'Check Return Status',
    },
    {
      linkTo: 'permanent-information',
      title: 'Permanent Information',
    },
    {
      linkTo: 'registration-details',
      title: 'Registration Details',
    },
    {
      linkTo: 'login-with-gstin',
      title: 'Login With GSTIN',
    },
  ];
  return (
    <div className="mt-4 px-4 gap-1 grid justify-center grid-cols-[repeat(auto-fill,minmax(180px,1fr))] rounded-md ">
      {buttonData.map((el, key) => (
        <Button
          linkTo={'/dashboard/easy-gst-return/' + el.linkTo}
          key={key}
          title={el.title}
          className="w-full h-full text-xs"
        />
      ))}
    </div>
  );
}
