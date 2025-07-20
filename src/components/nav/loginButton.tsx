"server-only";

import { LogIn } from "lucide-react";
import Link from "next/link";

export default function LoginButton() {
  return (
    <div>
      <Link href="/login">
        <div className="ml-4 text-white flex items-center px-3 bg-cert-dark-red py-1.5 group text-sm border border-[#c78d88] rounded-md transition-all duration-300 shadow-cert-navbar over:shadow-lg hover:bg-cert-dark-red/80 hover:border-cert-dark-red ">
          <LogIn className="w-4 h-4 mr-2" />
          Login
        </div>
      </Link>
    </div>
  );
}
