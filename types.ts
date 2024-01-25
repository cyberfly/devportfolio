import { Metadata } from "next";

export type Article = {
  slug: string;
  metadata: Metadata & {
    slug: string;
    title: string;
    categories?: string[];
    date?: string;
    image?: string;
  };
  component: any;
  readingTime: string;
};

export type Project = {
  slug: string;
  metadata: Metadata & {
    title: string;
    slug: string;
    tags: string[];
    date?: string;
    image?: string;
  };
  component: any;
};
