import { apiGet, ApiError } from "./client";
import type { BlogApiResponse, Blog, BlogSingleApiResponse } from "@/types/blog.t";

export async function fetchBlogs(limit = 10): Promise<BlogApiResponse> {
  return apiGet<BlogApiResponse>(`/blogs?limit=${limit}`);
}

export async function fetchBlog(id: string): Promise<Blog> {
  try {
    const res = await apiGet<BlogSingleApiResponse>(`/blogs/${id}`);
    return res.data;
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) {
      const all = await apiGet<BlogApiResponse>("/blogs?limit=50");
      const blog = all.data.find((b) => b.id === id);
      if (!blog) throw new ApiError(404, "Blog not found");
      return blog;
    }
    throw err;
  }
}
