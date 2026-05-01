import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div>
      {products.map(p => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
}

export default Home;