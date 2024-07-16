import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full max-h-screen items-center">
      <div className="w-full min-h-screen flex justify-center items-center bg-white">
        <img src="/bg.png" alt="under construction" className="max-h-screen w-full object-contain"></img>
      </div>
    </main>
  );
}
