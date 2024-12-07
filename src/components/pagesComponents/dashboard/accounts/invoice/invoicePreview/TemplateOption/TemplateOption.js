import Image from 'next/image';

function Option(props) {
  const { data, handleTemplateChange, SelectedInvoiceTemplate } = props;
  return (
    <li
      onClick={() => handleTemplateChange(data.id)}
      className={` ${SelectedInvoiceTemplate === data.id ? 'border-4 border-blue-950/50 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3)]' : ''} relative cursor-pointer  min-h-40  min-w-32  grid place-content-center shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3)]`}
    >
      {data.image ? (
        <Image
          className="w-full"
          src={data?.image}
          alt={data?.title}
          width={100}
          height={100}
        />
      ) : (
        <div>
          <div className=" absolute top-1 right-1 text-sm">{data.title}</div>
          template
        </div>
      )}
    </li>
  );
}
export default function TemplateOption(props) {
  const { TemplatesMetaData, handleTemplateChange, SelectedInvoiceTemplate } =
    props;
  return (
    <div className="p-4 bg-neutral-50">
      <h2 className="heading-6 uppercase">customize your invoice</h2>
      <div>
        <p className="border-l-4 border-l-blue-600/50 pl-4 text-neutral-700/50 uppercase">
          select your invoice
        </p>
        <ul className="py-4 grid gap-x-4 gap-y-4 grid-cols-[repeat(auto-fill,minmax(9rem,1fr))] place-items-center">
          {TemplatesMetaData.map((template, index) => (
            <Option
              data={template}
              key={`${template.id}+${index}`}
              handleTemplateChange={handleTemplateChange}
              SelectedInvoiceTemplate={SelectedInvoiceTemplate}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
