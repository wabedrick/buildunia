import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { useQuery } from "react-query";

type Product = {
  id: number;
  name: string;
  image_url: string;
  type: string[];
  ram: number;
  core: string;
  rom: number;
  rom_type: string;
  system_type: string;
  generation: string;
};

export const Products = () => {
  type ProductState = {
    search: string;
  };

  type ProductAction = { type: "setSearch"; payload: string };

  const { data: product } = useQuery<Product[]>(
    ["product"],
    () => fetch("./laptops.json").then((response) => response.json()),
    { initialData: [] }
  );

  const reducer = (state: ProductState, action: ProductAction) => {
    switch (action.type) {
      case "setSearch":
        return { ...state, search: action.payload };
    }
  };

  const [{ search }, dispatch] = useReducer(reducer, {
    search: "",
  });

  const setSearch = useCallback((search: string) => {
    dispatch({ type: "setSearch", payload: search });
  }, []);

  // Coding the searching functionality
  const filterProduct = useMemo(() => {
    return (
      product &&
      product
        .filter(
          (p) =>
            p.name.toLowerCase().includes(search) ||
            p.generation.toLowerCase().includes(search) ||
            p.core.toLowerCase().includes(search) ||
            p.core.toLowerCase().includes(search)
        )
        .slice(0, 20)
    );
  }, [product, search]);

  return { product: filterProduct, search, setSearch };
};

const ProductContext = createContext<ReturnType<typeof Products>>(
  {} as unknown as ReturnType<typeof Products>
);

export const useProduct = () => {
  return useContext(ProductContext);
};

export function ProductProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProductContext.Provider value={Products()}>
        {children}
      </ProductContext.Provider>
    </>
  );
}
