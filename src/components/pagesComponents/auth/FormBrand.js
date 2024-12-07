import Image from 'next/image';
import { I } from '@/components/iconify/I';
import Link from 'next/link';
export default function FormBrand() {
  return (
    <div className=" mt-12 grid place-content-center gap-2 justify-center">
      <Link href="/">
      <Image
        className="w-full max-w-36 mx-auto "
        width={100}
        height={100}
        src="/logo.svg"
        alt="ItaxEasy logo"
        priority
      />
      </Link>
      <h3 className="font-bold text-2xl text-center leading-snug mt-3">
        Maximum Tax Saving For You For <br />
        <span className="font-extrabold text-4xl block mt-3">
          Your Business
        </span>
      </h3>
      <ul className="hidden lg:grid gap-2 mx-auto mt-5 font-semibold">
        <li className="flex items-center text-blue-600">
          <span className="border-2 border-current p-1">
            <I icon="line-md:check-all" />
          </span>
          <span className="ml-2">Reconciliation accurately</span>
        </li>
        <li className="flex items-center text-blue-600">
          <span className="border-2 border-current p-1">
            <I icon="line-md:check-all" />
          </span>
          <span className="ml-2">File your ITR free with us</span>
        </li>
        <li className="flex items-center text-blue-600">
          <span className="border-2 border-current p-1">
            <I icon="line-md:check-all" />
          </span>
          <span className="ml-2">On web and App</span>
        </li>
      </ul>
    </div>
  );
}
