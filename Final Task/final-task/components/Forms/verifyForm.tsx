"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { verify } from "@/server-actions/auth";
import { useSession } from "next-auth/react";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your OTP code must be 4 characters.",
  }),
});

const VerifyForm = (props: { email: string }) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    const code = data.pin;
    const formattedemail = props.email.split("%40").join("@");
    const email = formattedemail;
    const result = await verify({
      email: email,
      OTP: code,
    });
    // console.log(code, email, result);
    if (result.success) {
      router.push("/");
    } else {
      setErrorMessage(result.message);
    }
    setLoading(false);
  };
  const isFormValid = form.watch("pin").length === 4;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="w-full gap-11 flex flex-col">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem className="flex gap-5 flex-col">
                <p className="text-center text-red-600 text-sm">
                  {errorMessage}
                </p>

                <FormControl>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="w-full">
                      <InputOTP maxLength={4} {...field} className="w-full">
                        <InputOTPGroup className="w-full flex gap-10">
                          <InputOTPSlot
                            index={0}
                            className="flex flex-1 border-[2px] text-2xl rounded-lg border-blue  h-14"
                          />
                          <InputOTPSlot
                            index={1}
                            className="flex flex-1 border-[2px] text-2xl rounded-lg border-blue  h-14"
                          />
                          <InputOTPSlot
                            index={2}
                            className="flex flex-1 border-[2px] text-2xl rounded-lg border-blue  h-14"
                          />
                          <InputOTPSlot
                            index={3}
                            className="flex flex-1 border-[2px] text-2xl rounded-lg border-blue  h-14"
                          />
                        </InputOTPGroup>
                      </InputOTP>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-sm font-epilogue text-gray">
                        You can request to{"  "}
                        <span className="font-epilogue600 text-blue">
                          Resend Code{" "}
                        </span>
                        in
                      </p>
                      <p className="font-epilogue600 text-blue">0:30</p>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            name="Continue"
            typ="submit"
            classname={!isFormValid ? `opacity-30` : ""}
            disabled={!isFormValid}
            isLoading={loading}
            loadingText="Verifying..."
          />
        </div>
      </form>
    </Form>
  );
};

export default VerifyForm;
