export default function DashSection(props) {
  const { title = '', titleRight = '', className = '', children = '' } = props;

  return (
    <section
      className={`${className} shadow-sm border rounded-xl shadow-blue-200 my-5 mx-auto md:w-[calc(100%-3rem)] w-[calc(100%-1rem)] py-4`}
    >
      <div className="capitalize flex justify-between flex-wrap items-center">
        <h2 className="px-4 border-l-4 border-l-blue-500 text-neutral-700 text-2xl leading-10 font-medium">
          {title}
        </h2>
        <div className="px-3 text-neutral-500 font-semibold">{titleRight}</div>
      </div>
      {children}
    </section>
  );
}
