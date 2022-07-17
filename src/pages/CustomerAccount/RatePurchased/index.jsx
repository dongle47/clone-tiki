import {
  Box,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import productImage from "../../../assets/img/avatar1.jpg";

function RatePurchased() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "50rem",
      }}
    >
      <Typography gutterBottom variant="h6">Nhận xét sản phẩm đã mua</Typography>

      <Stack sx={{ padding: "1rem", backgroundColor: "white" }} direction="row">
        <Card sx={{ border: "0px solid black", maxWidth: "13rem" }}>
          <CardMedia component="img" image={productImage} height="200" />

          <CardContent sx={{ padding: "5px 0 0 0" }}>
            <Typography variant="caption" color="text.secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit...
            </Typography>
          </CardContent>

          <CardActions>
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              size="small"
              color="primary"
            >
              Viết nhận xét
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Box>
  );
}

export default RatePurchased;
