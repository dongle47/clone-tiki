/* eslint-disable jsx-a11y/alt-text */
import { useState, useRef, useEffect } from "react";
import "./MyReview.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import StoreIcon from "@mui/icons-material/Store";
import apiMain from "../../../apis/apiMain";
import Pagination from '@mui/material/Pagination';

function MyRates() {
  const [myReviews, setMyReviews] = useState([])
  const [totalPage, setTotalPage] = useState(10)
  const [page, setPage] = useState(1)
  const size = 5

  useEffect(() => {
    const getMyReviews = async () => {
      let param = {
        _page: page,
        _limit: size
      }
      const response = await apiMain.getMyReviews(param)
      if (response) {
        setMyReviews(response.data)
        setTotalPage(Math.ceil(response.pagination._totalRows/size))
      }
    }
    getMyReviews()
  }, [page])

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Box>
      <Typography variant="h6" sx={{ margin: "20px 0px 15px" }}>
        Nhận xét sản phẩm đã mua
      </Typography>
      <Stack flex='1' >
        {myReviews.map((item) => (
          <Stack direction="row" spacing={10} bgcolor="#ffff" p={2}
          >
            <Stack
              spacing={1} minWidth="240px" minHeight="256px"
            >
              <Stack className="myreview__avt"
                sx={{
                  backgroundImage: `url(${item.productImg})`,
                }}
              ></Stack>
              <Stack>
                <Typography sx={{ fontSize: "14px", marginBottom: "6px" }}>
                  {item.name}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <StoreIcon sx={{ fontSize: "17px", color: "#808089" }} />
                  <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                    {item.storeName}
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} jutifyContent="center">
                <Stack direction="row">
                  <Rating name="disabled" value={item.rating} disabled />
                </Stack>
                <Typography 
                  fontSize="15px" color="#242424" fontWeight="500"
                >
                  {item.subject}
                </Typography>
              </Stack>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "400", lineHeight: "20px" }}
              >
                {item.content}
              </Typography>
              <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap={'10px'}>
                {item.imgRate.map((item) => (
                  <Stack className="myreview__picture"
                    sx={{
                      backgroundImage: `url(${item})`,                      
                    }}
                  ></Stack>
                ))}
              </Stack>
              <Typography sx={{ fontSize: "13px", color: "#808089" }}>
                {item.option}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Stack spacing={2}>
        <Typography>Page: {page}</Typography>
        <Pagination count={totalPage} page={page} onChange={handleChange} />
      </Stack>
    </Box>
  );
}

export default MyRates;
