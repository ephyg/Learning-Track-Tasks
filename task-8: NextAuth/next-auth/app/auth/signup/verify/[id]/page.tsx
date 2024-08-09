import VerifyForm from "@/components/Forms/verifyForm";
interface VerifyProps {
  params: {
    id: string;
  };
}
function Verify({ params }: VerifyProps) {
  // console.log(params.id)
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-1/3 box-border gap-11 py-10 rounded-lg border-bordercolor">
        <div className="flex flex-col gap-11 items-center justify-center">
          <h1 className="font-black text-headertext1 text-black">
            Verify Email
          </h1>
          <p className="text-gray text-justify">
            We've sent a verification code to the email address you provided. To
            complete the verification process, please enter the code here.
          </p>
        </div>
        <VerifyForm email={params.id} />
      </div>
    </div>
  );
}

export default Verify;
