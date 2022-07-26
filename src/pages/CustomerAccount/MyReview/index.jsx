/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./MyReview.scss";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import StoreIcon from "@mui/icons-material/Store";
import { myReviews } from "../../../constraints/MyReview";

function MyRates() {
  return (
    <Box>
      <Typography variant="h6" sx={{ margin: "20px 0px 15px" }}>
        Nhận xét sản phẩm đã mua
      </Typography>
      <Stack>
        {myReviews.map((item) => (
          <Stack
            direction="row"
            spacing={10}
            backgroundColor="#ffff"
            padding={2}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{ minWidth: "240px", minHeight: "256px" }}
            >
              <Stack
                sx={{
                  backgroundSize: "90%",
                  backgroundRepeat: "no-repeat",
                  border: "0.5px solid rgb(238, 238, 238)",
                  height: "80px",
                  width: "80px",
                  borderRadius: "4px",
                  backgroundImage: `url(${item.productImg})`,
                  backgroundPosition: "center center",
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
                  <Rating name="disabled" value={item.star} disabled />
                </Stack>
                <Typography
                  sx={{ fontSize: "15px", color: "#242424", fontWeight: "500" }}
                >
                  {item.subject}
                </Typography>
              </Stack>
              <Typography
                sx={{ fontSize: "13px", fontWeight: "400", lineHeight: "20px" }}
              >
                {item.content}
              </Typography>
              <Stack direction="row" spacing={1}>
                {item.linkPhoto.map((item) => (
                  <Stack
                    sx={{
                      height: "150px",
                      width: "150px",
                      borderRadius: "4px",
                      backgroundImage: `url(${item.url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
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
    </Box>
  );
}

export default MyRates;
