import Link from 'next/link';

export default function Button({ size, linkTo, title, ...props }) {
  const sizes = {
    xs: 'px-1 py-2',
    sm: 'px-2 py-2',
    'md-1': 'px-4 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-3',
    xl: 'px-8 py-3',
    '2xl': 'px-10 py-3',
  };

  return (
    <button
      type="button"
      className={`bg-primary text-white ${sizes[size || 'md']} rounded-md focus:ring-4 focus:ring-blue-300 transition-all duration-200 disabled:cursor-not-allowed`}
      {...props}
    >
      {linkTo ? (
        <Link className="w-full h-full block" href={`${linkTo}`}>
          {title}
        </Link>
      ) : (
        title
      )}
    </button>
  );
}
