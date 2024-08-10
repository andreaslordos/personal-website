import React from 'react';

const Page = ({ children }) => {
  return (
    <div className="mx-auto lg:w-1/3 w-full px-4">
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Page;