import React from 'react';

const Page = ({ children }) => {
  return (
    <div className="max-w-[38rem] mx-auto px-6 pt-8 pb-24">
      <div className="content text-[1.1875rem] leading-relaxed">
        {children}
      </div>
    </div>
  );
};

export default Page;
