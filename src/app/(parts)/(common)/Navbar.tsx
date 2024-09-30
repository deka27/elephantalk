import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white">
        <div className="p-8 flex justify-around">
          <div className="flex text-xl gap-8">
            <div className="font-semibold text-xl">
              <span className="flex gap-4">
                <Image
                  src="/logo.svg"
                  alt="People using Elephantalk"
                  width={30}
                  height={30}
                />
                <p>elephantalk</p>
              </span>
            </div>
            <div>Products</div>
            <div>Solutions</div>
            <div>Blog</div>
            <div>Connect</div>
          </div>
          <div className="flex text-xl gap-8">
            <div className="">
              <Link href={"/"}>Log in</Link>
            </div>
            <div className="">
              <Link href={"/"}>Sign up</Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
