import React from 'react';
import CustomButton from './CustomButton';

// NavigationLink Component
function NavigationLink({ text, icon }) {
  return (
    <a
      href="#"
      className="flex gap-1 items-center text-sm font-medium text-blue-700"
    >
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-2.5 aspect-[0.83]"
      />
      <span>{text}</span>
    </a>
  );
}

// Main NavigationBar Component
function NavigationBar() {
  const navigationItems = [
    {
      text: 'Bulk Utility',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b98f7f26fd5c3718c026f854c98b57222cce8ce547136a168de9218e78380dbd?placeholderIfAbsent=true&apiKey=24199757e3844b4fbf9f805dc968d706',
    },
    {
      text: 'CompuInvice',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b225b4d8a833730c93e03afbae792ae16dc984e5b3542b4ac63c3fb7d8fde774?placeholderIfAbsent=true&apiKey=24199757e3844b4fbf9f805dc968d706',
    },
    {
      text: 'e-way Bill',
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4f35c8bd5ad5c466420055c9cd22b1cf8a685304fe658014245b9c2e6f717c99?placeholderIfAbsent=true&apiKey=24199757e3844b4fbf9f805dc968d706',
    },
  ];

  return (
    <nav className="flex flex-col pt-1.5 pl-2.5 w-full border-2 border-solid border-stone-300 max-w-[1362px] overflow-x-auto">
      <div className="flex gap-4 items-center flex-nowrap">
        <div className="flex gap-2.5 text-base whitespace-nowrap">
          <CustomButton className="w-52">Regular Return</CustomButton>
          <CustomButton variant="secondary" textColor="black" className="w-52">
            Summary Return GSTR-38
          </CustomButton>
        </div>
        <div className="text-base text-blue-700 whitespace-nowrap ml-14">
          Aadhar verification status :-{' '}
          <span className="font-bold text-red-600">Pending</span>{' '}
          <span className="font-medium text-blue-700">(get status)</span>
        </div>
        <div className="flex gap-4 whitespace-nowrap">
          {navigationItems.map((item, index) => (
            <NavigationLink key={index} text={item.text} icon={item.icon} />
          ))}
        </div>
      </div>
      <div className="mt-2 h-px border-2 border-solid border-stone-300" />
    </nav>
  );
}

export default NavigationBar;
