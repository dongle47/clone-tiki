import { useState, useRef, useEffect } from "react";

import {
  Grid,
  Stack,
  Typography,
  Box,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from '@mui/icons-material/Clear';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import apiMain from "../../apis/apiMain";

function Search(props) {

  const [search, setSearch] = useState([])

  useEffect(() => {
    const getSearch = async () => {
      let param = {
        _page:"",
        _limit: "",
      }
      const response = await apiMain.getSearch(param)
      if (response) {
        setSearch(response.data)
      }
    }
    getSearch()
  }, [props.search])

  return (
    <Box id="input-search-result" px={2} className="header-search__result">
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ height: "44px" }}
    >
      <Typography>Deal Hot Từ Abbott</Typography>
      <img
        alt=""
        src="https://salt.tikicdn.com/cache/140x28/ts/banner/76/dc/6e/cdf1d2ce2de591e94dabf818db15261a.jpg.webp"
        width="140px"
        height="28px"
      ></img>
    </Stack>

    <Stack sx={{ height: "36px" }} direction="row" spacing={1}>
      <SearchIcon sx={{ fontSize: "25px" }} />
      <Typography
        sx={{ fontSize: "13px", fontweight: 500, flex: 1 }}
      >
        tai nghe Bluetooth
      </Typography>
      <ClearIcon></ClearIcon>
    </Stack>

    <Stack sx={{ height: "36px" }} direction="row" spacing={1}>
      <SearchIcon sx={{ fontSize: "25px" }} />
      <Typography
        sx={{ fontSize: "13px", fontweight: 500, flex: 1 }}
      >
        Iphone 13
      </Typography>
      <ClearIcon></ClearIcon>
    </Stack>

    <Stack
      sx={{ height: "36px" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Typography sx={{ fontSize: "16px", color: "#0D5CB6" }}>
        Xem thêm
      </Typography>
      <KeyboardArrowDownIcon />
    </Stack>

    <Box pt={1} pb={1.5}>
      <Stack sx={{ height: "24px" }} direction="row" mb={1}>
        <img
          alt=""
          src="https://salt.tikicdn.com/ts/upload/4f/03/a0/2455cd7c0f3aef0c4fd58aa7ff93545a.png"
          width="24px"
          height="24px"
        ></img>
        <Typography>Tìm kiếm phổ biến</Typography>
      </Stack>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Grid key={number} item xs={4}>
            <Stack direction="row">
              <img
                alt=""
                src="https://salt.tikicdn.com/cache/280x280/ts/product/4e/51/a9/d3c765cea429477a2f1a769b39d589bc.jpg"
                width="38px"
                height="38px"
              ></img>
              <Typography my={0.5} sx={{ fontSize: "12px" }}>
                Người đua diều
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box pt={1} pb={1.5}>
      <Typography sx={{ height: "24px" }} mb={1}>
        Danh Mục Nổi Bật
      </Typography>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <Grid key={number} item xs={3}>
            <Stack justifyContent="center" alignItems="center">
              <img
                alt=""
                src="https://salt.tikicdn.com/cache/280x280/ts/product/90/55/ea/340eb77f1170e4c381c866c275138a82.jpg"
                width="64,5px"
                height="64,5px"
              ></img>
              <Typography
                my={0.5}
                sx={{ textAlign: "center", fontSize: "12px" }}
              >
                Tai nghe Bluetooth nhét tai
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
  )
}

export default Search