<<<<<<< HEAD
=======

>>>>>>> cc4dd7aa2951dd31891557d2bc7368bcfa374813
export async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}
<<<<<<< HEAD

=======
>>>>>>> cc4dd7aa2951dd31891557d2bc7368bcfa374813
export async function getProductById(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}