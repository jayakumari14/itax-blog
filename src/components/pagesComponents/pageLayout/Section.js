export default function Section(props) {
  const { children, className } = props;
  return (
    <section
      {...props}
      className={`
                  transition-[max-width]
                  container
                  2xl:max-w-7xl
                  bg-neutral-50
                  dark:bg-neutral-900
                  sm:px-8
                  px-2
                  mb-8
                  sm:rounded-md
                  mx-auto
                  ${className}
                `}
    >
      {children}
    </section>
  );
}
