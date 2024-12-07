import Typewriter from "typewriter-effect";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { BTN_SIZES } from "@/components/ui/Button";

export default function Hero({ pageData }) {
  const router = useRouter();
  return (
    <div className="mx-auto max-w-7xl grid lg:grid-cols-2 items-center gap-y-8 my-28">
      <div className="lg:order-2 mx-auto">
        {/* <Video src="/ITR.mp4" /> */}
        <Image
          src="/Hero-ITR.gif"
          loading="eager"
          width={700}
          height={500}
          alt="ITR"
        />
      </div>
      <div className="lg:w-full lg:pl-16 lg:mx-0 mt-5 lg:mt-0 text-center lg:text-left">
        <h1 className="text-lg lg:text-[32px] font-bold text-slate-800 leading-snug">
          <Typewriter
            options={{
              strings: [`${pageData.upper.mainHeading}`],
              autoStart: true,
              loop: true,
              changeDeleteSpeed: 3,
            }}
          />
        </h1>
        <p className="font-semibold text-slate-800 mt-3">
          {pageData.upper.subHeading}
        </p>

        <Button
          className={`my-4 font-medium ${BTN_SIZES["xl-1"]} py-[10px]`}
          onClick={() =>
            router.push("/dashboard/itr/itr-filling/upload-form-16")
          }
        >
          {pageData.upper.button}
        </Button>
      </div>
    </div>
  );
}
