import React from 'react';
import Button from '../../Button';

const InwardSuppliesDetails = ({ links }) => {
  return (
    <div className="w-2/6 border">
      <ul className="flex flex-col">
        {links.map((link, i) => (
          <>
            {link.href ? (
              <li
                className="min-h-10 w-full flex gap-3 items-center px-3"
                key={`${link.href}`}
              >
                {i + 1}{' '}
                <Button
                  linkTo={`/dashboard/easy-gst-return/inward-supplies/${link.href}`}
                  title={link.label}
                  className="w-full"
                />
              </li>
            ) : (
              <li
                className="min-h-10 font-semibold w-full flex gap-3 items-center px-3"
                key={`${link.label}`}
              >
                {link.label}
              </li>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

export default InwardSuppliesDetails;
