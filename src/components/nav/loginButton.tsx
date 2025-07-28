"server-only";

import { LogIn } from "lucide-react";
import Link from "next/link";

interface LoginButtonProps {
  className?: string;
}

export default function LoginButton({ className = "" }: LoginButtonProps) {
  return (
    <Link href="/login">
      <div
        className={`px-3 ml-4 text-white flex items-center bg-cert-dark-red py-1.5 group border border-cert-dark-red rounded-md transition-all duration-300 shadow-cert-navbar hover:shadow-lg hover:bg-cert-dark-red/80 hover:border-cert-dark-red ${className}`}
      >
        <LogIn className="w-4 h-4" />
        <div className="ml-3">Login</div>
      </div>
    </Link>
  );
}
