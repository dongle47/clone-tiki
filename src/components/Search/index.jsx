import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import { addItem, removeItem } from "../../slices/searchSlice";

function Search(props) {
  const dispatch = useDispatch();

  const [expandSearch, setExpandSearch] = useState(false);

  const handleRemoveSearch = (data) => {
    dispatch(removeItem(data));
  };

  const SearchedItemsHalf = props.searchedItems
    .slice(0, 5)
    .map((item) => (
      <SearchedItem
        setSearchText={props.setSearchText}
        text={item}
        handleRemoveSearch={handleRemoveSearch}
      />
    ));

  const SearchedItemsFull = props.searchedItems
    .slice(0, 10)
    .map((item) => (
      <SearchedItem
        setSearchText={props.setSearchText}
        text={item}
        handleRemoveSearch={handleRemoveSearch}
      />
    ));

  const SuggestItemsHalf = props.suggestions
    .slice(0, 5)
    .map((item) => (
      <SuggestItem setSearchText={props.setSearchText} text={item} />
    ));

  const SuggestItemsFull = props.suggestions
    .slice(0, 10)
    .map((item) => (
      <SuggestItem setSearchText={props.setSearchText} text={item} />
    ));

  return (
    <Stack
      sx={{ borderTop: "1px solid silver", paddingTop: "0.8rem", px: "1rem" }}
      id="input-search-result"
      className="header-search__result"
    >
      {expandSearch
        ? props.searchText === ""
          ? SearchedItemsFull
          : SuggestItemsFull
        : props.searchText === ""
        ? SearchedItemsHalf
        : SuggestItemsHalf}

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
          {props.trendingSearch.map((item) => (
            <TrendingItem item={item} />
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

function SearchedItem(props) {
  return (
    <Stack
      className="item-search"
      sx={{ height: "2.5rem" }}
      direction="row"
      spacing={2}
      alignItems="center"
    >
      <HistoryIcon fontSize="medium" sx={{ color: "silver" }} />

      <Typography
        onClick={() => props.setSearchText(props.text)}
        variant="subtitle2"
        sx={{ fontSize: "0.8rem", fontWeight: 500, flex: 1 }}
      >
        {props.text}
      </Typography>

      <IconButton onClick={() => props.handleRemoveSearch(props.text)}>
        <ClearIcon sx={{ color: "silver" }}></ClearIcon>
      </IconButton>
    </Stack>
  );
}

function SuggestItem(props) {
  return (
    <Stack
      className="item-search"
      sx={{ height: "2.5rem" }}
      direction="row"
      spacing={2}
      alignItems="center"
      onClick={() => props.setSearchText(props.text)}
    >
      <SearchIcon fontSize="medium" sx={{ color: "silver" }} />

      <Typography
        variant="subtitle2"
        sx={{ fontSize: "0.8rem", fontWeight: 500, flex: 1 }}
      >
        {props.text}
      </Typography>
    </Stack>
  );
}

function TrendingItem(props) {
  return (
    <Grid key={props.item.id} item xs={4}>
      <Stack direction="row" spacing={1}>
        <img alt="" src={props.item.imgUrl} width="38px" height="38px"></img>

        <Typography my={0.5} sx={{ fontSize: "12px" }}>
          {props.item.name.slice(0, 20) + "..."}
        </Typography>
      </Stack>
    </Grid>
  );
}
