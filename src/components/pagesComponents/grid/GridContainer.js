
export default function GridContainer(props) {
  const { children, className } = props;
  return (
    <ul
      {...props}
      className={`
                  grid 
                  grid-cols-1 
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4 
                  gap-4
                  ${className}
                `}
    >
      {children}
    </ul>
  );
}
