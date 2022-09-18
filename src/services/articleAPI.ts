import axios from "axios";
import { IArticle } from "../types";

enum Endpoint {
  ARTICLES_COUNT = "articles/count",
  ARTICLES = "articles",
  ARTICLES_ID = "articles/{id}",
}

class ArticleAPI {
  private readonly BASE_URL = process.env.REACT_APP_ARTICLES_BASE_URL as string;
  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getAllArticles() {
    const { data } = await this.API.get<IArticle[]>(Endpoint.ARTICLES + "?_limit=12");

    return data;
  }

  public async getDetailsById(id: string = "") {
    const { data } = await this.API.get<any>(`articles/${id}`);

    return data;
  }
}

export const articleAPI = new ArticleAPI();
