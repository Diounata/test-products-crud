import {
  SignInRequestBody,
  SignInResponseData,
} from "./authentication-api-types";

import { axiosClient } from "@/lib/axios/axios-client";

export class AuthenticationApi {
  static async signIn(body: SignInRequestBody) {
    return await axiosClient.post<SignInResponseData>("/auth/login", body);
  }
}
