import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Pagination,
} from "@mui/material";

import productImage from "../../../assets/img/avatar1.jpg";

function FavoriteProduct() {
  return (
    <Box>
      <Typography variant="h6">Danh sách yêu thích</Typography>
      <Stack sx={{ backgroundColor: "white", padding: "1rem" }}>
        <Card sx={{ border: "0px solid black", maxWidth: "13rem" }}>
          <CardMedia component="img" image={productImage} height="200" />

          <CardContent sx={{ padding: "5px 0 0 0" }}>
            <Typography variant="caption" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit...
            </Typography>
          </CardContent>

          <CardActions></CardActions>
        </Card>
      </Stack>

      <Pagination count={10} page={1} />
    </Box>
  );
}

export default FavoriteProduct;
