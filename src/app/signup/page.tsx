"use client";

import ShieldSVG from "/public/icons/shield.svg";
import LockSVG from "/public/icons/lock.svg";
import LogoSVG from "/public/icons/logo.svg";
import ProfileSVG from "/public/icons/profile.svg";
import EyeSVG from "/public/icons/eye.svg";
import { Eye, EyeOff, Fingerprint, Mail } from "lucide-react";
import DefaultButton from "@/components/ui/defaultButton";
import { useState } from "react";
import Link from "next/link";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "올바른 이메일 형식을 입력해주세요.";
    }

    if (!formData.password) {
      newErrors.password = "비밀번호를 입력해주세요.";
    } else if (formData.password.length < 8) {
      newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호 확인을 입력해주세요.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "비밀번호가 일치하지 않습니다.";
    }

    if (!formData.studentId.trim()) {
      newErrors.studentId = "학번을 입력해주세요.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("회원가입");
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
          <div className="max-w-md w-full space-y-8 ">
            <div className="text-center space-y-4 flex flex-col pt-6 mb-0">
              {/* Logo and Title */}
              <div className="flex justify-center">
                <div className="relative w-16 h-16 mb-6">
                  <LogoSVG className="object-contain drop-shadow-lg" />
                  <div className="absolute inset-0 rounded-full blur-lg opacity-20 bg-cert-dark-red" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2 leading-none tracking-tight">
                  CERT-IS 회원가입
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  CERT-IS에 오신 것을 환영합니다!
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold text-gray-700">
                  계정 생성
                </div>
                <div className="text-sm text-muted-foreground">
                  아래 정보를 입력하여 새 계정을 만드세요
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-4 p-6 pt-0">
                  {/* {errors.general && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )} */}

                  <div className="space-y-2">
                    <label htmlFor="name" className="font-medium text-gray-700">
                      이름
                    </label>
                    <div className="relative mt-2">
                      <ProfileSVG className="absolute left-3 top-3 h-4 w-4 stroke-gray-400" />
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`text-sm text-gray-700 pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.name ? "border-red-500 " : ""
                        }`}
                        placeholder="홍길동"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="font-medium text-gray-700"
                    >
                      이메일
                    </label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`text-sm text-gray-700 pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                        placeholder="example@naver.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="studentId"
                      className="font-medium text-gray-700"
                    >
                      학번
                    </label>
                    <div className="relative mt-2">
                      <ProfileSVG className="absolute left-3 top-3 h-4 w-4 stroke-gray-400" />
                      <input
                        id="studentId"
                        name="studentId"
                        type="text"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        className={`text-sm text-gray-700 pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.studentId ? "border-red-500" : ""
                        }`}
                        placeholder="2024123456"
                      />
                    </div>
                    {errors.studentId && (
                      <p className="text-sm text-red-500">{errors.studentId}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="password"
                      className="font-medium text-gray-700"
                    >
                      비밀번호
                    </label>
                    <div className="relative mt-2">
                      <LockSVG className="absolute left-3 top-3 h-4 w-4 stroke-gray-400" />
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`text-sm text-gray-700 pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.password ? "border-red-500" : ""
                        }`}
                        placeholder="최소 8자 이상"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 cursor-pointer" />
                        ) : (
                          <Eye className="h-4 w-4 cursor-pointer" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-red-500">{errors.password}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="font-medium text-gray-700"
                    >
                      비밀번호 확인
                    </label>
                    <div className="relative mt-2">
                      <LockSVG className="absolute left-3 top-3 h-4 w-4 stroke-gray-400" />
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`text-sm text-gray-700 pl-10 flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                          errors.confirmPassword ? "border-red-500" : ""
                        }`}
                        placeholder="비밀번호를 다시 입력하세요"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 cursor-pointer" />
                        ) : (
                          <Eye className="h-4 w-4 cursor-pointer" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col space-y-4 items-center p-6 pt-0">
                  <DefaultButton
                    type="submit"
                    className="w-full h-12 bg-cert-dark-red text-white font-medium transition-all duration-300 shadow-lg cursor-pointer hover:shadow-xl hover:bg-cert-dark-red/80"
                    disabled={isLoading}
                  >
                    {isLoading ? "가입 중..." : "회원가입"}
                  </DefaultButton>

                  <div className="text-center text-sm">
                    <span className="text-muted-foreground">
                      이미 계정이 있으신가요?{" "}
                    </span>
                    <Link
                      href="/login"
                      className="font-medium text-cert-red hover:text-cert-red/80"
                    >
                      로그인
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <span className="text-center">
          <p className="text-xs text-muted-foreground pt-10">
            회원가입을 진행하면{" "}
            <Link href="/terms" className="underline hover:text-foreground">
              이용약관
            </Link>{" "}
            및{" "}
            <Link href="/privacy" className="underline hover:text-foreground">
              개인정보처리방침
            </Link>
            에 동의하는 것으로 간주됩니다.
          </p>
        </span>
      </div>
    </div>
  );
}
