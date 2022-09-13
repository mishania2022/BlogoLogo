export type InputValues = {
    title: string;
    imageUrl: string;
    publishedAt: string;
  } ;
  
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
    launches: [];
    events: [];
  }