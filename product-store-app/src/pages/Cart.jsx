import { useSelector, useDispatch } from "react-redux";
import { useContext } from "react";

import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from "@mui/material";

import { LanguageContext } from "../context/LanguageContext";

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { t } = useContext(LanguageContext);

  const { items, totalPrice, totalQuantity } = useSelector(
    (state) => state.cart
  );

  return (
    <Box p={4}>
      {/* Title */}
      <Typography variant="h4" mb={2}>
        {t("cart")}
      </Typography>

      {/* Info */}
      <Typography variant="h6">
        Total Items: {totalQuantity}
      </Typography>

      <Typography variant="h6" mb={2}>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>

      {/* Clear Cart */}
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(clearCart())}
        sx={{ mb: 4 }}
      >
        {t("clearCart")}
      </Button>

      {/* Empty Cart */}
      {items.length === 0 ? (
        <Typography variant="h6">
          Cart is empty
        </Typography>
      ) : (
        <Stack spacing={3}>
          {items.map((item) => (
            <Card
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                gap: 2,
              }}
            >
              {/* Image */}
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  width: 120,
                  height: 120,
                  objectFit: "contain",
                }}
              />

              {/* Content */}
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6">
                  {item.title}
                </Typography>

                <Typography variant="body1">
                  ${item.price}
                </Typography>

                <Typography variant="body2" mb={2}>
                  Qty: {item.quantity}
                </Typography>

                {/* Buttons */}
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => dispatch(increaseQty(item.id))}
                  >
                    +
                  </Button>

                  <Button
                    variant="contained"
                    color="warning"
                    onClick={() => dispatch(decreaseQty(item.id))}
                  >
                    -
                  </Button>

                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Box>
  );
}

export default Cart;