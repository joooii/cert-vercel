"use client";

import ShieldSVG from "/public/icons/shield.svg";
import LockSVG from "/public/icons/lock.svg";
import LogoSVG from "/public/icons/logo.svg";
import ProfileSVG from "/public/icons/profile.svg";
import EyeSVG from "/public/icons/eye.svg";
import { Eye, EyeOff, Fingerprint, UserPlus } from "lucide-react";
import DefaultButton from "@/components/ui/defaultButton";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    rememberMe: false,
    autoLogin: false,
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    console.log("Login attempt:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-28 pb-12 transition-colors duration-300">
      {/* 배경 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 animate-bounce opacity-20">
          <LockSVG className="w-6  stroke-cert-dark-red" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce opacity-20">
          <ShieldSVG className="w-9 stroke-cert-dark-red" />
        </div>
        <div className="absolute top-1/3 right-20 animate-bounce opacity-20">
          <EyeSVG className="w-8 text-cert-dark-red" />
        </div>
        <div className="absolute bottom-1/3 left-20 animate-bounce opacity-15 text-cert-dark-red">
          <Fingerprint className="w-8" />
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="rounded-lg text-card-foreground bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-2xl transition-colors duration-300">
          <div className="text-center space-y-4 flex flex-col p-6">
            {/* Logo and Title */}
            <div className="flex justify-center">
              <div className="relative w-16 h-16 mb-6">
                <LogoSVG className="object-contain drop-shadow-lg" />
                <div className="absolute inset-0 rounded-full blur-lg opacity-20 bg-cert-dark-red" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2 leading-none tracking-tight">
                {/* <ShieldSVG className="w-6 h-6 stroke-cert-dark-red" /> */}
                CERT-IS 로그인
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                사이버 보안 동아리 회원 전용 시스템
              </div>
            </div>
          </div>

          <div className="space-y-6 p-6 pt-0">
            <form onSubmit={handleLogin} className="space-y-4">
              {/* ID */}
              <div className="space-y-2">
                <label
                  htmlFor="id"
                  className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                >
                  <ProfileSVG className="w-4 h-4 stroke-cert-dark-red" />
                  아이디
                </label>
                <input
                  id="id"
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={formData.id}
                  onChange={(e) => handleInputChange("id", e.target.value)}
                  className="text-sm text-gray-700 h-11 border-gray-300 dark:border-gray-600 focus:border-cert-red focus:ring-cert-red/20 transition-all duration-300 flex w-full rounded-md border bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  required
                />
              </div>

              {/* 비밀번호 */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2"
                >
                  <LockSVG className="w-4 h-4 stroke-cert-dark-red" />
                  비밀번호
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    className="text-sm text-gray-700 h-11 pr-10 border-gray-300 dark:border-gray-600 focus:border-cert-red focus:ring-cert-red/20 transition-all duration-300 flex w-full rounded-md border bg-background px-3 py-2  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-0 top-0 h-11 px-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4  cursor-pointer" />
                    ) : (
                      <Eye className="w-4 h-4 cursor-pointer" />
                    )}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    // onCheckedChange={(checked) =>
                    //   handleInputChange("rememberMe", checked as boolean)
                    // }
                    onChange={(e) =>
                      handleInputChange("rememberMe", e.target.checked)
                    }
                    className="border-gray-300 dark:border-gray-600 data-[state=checked]:bg-cert-red data-[state=checked]:border-cert-red  "
                  />
                  <div
                    // htmlFor="rememberMe"
                    className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    아이디 기억하기
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="autoLogin"
                    checked={formData.autoLogin}
                    // onCheckedChange={(checked) =>
                    //   handleInputChange("autoLogin", checked as boolean)
                    // }
                    onChange={(e) =>
                      handleInputChange("autoLogin", e.target.checked)
                    }
                    className="border-gray-300 dark:border-gray-600 data-[state=checked]:bg-cert-red data-[state=checked]:border-cert-red "
                  />
                  <div
                    // htmlFor="autoLogin"
                    className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                  >
                    자동 로그인
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <DefaultButton
                type="submit"
                className="w-full h-12 bg-cert-dark-red text-white font-medium transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl hover:bg-cert-dark-red/80"
              >
                <ShieldSVG className="w-4 h-4 mr-1 stroke-white" />
                로그인
              </DefaultButton>
            </form>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                  또는
                </span>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                아직 회원이 아니신가요?
              </p>
              <Link href="/signup">
                <DefaultButton
                  variant="outline"
                  className="w-full h-11 border-cert-red/30 text-cert-red cursor-pointer hover:bg-cert-red/5 hover:border-cert-red hover:text-cert-red transition-all duration-300 bg-transparent"
                >
                  <UserPlus className="w-4 h-4 mr-1" />
                  회원가입
                </DefaultButton>
              </Link>
            </div>

            {/* Security Notice */}
            <div className="bg-cert-red/5 dark:bg-cert-red/10 border border-cert-red/20 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <Fingerprint className="w-4 h-4 text-cert-red mt-0.5 flex-shrink-0" />
                <div className="text-xs text-gray-700 dark:text-gray-300">
                  <p className="font-medium mb-1">보안 알림</p>
                  <p>
                    안전한 로그인을 위해 개인정보를 보호하고, 의심스러운 활동이
                    감지되면 즉시 관리자에게 문의하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-cert-red transition-colors duration-300"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
