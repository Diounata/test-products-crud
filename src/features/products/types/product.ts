export interface Product {
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
}
