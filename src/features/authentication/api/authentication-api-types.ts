export interface SignInRequestBody {
  email: string;
  password: string;
}

export interface SignInResponseData {
  token: string;
  user: {
    phone: {
      country: string;
      ddd: string;
      number: string;
    };
    avatar: { id: string; url: string }[];
    number: string;
    email: string;
    platformRole: string;
    status: string;
    name: string;
    id: string;
    emailStatus: string;
    createdAt: string;
    updatedAt: string;
    street: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    country: string;
    zip: string;
    renewalsNumber: number;
  };
}
