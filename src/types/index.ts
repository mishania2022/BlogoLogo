export type InputValues = {
  id: number;
  title: string;
  imageUrl: string;
  publishedAt: string;
};

export interface IArticle {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: { id: string; provider: string }[];
  events: { id: string; provider: string }[];
}

export interface IBlog {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  launches: { id: string; provider: string }[];
  events: { id: string; provider: string }[];
}