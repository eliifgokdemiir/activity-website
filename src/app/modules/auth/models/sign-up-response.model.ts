export interface SignUpResponseModel {
  status: boolean;
  message: string;
  data?: {
    access_token: string;
    user: {
      id: string;
      username: string;
      email: string;
      name: string;
      surname: string;
      age: number;
      phoneNumber: string;
    }
  };
}