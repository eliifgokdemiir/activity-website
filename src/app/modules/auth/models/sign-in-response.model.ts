export interface SignInResponseModel {
  status: boolean;
  message: string;
  email: string;
  data: {
    user: {
      username?: string;
      roles?: string[];
    };
    access_token: string;
  }
}