type ID = string //alias for the type string, used in Product as id (custom types)

export interface Product {
    id: ID,
    name: string,
    price: string
    // example?: string --> PUTTING '?' BEFORE THE ':' MAKES THE PROPERTY OPTIONAL
    // getProductName(): string --> function that returns a string as a part of the interface
}

export interface UserInterface {
    email: string,
    token: string,
    username: string
}

export interface ArticleInterface {
    title: string | null, // these are called unions
    description: string | null,
    body: string | null
}

export interface ArticleResponse {
    articles: Article[],
    articlesCount: Number
}

export interface Author {
    username: string;
    bio: string | null;
    image: string;
    following: boolean;
}

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
}