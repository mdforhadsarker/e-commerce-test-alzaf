export interface Category {
    id: number;
    title: string;
    parent_id: number | null;
    category_id: number;
    icon?: string;
    link: string;
    childrens?: Category[];
  }
  
  export const fetchCategories = async (): Promise<Category[]> => {
    const res = await fetch(
      "https://api.shope.com.bd/api/v1/public/hero-categories",
      {
        cache: "no-store",
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
  
    return res.json();
  };
  