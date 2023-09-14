export default function () {
  const { $faker } = useNuxtApp();

  const { categories } = useCategories();

  const products = useState<Product[]>("products", () => {
    const products: Product[] = [];
    while (products.length < 50) {
      const product: Product = {
        id: $faker.database.mongodbObjectId() ,
        title: $faker.commerce.productName(),
        description: $faker.commerce.productDescription(),
        rating: $faker.number.float({ min: 1, max: 5 }),
        categories: $faker.helpers.arrayElements(categories.value, {
          min: 2,
          max: 4,
        }),
        imgUrl: $faker.image.urlLoremFlickr({ category: "robot" }),
      };
      products.push(product);
    }
    return products;
  });

  const selectedProduct = useState<Product | undefined>(
    "selectedProduct",
    undefined
  );

  return { selectedProduct, products };
}

export type Product = {
  id: string;
  title: string;
  description: string;
  rating: number;
  categories: string[];
  imgUrl: string;
};
