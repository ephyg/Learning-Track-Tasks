import { DevTool } from "@hookform/devtools";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./zod-schema";
interface InputsType {
  fullname: string;
  email: string;
  message: string;
}

const url = "https://66aba317636a4840d7cb6ef0.mockapi.io/contact-form";

const ContactFormZod = () => {
  const { register, control, handleSubmit, formState, setValue } =
    useForm<InputsType>({
      resolver: zodResolver(schema),
    });
  const { errors, isSubmitting } = formState;
  const [isSubmitted, setIsSubmitted] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSubmitted(false);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const onSubmit = async (data: InputsType) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setValue("fullname", "");
    setValue("email", "");
    setValue("message", "");
    setIsSubmitted(true);
  };
  return (
    <div className="flex justify-center flex-col items-center px-5 lg:px-0 text-white gap-10 min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col lg:w-2/5 w-full  px-5  lg:px-20  py-10 border rounded-xl gap-3"
      >
        <div className="flex justify-center mb-10">
          <h1 className="text-4xl text-orange-400">Contact Form</h1>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="fullname" className="text-sm ">
            FullName
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="Enter your fullname"
            className={`${
              errors.fullname?.message ? "border-red-400" : ""
            } outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10`}
            {...register("fullname")}
          />
          <p className="text-red-500 text-sm">{errors.fullname?.message}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm ">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className={`${
              errors.email?.message ? "border-red-400" : ""
            } outline-none bg-transparent border-orange-100 text-sm border px-5 rounded-lg h-10`}
            {...register("email")}
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div className="flex flex-col gap-1 mb-5">
          <label htmlFor="name" className="text-sm ">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            className={`${
              errors.message?.message ? "border-red-400" : ""
            } outline-none bg-transparent border-orange-100 text-sm border px-5 py-2 rounded-lg min-h-20 max-h-36`}
            {...register("message")}
            required
          />
          <p className="text-red-500 text-sm">{errors.message?.message}</p>
        </div>
        <button className="bg-secondary text-white px-5 py-2 rounded-lg hover:bg-[#0c3d41]">
          {isSubmitting ? (
            <div className="flex gap-3 justify-center items-center">
              <span className="rounded-full border-2 h-5 w-5 border-t-2 border-t-transparent animate-spin"></span>
              <span>Loading</span>
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      {isSubmitted && (
        <div className="fixed inset-0">
          <div className="flex justify-center items-center bg-black bg-opacity-50 w-full h-full fixed">
            <div className="bg-white p-5 rounded-lg flex gap-3 justify-center items-center flex-col h-52">
              <div className="">
                <IoIosCheckmarkCircle color="green" size={50} />
              </div>
              <h1 className="text-2xl text-center text-green-500">
                successfully submitted
              </h1>
            </div>
          </div>
        </div>
      )}

      <DevTool control={control} />
    </div>
  );
};

export default ContactFormZod;