export default function SearchResult_section(props) {
  const { title, children } = props;

  return (
    <div className="p-4 space-y-6 min-h-screen">
      <div className="shadow-md xl:max-w-7xl mx-auto capitalize flex justify-between flex-wrap items-center">
        <h2 className="heading-3 px-4 border-l-4 border-l-blue-500 text-neutral-700 leading-10 font-medium">
          {title}
        </h2>
      </div>
      <ul className=" [&>li:nth-child(even)]:max-h-screen [&>li:nth-child(even)]:overflow-y-auto  rounded-xl shadow-md xl:max-w-7xl mx-auto grid justify-center content-center lg:grid-cols-3 gap-4">
        {children}
      </ul>
    </div>
  );
}
