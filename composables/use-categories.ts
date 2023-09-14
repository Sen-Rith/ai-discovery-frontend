export default function () {
  const { $faker, $lodash } = useNuxtApp();

  const categories = useState("categories", () => {
    const categories: string[] = [];
    while (categories.length < 10) {
      const category = $lodash.capitalize($faker.company.buzzNoun());
      if (categories.includes(category)) continue;
      categories.push(category);
    }
    return categories;
  });

  const selectedCategories = useState<string[]>("selectedCategories", () => []);

  return { categories, selectedCategories };
}
