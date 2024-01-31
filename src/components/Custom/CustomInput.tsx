// CustomInput.tsx

import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ label, ...rest }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <input
        className="appearance-none h-8 bg-transparent border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
        {...rest}
      />
    </div>
  );
};

export default CustomInput;
