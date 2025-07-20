export interface LoginFormData {
  id: string;
  password: string;
  rememberId: boolean;
  autoLogin: boolean;
}

export interface SignupFormData {
  name: string;
  id: string;
  password: string;
  confirmPassword: string;
  studentId: string;
}
