import Image from 'next/image';

export default function Loader() {
  return (
    <Image
      loading="eager"
      width={75}
      height={75}
      src="/loading.svg"
      alt="Loading..."
    />
  );
}
