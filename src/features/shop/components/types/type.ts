export type SelectedProductsProps = {
  title: string;
  subtitle: string;
  imageSrc: string;
  category: string;
  isTall?: boolean;
};

export type ProductDisplayProps = {
  title: string;
  sub: string;
};

export type ProductDetails = {
  imgSrc: string;
  title: string;
  sub: string;
  category: string;
  price: string;
};

export type ProductCardProps = {
  details: ProductDetails;
};