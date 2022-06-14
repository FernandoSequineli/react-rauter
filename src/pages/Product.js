import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>Product ID: {id}</p>
      {error && <p>Error</p>}
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>${product.price}</p>
          <Link to={`/products/${product.id}/info`}>More Details</Link>
        </div>
      )}
    </>
  );
};

export default Product;
