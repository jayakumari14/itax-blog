export const H1 = (props) => {
  const { children, className } = props;
  return (
    <h1
      {...props}
      className={`
            lg:text-6xl
            text-5xl
            
            ${className}
            ${className_H}
            `}
    >
      {children}
    </h1>
  );
};
export const H2 = (props) => {
  const { children, className } = props;
  return (
    <h2
      {...props}
      className={`
            lg:text-5xl
            text-4xl
            ${className}
            ${className_H}
            `}
    >
      {children}
    </h2>
  );
};
export const H3 = (props) => {
  const { children, className } = props;
  return (
    <h3
      {...props}
      className={`
            lg:text-4xl
            text-3xl
            
            ${className}
            ${className_H}
            `}
    >
      {children}
    </h3>
  );
};
export const H4 = (props) => {
  const { children, className } = props;
  return (
    <h4
      {...props}
      className={`
            lg:text-3xl
            text-2xl
            
            ${className}
            ${className_H}
            `}
    >
      {children}
    </h4>
  );
};
export const H5 = (props) => {
  const { children, className } = props;
  return (
    <h5
      {...props}
      className={`
            lg:text-2xl
            text-xl
            
            ${className}
            ${className_H}
            `}
    >
      {children}
    </h5>
  );
};
export const H6 = (props) => {
  const { children, className } = props;
  return (
    <h6
      {...props}
      className={`
            lg:text-xl
            text-lg
            
            ${className}
            ${className_H}
            `}
    >
      {children}
    </h6>
  );
};

const className_H = `
    transition-[max-width]
    container
    2xl:max-w-7xl

    mx-auto
    flex
    my-3
    font-bold
`;
