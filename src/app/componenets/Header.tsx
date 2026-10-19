
import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <div className="relative w-full px-8 py-5">
      {/* Logo + Title */}
      <div className="flex items-center justify-center gap-3">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={50}
          height={50}
        />

        <div>
          <h1 className="text-3xl font-bold text-red-700">
            Bangla News 24
          </h1>

          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>


{/* Top Right Buttons */}
<div className="absolute top-5 right-8 z-50 flex items-center gap-3">
  {/* Sign In Button */}
  <button className="rounded-lg border border-red-600 px-5 py-2 text-sm font-semibold text-red-600 transition-all duration-300 hover:bg-red-50 active:scale-95">
    সাইন ইন
  </button>

  {/* Sign Up Button */}
  <button className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-red-200 transition-all duration-300 hover:bg-red-700 hover:shadow-lg active:scale-95">
    সাইন আপ
  </button>
</div>


      <Navbar />
    </div>
  );
};

export default Header;
