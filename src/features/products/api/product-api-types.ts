export interface ListProductsResponseData {
  id: string;
  title: string;
  description: string;
  status: boolean;
  updatedAt: string;
  createdAt: string;
}

export interface GetProductResponseData {
  data: {
    id: string;
    userId: string;
    title: string;
    description: string;
    status: boolean;
    idThumbnail: string;
    createdAt: string;
    updatedAt: string;
    thumbnail: {
      id: string;
      url: string;
      size: number;
      originalName: string;
      mimeType: string;
      key: string;
      userId: string;
      idModule: any;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface CreateProductRequestBody {
  title: string;
  description: string;
  thumbnail: File;
}

export interface EditProductRequestBody {
  productId: string;
  title: string;
  description: string;
}

export interface EditProductThumbnailRequestBody {
  productId: string;
  thumbnail: File;
}
