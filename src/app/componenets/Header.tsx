
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    timeZone: "Asia/Dhaka",
    dateStyle: "full",
  });

  return (
    <div className="relative w-full px-4 sm:px-8 py-5">
      {/* Logo + Title */}
      <div className="flex items-center justify-center gap-3 mb-4 sm:mb-0">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={20}
          height={20}
          className="sm:w-20 sm:h-20"
        />

        <div>
          <h1 className="text-l sm:text-l font-bold text-red-700">
            পলিথিন রাকিবের সংবাদ
          </h1>

          <p className="text-xs sm:text-sm text-gray-500">{date}</p>
        </div>
      </div>


      <div className="absolute top-4 right-4 sm:top-5 sm:right-8 z-50 flex items-center gap-2 sm:gap-3">
        <AuthButtons />
      </div>


      <Navbar />
    </div>
  );
};

export default Header;
