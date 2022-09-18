import axios from "axios";
import { IBlog } from "../types";

enum Endpoint {
  BLOGS_COUNT = "blogs/count",
  BLOGS = "blogs",
  BLOGS_ID = "blogs/{id}",
}

class BlogAPI {
  private readonly BASE_URL = process.env.REACT_APP_BLOGS_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllBlogs() {
    const { data } = await this.API.get<IBlog[]>(Endpoint.BLOGS + "?_limit=12&_start=9");

    return data;
  }
  public async getDetailsById(id: string = "") {
    const { data } = await this.API.get<any>(`blogs/${id}`);

    return data;
  }
}

export const blogAPI = new BlogAPI();
