export interface PaginationInput {
  page?: number;
  pageSize?: number;
  filter?: string;
}

export interface PaginationOutput<T> {
  data: T[];
  meta: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}
