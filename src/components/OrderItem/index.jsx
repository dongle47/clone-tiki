import { Box, Typography, Stack, Button } from "@mui/material";
import React from "react";
import "./OrderItem.scss";
import { orderStates } from "../../constraints/OrderItem";
import { numWithCommas } from "../../constraints/Util";
function OrderItem(props) {
  const { order } = props;
  console.log(order.state);
  const state = getState(order.state);
  return (
    <Box className="orderItem">
      <Box className="orderItem__heading">
        {state.icon ? (
          <state.icon sx={{ width: "20px", color: "#888" }} />
        ) : (
          <></>
        )}

        <Typography
          component="span"
          variant="h3"
          sx={{ fontSize: "16px", fontWeight: 500, color: "#888" }}
        >
          {state.display}
        </Typography>
      </Box>
      {order.products.map((item) => (
        <Stack
          key={item.id}
          className="orderItem__product"
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", padding: "16px 0" }}
        >
          <Stack
            className="orderItem__product__img"
            direction="row"
            justifyContent="space-between"
          >
            <img width="80px" height="80px" alt="" src={item.image} />
            <span className="orderItem__product__quanlity">
              x{item.quanlity}
            </span>
          </Stack>
          <Stack sx={{ flex: 1, margin: "0 12px" }}>
            <Typography className="orderItem__product__name">
              {item.name}
            </Typography>
          </Stack>
          <Stack sx={{}}>
            <Typography className="orderItem__product__price">
              {numWithCommas(item.price * item.quanlity)} ₫
            </Typography>
          </Stack>
        </Stack>
      ))}
      <Box className="orderItem__footer">
        <Box className="orderItem__footer__total">
          <Typography
            component="span"
            sx={{ fontSize: "17px", fontWeight: 400, color: "#888" }}
          >
            Tổng tiền
          </Typography>
          <Typography
            component="span"
            sx={{ fontSize: "17px", fontWeight: 500, color: "#333" }}
          >
            {numWithCommas(order.totalPrice)} ₫
          </Typography>
        </Box>
        <Box className="orderItem__footer__groupbtn">
          <Button variant="outlined">Mua lại</Button>
          <Button variant="outlined">Xem chi tiết</Button>
        </Box>
      </Box>
    </Box>
  );
}

const getState = (state) => orderStates.find((item) => item.display === state);

export default OrderItem;
