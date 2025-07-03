import {
  CreateProductRequestBody,
  EditProductRequestBody,
  EditProductThumbnailRequestBody,
  GetProductResponseData,
  ListProductsResponseData,
} from "./product-api-types";

import { axiosClient } from "@/lib/axios/axios-client";
import { PaginationInput, PaginationOutput } from "@/lib/types/pagination";

export class ProductApi {
  static async listProducts(params: PaginationInput) {
    return await axiosClient.get<PaginationOutput<ListProductsResponseData>>(
      `/products?${new URLSearchParams({
        page: params.page?.toString() || "1",
        pageSize: params.pageSize?.toString() || "10",
        filter: params.filter || "",
      }).toString()}`,
    );
  }

  static async getProductById(id: string) {
    return await axiosClient.get<GetProductResponseData>(`/products/${id}`);
  }

  static async createProduct(body: CreateProductRequestBody) {
    const formData = new FormData();

    formData.append("title", body.title);
    formData.append("description", body.description);
    formData.append("thumbnail", body.thumbnail);

    return await axiosClient.post("/products", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async editProduct({ productId, ...body }: EditProductRequestBody) {
    return await axiosClient.put(`/products/${productId}`, body);
  }

  static async editProductThumbnail({
    productId,
    ...body
  }: EditProductThumbnailRequestBody) {
    const formData = new FormData();

    formData.append("thumbnail", body.thumbnail);

    return await axiosClient.patch(
      `/products/thumbnail/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
  }

  static async deleteProduct(id: string) {
    return await axiosClient.delete(`/products/${id}`);
  }
}
