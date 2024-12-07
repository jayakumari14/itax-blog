export default function PageContainer(prop) {
  const { children, className } = prop;
  return (
    <div
      className={`
                max-w-xl
                sm:max-w-2xl
                md:max-w-3xl
                lg:max-w-4xl
                xl:max-w-5xl
                2xl:max-w-6xl

                bg-white
                text-neutral-900
                
                dark:text-neutral-50
                dark:bg-neutral-900

                
                sm:py-8
                sm:px-8

                py-4
                px-4
                
                my-8

                sm:rounded-lg
                
                mx-auto
                ${className}
            `}
    >
      {children}
    </div>
  );
}
