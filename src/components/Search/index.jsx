import { useState, useRef, useEffect } from "react";

import "./Search.scss";

import apiMain from "../../apis/apiMain";

import {
  Grid,
  Stack,
  Typography,
  Box,
  IconButton,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HistoryIcon from "@mui/icons-material/History";

import { searchData } from "./../../constraints/Search";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addItem, removeItem } from "../../slices/searchSlice";

function Search(props) {
  const [searchText, setSearchText] = useState([]);

  const [expandSearch, setExpandSearch] = useState(false);

  const searchItems = useSelector((state) => state.search.items);

  const dispatch = useDispatch();

  const handleRemoveSearch = (data) => {
    dispatch(removeItem(data));
  };

  const SearchItemsFull = props.searchedItems.map((item) => (
    <SearchItem text={item} handleRemoveSearch={handleRemoveSearch} />
  ));

  const SearchItemsHalf = props.searchedItems
    .slice(0, 5)
    .map((item) => (
      <SearchItem text={item} handleRemoveSearch={handleRemoveSearch} />
    ));

  return (
    <Stack
      sx={{ borderTop: "1px solid silver", paddingTop: "0.8rem" }}
      id="input-search-result"
      className="header-search__result"
    >
      {expandSearch ? SearchItemsFull : SearchItemsHalf}

      <Button
        onClick={() => setExpandSearch((prev) => !prev)}
        variant="text"
        endIcon={
          expandSearch ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
        }
      >
        {expandSearch ? "Thu gọn" : "Xem thêm"}
      </Button>

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
    </Stack>
  );
}

export default Search;

function SearchItem(props) {
  return (
    <Stack
      className="item-search"
      sx={{ height: "2rem", padding: "1rem" }}
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <HistoryIcon fontSize="medium" sx={{ color: "silver" }} />

      <Typography
        variant="subtitle2"
        sx={{ fontSize: "0.9rem", fontWeight: 500, flex: 1 }}
      >
        {props.text}
      </Typography>

      <IconButton onClick={() => props.handleRemoveSearch(props.text)}>
        <ClearIcon sx={{ color: "silver" }}></ClearIcon>
      </IconButton>
    </Stack>
  );
}
