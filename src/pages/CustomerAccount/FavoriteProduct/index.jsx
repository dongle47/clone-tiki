import { useState, useRef, useEffect } from "react";
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
import apiMain from "../../../apis/apiMain";

function FavoriteProduct() {

  const [myFavorites, setMyFavorites] = useState([])
  const [totalPage, setTotalPage] = useState(10)
  const [page, setPage] = useState(1)
  const size = 10

  useEffect(() => {
    const getMyFavorites = async () => {
      let param = {
        _page: page,
        _limit: size,
      }
      const response = await apiMain.getMyFavorites(param)
      if (response) {
        setMyFavorites(response.data)
        setTotalPage(Math.ceil(response.pagination._totalRows / size))
      }
    }
    getMyFavorites()
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  }

  return (
    <Box>
      <Typography variant="h6">Danh sách yêu thích</Typography>
      <Stack sx={{ backgroundColor: "white", padding: "1rem" }}>
        {myFavorites.map((item) =>
          <Card sx={{ border: "0px solid black", maxWidth: "13rem" }}>
            <CardMedia component="img" image={productImage} height="200" />
            <CardContent sx={{ padding: "5px 0 0 0" }}>
              <Typography variant="caption" color="text.secondary">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit...
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        )
        }
      </Stack>
      {myFavorites.length !== 0 ? <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={totalPage} page={page} onChange={handleChange} />
      </Stack>:<></>}
    </Box>
  );
}
export default FavoriteProduct;
