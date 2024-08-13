import React from "react";
interface VerifyInputFieldProps {
  key: number;
  classname?: string;
  name: string;
  onchange?: any;
  onFocus?: any;
  value?: number;
  register: any;
}

const VerifyInputField = ({
  classname,
  name,
  onFocus,
  onchange,
  value,
  register,
}: VerifyInputFieldProps) => {
  return (
    <div className="w-full">
      <input
        type="number"
        placeholder="0"
        name={name}
        className={`${classname} w-full py-3 border-2 text-headertext2 border-[#4944ce] rounded-lg outline-none placeholder:text-center text-center`}
        onFocus={onFocus}
        onChange={onchange}
        value={value}
        {...register(name)}
      />
    </div>
  );
};

export default VerifyInputField;
