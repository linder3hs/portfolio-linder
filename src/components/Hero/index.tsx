import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col md:h-[60vh] md:flex-row-reverse items-center justify-center md:justify-between gap-5">
      <div>
        <Image src="/profile.svg" width={200} height={200} alt="Profile" />
      </div>
      <div className="text-center md:text-left w-full md:w-[500px]">
        <h1 className="text-2xl font-bold md:text-4xl">
          Hola! soy Linder Hassinger, Software Developer
        </h1>
        <p className="mt-5">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button className="bg-[#FF6464] text-white mt-5 px-5 py-3 rounded">
          Download Resume
        </button>
      </div>
    </div>
  );
}
