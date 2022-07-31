export interface ArticleCardProps {
  image?: string;
  link: string;
  title: string;
  description: string;
  category?: string;
  author: {
    name: string;
    image: string;
  };
}
