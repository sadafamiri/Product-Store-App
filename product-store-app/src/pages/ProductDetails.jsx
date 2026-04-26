import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";


function ProductDetails() {
  const { id } = useParams();


function ProductDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });


  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error loading product</h2>;

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6">
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* تصویر */}
        <div className="flex justify-center bg-gray-50 p-6 rounded-2xl">
          <img
            src={data.image}
            alt={data.title}
            className="h-80 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* اطلاعات */}
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 leading-snug">
            {data.title}
          </h1>

          <p className="text-gray-500 text-sm mb-6">
            Category: {data.category}
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {data.description}
          </p>

          <div className="flex items-center justify-between mb-8">
            <span className="text-3xl font-bold text-green-600">
              ${data.price}
            </span>

            <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">
              ⭐ {data.rating?.rate || 4.5}
            </span>
          </div>

          {/* دکمه‌ها */}
          <div className="flex gap-4">
            <button
              onClick={() => dispatch(addToCart(data))}
              className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Add to Cart
            </button>

            <button
              onClick={() => window.history.back()}
              className="px-5 py-3 border rounded-xl hover:bg-gray-100 transition"
            >
              Back
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>
);
  
}
}

export default ProductDetails;

