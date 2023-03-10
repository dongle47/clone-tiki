import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import "./OrderItem.scss";
import { orderTabs } from "../../constraints/OrderItem";
import { numWithCommas } from "../../constraints/Util";
import { Link } from "react-router-dom";
function OrderItem(props) {
  const { order } = props;
  const state = getState(order.type);
  return (
    <Box className="orderItem">
      <Stack direction='row' className="orderItem__heading">
        {state?.icon && <>
        <state.icon/> <Typography>{order.type.name}</Typography>
        </>}

        <Typography
          component="span"
          variant="h3"
          fontWeight={500} color="#888"
        >
          {state?.display}
        </Typography>
      </Stack>
      {order?.products.slice(0,2).map((item) => (
        <Stack
          key={item.id}
          className="orderItem__product"
          direction="row"
          justifyContent="space-between"
        >
          <Stack
            className="orderItem__img"
            direction="row"
            justifyContent="space-between"
          >
            <img alt="" src={item.image} />
            <span className="orderItem__quantity">
              x{item.quantity}
            </span>
          </Stack>
          <Stack flex={1} mx="12px">
          <Link to={item.slug?`/product/${item.slug}`:''}>
            <Typography className="text-overflow-2-lines" fontSize="13px">
              {item.name}
            </Typography>
            </Link>
          </Stack>
          <Stack>
            <Typography className="orderItem__price">
              {numWithCommas(item.price * item.quantity)} ₫
            </Typography>
          </Stack>
        </Stack>
      ))}
      <Box>
        <Box className="orderItem__total">
          <Typography component="span" fontSize="17px" fontWeight="400" color="#888">
            Tổng tiền
          </Typography>
          <Typography
            component="span"
            fontSize="17px" fontWeight='500' color="#333"
          >
            {numWithCommas(order.totalPrice)} ₫
          </Typography>
        </Box>
        <Box className="orderItem__groupbtn">
          <Button variant="outlined">Mua lại</Button>
          <Link to={`/customer/order/detail/${order.id}`}><Button variant="outlined">Xem chi tiết</Button>
          </Link>
          
        </Box>
      </Box>
    </Box>
  );
}

const getState = (state) => orderTabs.find((item) => item.id === state.id);

export default OrderItem;
