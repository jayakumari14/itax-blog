'use client';

import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex bg-gray-200 p-1 w-fit rounded-md">
        {children.map((child, index) => (
          <div
            key={index}
            className={`cursor-pointer px-4 py-2 border rounded-md ${
              index === activeTab
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </div>
        ))}
      </div>
    </div>
  );
};

const Tab = ({ children }) => {
  return <div>{children}</div>;
};

export { Tabs, Tab };
