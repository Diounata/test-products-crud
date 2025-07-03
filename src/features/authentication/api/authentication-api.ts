import {
  SignInRequestBody,
  SignInResponseData,
  SignUpRequestBody,
  SignUpResponseData,
} from "./authentication-api-types";

import { axiosClient } from "@/lib/axios/axios-client";

export class AuthenticationApi {
  static async signIn(body: SignInRequestBody) {
    return await axiosClient.post<SignInResponseData>("/auth/login", body);
  }

  static async signUp(body: SignUpRequestBody) {
    return await axiosClient.post<SignUpResponseData>("/users", body);
  }
}
