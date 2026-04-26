import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/productsAPI";
function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });
  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading product</h2>;
  return (
    <div style={{ padding: "20px" }}>
      {" "}
      <h1>{data.title}</h1>{" "}
      <img src={data.image} alt={data.title} style={{ width: "200px" }} />{" "}
      <p>{data.description}</p> <h3>${data.price}</h3>{" "}
    </div>
  );
}
export default ProductDetails;
