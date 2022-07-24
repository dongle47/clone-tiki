import {
  Box,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";

import productImage from "../../../assets/img/avatar1.jpg";


function FavoriteProduct() {
  return (
    <Box>
      <Typography>Danh sách yêu thích</Typography>
      <Stack>
        <Card sx={{ border: "0px solid black", maxWidth: "13rem" }}>
          <CardMedia component="img" image={productImage} height="200" />

          <CardContent sx={{ padding: "5px 0 0 0" }}>
            <Typography variant="caption" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit...
            </Typography>
          </CardContent>

          <CardActions>
          
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}

export default FavoriteProduct;
