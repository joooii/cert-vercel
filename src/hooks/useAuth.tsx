import { LoginFormData, SignupFormData } from "@/types/login";
import { useState } from "react";

export const useAuth = () => {
  const [loginFormData, setLoginFormData] = useState<LoginFormData>({
    id: "",
    password: "",
    rememberId: false,
    autoLogin: false,
  });

  const [signupFormData, setSignupFormData] = useState<SignupFormData>({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
    studentId: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const isSamePassword =
    signupFormData.password === signupFormData.confirmPassword;

  return {
    loginFormData,
    setLoginFormData,
    signupFormData,
    setSignupFormData,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isSamePassword,
    errors,
    setErrors,
  };
};
