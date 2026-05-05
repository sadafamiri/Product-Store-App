import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../api/productsAPI";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories</p>;

  return (
    <div style={styles.wrapper}>
      {/* All Button */}
      <button
        onClick={() => setSelectedCategory("")}
        style={{
          ...styles.btn,
          background: selectedCategory === "" ? "#222" : "#eee",
          color: selectedCategory === "" ? "#fff" : "#000",
        }}
      >
        All
      </button>

      {/* Categories */}
      {data.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          style={{
            ...styles.btn,
            background: selectedCategory === cat ? "#222" : "#eee",
            color: selectedCategory === cat ? "#fff" : "#000",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  btn: {
    padding: "8px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default CategoryFilter;