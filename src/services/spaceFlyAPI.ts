import axios from "axios";
import { IArticle, IBlog } from "../types";

enum Endpoint {
  ARTICLES_COUNT = "articles/count",
  ARTICLES = "articles",
  ARTICLES_ID = "articles/{id}",
  BLOGS_COUNT = "blogs/count",
  BLOGS = "blogs",
  BLOGS_ID = "blogs/{id}",
  ARTICLES_LIMIT = "articles?_limit=12",
  BLOGS_LIMIT = "blogs?_limit=12",
}

class SpaceFlyAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly ARTICLE_API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const { data } = await this.ARTICLE_API.get<IArticle[]>(Endpoint.ARTICLES_LIMIT);

    return data;
  }

  public async getArticleDetailsById(id: string = "") {
    const { data } = await this.ARTICLE_API.get<IArticle>(`articles/${id}`);

    return data;
  }

  public async getSearchArticles(word: string) {
    const params = {
      title_contains: word,
    };
    // eslint-disable-next-line max-len
    const { data } = await this.ARTICLE_API.get<IArticle[]>(Endpoint.ARTICLES_LIMIT, { params });

    return data;
  }

  public async getSortArticles(sort: string | null) {
    // eslint-disable-next-line max-len
    const { data } = await this.ARTICLE_API.get<IArticle[]>(Endpoint.ARTICLES + `${sort}`);

    return data;
  }

  private readonly BLOG_API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllBlogs() {
    const { data } = await this.BLOG_API.get<IBlog[]>(Endpoint.BLOGS_LIMIT);

    return data;
  }
  public async getDetailsById(id: string = "") {
    const { data } = await this.BLOG_API.get<IBlog>(`blogs/${id}`);

    return data;
  }
  public async getSearchBlogs(word: string) {
    const params = {
      title_contains: word,
    };
    // eslint-disable-next-line max-len
    const { data } = await this.BLOG_API.get<IBlog[]>(Endpoint.BLOGS_LIMIT, { params });

    return data;
  }

  public async getSortBlogs(sort: string | null) {
    // eslint-disable-next-line max-len
    const { data } = await this.BLOG_API.get<IBlog[]>(Endpoint.BLOGS + `${sort}`);

    return data;
  }

  public async getArticlesByPage(page: number) {
    const params = {
      _start: page,
    };

    const { data } = await this.ARTICLE_API.get<IArticle[]>(Endpoint.ARTICLES_LIMIT, { params });

    return data;
  }

  public async getSortArticlesByPage(page: number) {
    const params = {
      _start: page,
    };

    const { data } = await this.ARTICLE_API.get<IArticle[]>(Endpoint.ARTICLES_LIMIT, { params });

    return data;
  }

  public async getSortBlogsByPage(page: number) {
    const params = {
      _start: page,
    };

    const { data } = await this.BLOG_API.get<IBlog[]>(Endpoint.BLOGS_LIMIT, { params });

    return data;
  }

  public async getBlogsByPage(page: number) {
    const params = {
      _start: page,
    };

    const { data } = await this.BLOG_API.get<IBlog[]>(Endpoint.BLOGS_LIMIT, { params });

    return data;
  }
}

export const spaceFlyAPI = new SpaceFlyAPI();
