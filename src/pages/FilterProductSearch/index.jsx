import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import {
  Stack,
  Box,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Grid,
  Rating,
  Tab,
  RadioGroup,
  Tabs,
  Radio,
} from "@mui/material";
import "./FilterProductSearch.scss";
import StarIcon from "@mui/icons-material/Star";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { numWithCommas } from "../../constraints/Util";
import CardProduct from "../../components/CardProduct";
import apiProduct from "../../apis/apiProduct";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function FilterProductSearch(props) {
  const { register, watch } = useForm();
  const navigate = useNavigate();

  const slug = useParams().slug;

  const [value, setValue] = useState(0);

  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);

  const [filter, setFilter] = useState({});

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isApplyPrice, setIsApplyPrice] = useState(false);

  //   const [filterPrice, setFilterPrice] = useState({
  //     minPrice: 0,
  //     maxPrice: 100000000,
  //     option: -1,
  //     apply: false,
  //   });

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [rating, setRating] = useState(0);

  const size = 30;

  useEffect(() => {
    var querySearch = "";
    const getData = async () => {
      console.log(minPrice);
      console.log(maxPrice);
      if (rating === 0) {
        if (!isApplyPrice) {
          querySearch = `?q=${slug}`;
        } else {
          querySearch = `?q=${slug}&price_gte=${minPrice}&price_lte=${maxPrice}`;
        }
      } else {
        if (minPrice === 0 && maxPrice === 0) {
          querySearch = `?q=${slug}&rate=${rating}`;
        } else {
          querySearch = `?q=${slug}&rate=${rating}&price_gte=${minPrice}&price_lte=${maxPrice}`;
        }
      }

      apiProduct
        .getProductsBySearch(querySearch)
        .then((res) => {
          console.log("search slug: ", res);
          setFilteredProducts(res);
        })
        .catch((error) => {
          setFilteredProducts(null);
          console.log(error);
        });
    };
    getData();
  }, [slug, rating, isApplyPrice]);

  const handleApplyPrice = () => {
    // setIsApplyPrice((prev) => !prev);
    // console.log(isApplyPrice);
    // if (isApplyPrice) {
    //   setMinPrice((prev) => (prev = watch("minPrice")));
    //   setMaxPrice((prev) => (prev = watch("maxPrice")));
    // } else {
    //   setMinPrice(0);
    //   setMaxPrice(0);
    // }
    if (!isApplyPrice) {
      setIsApplyPrice(true);
    } else {
      setMinPrice(0);
      setMaxPrice(0);
      setIsApplyPrice(false);
    }
  };

  //   useEffect(() => {
  //     const getData = async () => {
  //       let params = {
  //         page: 1,
  //         limit: 20,
  //         searchText: slug,
  //       };
  //       const res = await apiProduct.getProductsBySearch(params);
  //       if (res) {
  //         console.log(res);
  //         setFilteredProducts(res.data);
  //       }
  //     };
  //     getData();
  //   }, [page, slug]);

  // useEffect(() => {
  //     const filterData = () => {
  //         if (!category)
  //             return
  //         let data = [...products]
  //         if (filter.rate)
  //             data = data.filter(item => item.rate >= filter.rate)

  //         let data1 = [...data]
  //         let data2 = [...data]
  //         category.properties.forEach(item => {
  //             data1 = data1.filter(product => {
  //                 if (!filter[item.name] || filter[item.name].length === 0)
  //                     return true
  //                 let option = product.details.options.find(option => option.name === item.name)
  //                 if (option) {
  //                     return option.values.some(item2 => filter[item.name].includes(item2.value))
  //                 }
  //                 return false
  //             })

  //             data2 = data2.filter(product => {
  //                 if (!filter[item.name] || filter[item.name].length === 0)
  //                     return true
  //                 let specification = product.details.specifications.find(spec => spec.name === item.name)
  //                 if (specification) {
  //                     return filter[item.name].includes(specification.value)
  //                 }
  //                 return false
  //             })
  //         })

  //         data = [...data1,...data2]
  //         data = data.filter((item,index)=>data.indexOf(item)===index)

  //         if (filterPrice.apply) {
  //             data = data.filter(item => item.price * (1 - item.discount / 100) > filterPrice.minPrice
  //                 && item.price * (1 - item.discount / 100) < filterPrice.maxPrice)

  //         }
  //         switch (value) {
  //             case 1: {
  //                 data.sort((a, b) => b.sold - a.sold)
  //                 break
  //             }
  //             case 2: {
  //                 break
  //             }
  //             case 3: {
  //                 data.sort((a, b) => a.price * (1 - a.discount / 100) - b.price * (1 - b.discount / 100))
  //                 break
  //             }
  //             case 4: {
  //                 data.sort((a, b) => b.price * (1 - b.discount / 100) - a.price * (1 - a.discount / 100))
  //                 break
  //             }
  //             default: {
  //                 break
  //             }
  //         }
  //         setProductFilter(data)
  //     }
  //     filterData()
  // }, [products, filter, filterPrice, value])

  const onChangeMinPrice = (e) => {
    setMinPrice(e.target.value);
  };

  const onChangeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  //   const onChangeMaxPrice = (e) => {
  //     let value = Number(e.target.value);

  //     if (Number.isInteger(value) && value >= 0) {
  //       setFilterPrice({ ...filterPrice, maxPrice: value, option: -1 });
  //     } else {
  //       setFilterPrice({ ...filterPrice, maxPrice: 1000000000, option: -1 });
  //     }
  //   };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeRating = (rate) => {
    setFilter({ ...filter, rate });
  };

  //   const handleApplyFilterPrice = () => {
  //     setFilterPrice((pre) => {
  //       return { ...pre, apply: !pre.apply };
  //     });
  //   };

  return (
    <Stack className="filterProduct container" direction="row" spacing={1}>
      <Stack className="filterProduct__sidebar" direction="column">
        <Box className="filterProduct__form">
          <Typography className="filterProduct__title">Đánh giá</Typography>

          <FormGroup>
            {[5, 4, 3].map((item) => (
              <Box
                key={item}
                onClick={() => setRating(item)}
                className="filterProduct__rating"
              >
                <Rating
                  name="hover-feedback"
                  value={item}
                  readOnly
                  icon={<StarIcon sx={{ fontSize: 16 }} />}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} sx={{ fontSize: 16 }} />
                  }
                />
                <Box fontSize="13px">{`từ ${item} sao`}</Box>
              </Box>
            ))}
          </FormGroup>
        </Box>

        <Box className="filterProduct__form">
          <Typography className="filterProduct__title">Giá</Typography>

          <Typography sx={{ fontSize: "13px", fontWeight: 400, color: "#888" }}>
            Chọn khoảng giá
          </Typography>
          <Box className="filterPrice__groupInput">
            <input
              type="text"
              value={minPrice}
              onChange={onChangeMinPrice}
            ></input>
            <span>-</span>
            <input
              type="text"
              value={maxPrice}
              onChange={onChangeMaxPrice}
            ></input>
          </Box>

          <Button
            onClick={handleApplyPrice}
            variant="outlined"
            sx={{ width: "100px", height: "26px", fontWeight: 400 }}
          >
            {isApplyPrice ? "Huỷ" : "Áp dụng"}
          </Button>
        </Box>
      </Stack>

      <Box sx={{ flex: 1 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
            aria-label="basic tabs example"
          >
            {tabs.map((item) => (
              <Tab
                key={item.id}
                label={item.name}
                sx={{
                  fontSize: "12px",
                  textTransform: "none",
                  fontWeight: "500",
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Box>
          <Grid container spacing={2}>
            {filteredProducts.map((item) => (
              <Grid key={item.id} item xs={3}>
                <CardProduct data={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Stack>
  );
}

const tabs = [
  {
    id: 1,
    name: "Phổ biến",
  },
  {
    id: 2,
    name: "Bán chạy",
  },
  {
    id: 3,
    name: "Hàng mới",
  },
  {
    id: 4,
    name: "Giá thấp",
  },
  {
    id: 5,
    name: "Giá cao",
  },
];

export default FilterProductSearch;
