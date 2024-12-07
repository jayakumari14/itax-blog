import Image from "next/image";

export default function OngoingProjects({ ongoingProjects }) {
  const checkImageLink = url => {
    if (url && typeof url === "string" && url.includes("/")) {
      return url;
    } else {
      return "/images/home/ongoing_projects/upcoming.avif";
    }
  };

  return (
    <div className='max-w-7xl lg:px-8 mx-auto py-20'>
      <h3 className='text-center text-slate-900 text-3xl md:text-4xl font-extrabold'>
        Ongoing Projects
      </h3>
      <ul className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-8 mt-8'>
        {ongoingProjects.map(element => (
          <>
            {element.heading && (
              <li key={element.heading}>
                <div className='max-w-xs mx-auto hover:shadow-lg hover:shadow-primary  grid grid-rows-2  rounded-lg overflow-hidden  shadow-md border'>
                  <div className='row-span-2 m-auto max-w-xs h-48 grid place-items-center overflow-hidden'>
                    <Image
                      className='object-contained'
                      alt='Projects Image'
                      width={250}
                      height={200}
                      src={checkImageLink(element.image)}
                    />
                  </div>
                  <div className='row-span-1 bg-zinc-100 flex items-center py-3 px-5'>
                    <span className='font-semibold text-sm mx-auto text-center'>
                      {element.heading}
                    </span>
                  </div>
                </div>
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
}
