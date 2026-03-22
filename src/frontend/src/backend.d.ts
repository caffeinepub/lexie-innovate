import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Article {
    title: string;
    content: string;
    slug: string;
    tags: Array<string>;
    publishedAt: Time;
    author: string;
    readTime: bigint;
    summary: string;
    imageUrl: string;
    isFeatured: boolean;
    category: string;
}
export type Time = bigint;
export interface backendInterface {
    addArticle(article: Article): Promise<void>;
    getArticle(slug: string): Promise<Article>;
    getArticlesByCategory(category: string): Promise<Array<Article>>;
    getFeaturedArticles(): Promise<Array<Article>>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
