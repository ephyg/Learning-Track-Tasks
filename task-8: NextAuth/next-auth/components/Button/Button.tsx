import React from "react";
interface ButtonProps {
  name: string;
  onClick?: () => void;
  typ: "submit" | "button";
  classname?: string;
  isLoading?: boolean;
  disabled?: boolean;
  loadingText?: string;
}

const Button = ({
  name,
  typ,
  loadingText,
  classname,
  isLoading,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type={typ}
      disabled={disabled}
      className={`flex justify-center items-center gap-3 w-full bg-[#100e44] h-12 rounded-3xl text-white font-epilogue font-epilogue700 ${classname}`}
    >
      {isLoading ? (
        <>
          <div className="h-4 w-4 rounded-full border-2 border-t-0 animate-spin border-white"></div>{" "}
          {loadingText}
        </>
      ) : (
        name
      )}
    </button>
  );
};

export default Button;
