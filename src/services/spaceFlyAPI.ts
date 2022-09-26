import axios from "axios";
import { IArticle, IBlog } from "../types";

enum Endpoint {
  ARTICLES_COUNT = "articles/count",
  ARTICLES = "articles",
  ARTICLES_ID = "articles/{id}",
  BLOGS_COUNT = "blogs/count",
  BLOGS = "blogs",
  BLOGS_ID = "blogs/{id}",
}

class SpaceFlyAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly ARTICLE_API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const { data } = await this.ARTICLE_API.get<IArticle[]>(Endpoint.ARTICLES + "?_limit=12");

    return data;
  }

  public async getArticleDetailsById(id: string = "") {
    const { data } = await this.ARTICLE_API.get<IArticle>(`articles/${id}`);

    return data;
  }

  private readonly BLOG_API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllBlogs() {
    const { data } = await this.BLOG_API.get<IBlog[]>(Endpoint.BLOGS + "?_limit=12&_start=9");

    return data;
  }
  public async getDetailsById(id: string = "") {
    const { data } = await this.BLOG_API.get<IBlog>(`blogs/${id}`);

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
