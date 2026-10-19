"use client";

import { useSession, signOut } from "@/lib/auth-client";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function AuthButtons() {
  const { data } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackURL: "/" });
    toast.success("Logged out successfully");
    router.refresh();
  };

  if (data?.user) {
    return (
      <div className="dropdown dropdown-end">
        <div className="cursor-pointer">
          {data.user.image ? (
            <img
              src={data.user.image}
              alt="Profile"
              className="w-9 h-9 rounded-full border-2 border-red-600 object-cover sm:w-10 sm:h-10"
              tabIndex={0}
            />
          ) : (
            <div
              className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm sm:text-xs"
              tabIndex={0}
            >
              {data.user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}
        </div>
        <ul className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              {data.user.name}
              <span className="badge badge-outline badge-secondary">
                {data.user.email?.split("@")[0]}
              </span>
            </a>
          </li>
          <li><a className="justify-between">প্রোফাইল</a></li>
          <li><hr /></li>
          <li>
            <a
              onClick={handleLogout}
              className="justify-between text-red-600 font-semibold hover:bg-red-50 rounded-lg"
            >
              লগআউট
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div className="cursor-pointer">
        <button className="btn btn-sm btn-ghost rounded-full">
          অ্যাকাউন্ট
        </button>
      </div>
      <ul className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link
            href="/signin"
            className="justify-between flex w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            সাইন ইন
          </Link>
        </li>
        <li>
          <Link
            href="/signup"
            className="justify-between flex w-full px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            সাইন আপ
          </Link>
        </li>
      </ul>
    </div>
  );
}
