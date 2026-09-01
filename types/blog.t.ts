export type Blog = {
  id: string;
  title: string;
  body: string;
  author: string;
  created_at: string;
  updated_at: string;
};

export type BlogMeta = {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
};

export type BlogApiResponse = {
  success: boolean;
  data: Blog[];
  meta: BlogMeta;
  correlation_id: string;
  timestamp: string;
};

export type BlogSingleApiResponse = {
  success: boolean;
  data: Blog;
  correlation_id: string;
  timestamp: string;
};

export type BlogErrorResponse = {
  success: false;
  error: string;
  correlation_id?: string;
};
