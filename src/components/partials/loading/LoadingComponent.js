import Image from 'next/image';

export default function LoadingComponent() {
  return (
    <div className="fixed h-screen w-screen bg-white flex items-center justify-center">
      <Image
        loading="eager"
        width={50}
        height={50}
        src="/loading.svg"
        alt="loading..."
        className="w-24 h-24"
      />
    </div>
  );
}
