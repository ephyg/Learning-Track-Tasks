import React from "react";
interface InputFieldProps {
  type: string;
  placeholder: string;
  label: string;
  classname?: string;
  error?: string;
  name: string;
  id: string;
  register?: any;
}
const InputFIeld = ({
  type,
  placeholder,
  label,
  classname,
  error,
  id,
  name,
  register,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-epilogue font-epilogue600 text-primary">
        {label}
      </label>
      <input
        {...register(name)}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={`px-4 py-3 border-bordercolor border rounded-md outline-none focus:border-blue ${classname}`}
      />
      <p className="text-red-600 text-sm">{error}</p>
    </div>
  );
};

export default InputFIeld;
