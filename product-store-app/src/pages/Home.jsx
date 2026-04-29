import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsAPI";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import SearchIcon from "@mui/icons-material/Search";


import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  TextField,
  InputAdornment,
  CircularProgress,
} from "@mui/material";

function Home() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // Loading
  if (isLoading) {
    return (
      <Box textAlign="center" mt={5}>
        <CircularProgress />
        <Typography mt={2}>Loading products...</Typography>
      </Box>
    );
  }

  // Error
  if (error) {
    return (
      <Typography p={3} color="error">
        Something went wrong!
      </Typography>
    );
  }

  // Filter products
  const filteredProducts = data?.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
         Products
      </Typography>

      {/* Search */}
      <TextField
        fullWidth
        label="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 3 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Grid container spacing={3} alignItems="stretch">
        {filteredProducts?.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  height: 220,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>

              {/* Content */}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    height: 48,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    fontWeight: 600,
                  }}
                >
                  {product.title}
                </Typography>

                <Typography color="primary" mt={1} fontWeight="bold">
                  ${product.price}
                </Typography>
              </CardContent>

              {/* Button */}
              <Box p={2}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => dispatch(addToCart(product))}
                >
                  Add to Cart
                </Button>
              </Box>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;