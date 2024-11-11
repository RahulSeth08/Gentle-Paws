import React from 'react';

export function Button({ className, children, onClick }){
  return (
    <button
      className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};


