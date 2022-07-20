import React, { useEffect, useState } from "react";
import "./CartItem.scss";
import { Checkbox, Typography, Dialog, Button } from "@mui/material";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { numWithCommas } from "../../constraints/Util";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateItem } from "../../slices/cartSlice";

function CartItem(props) {
  const [data, setData] = useState(props.data);
  const [quanlity, setQuanlity] = useState(props.data.quanlity);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickRemove = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(data));
    setOpen(false);
  };

  useEffect(() => {
    setData(props.data);
    setQuanlity(props.data.quanlity);
  }, [props.data]);
  const updateQuanlity = (otp) => {
    if (otp === "-") {
      if (data.quanlity <= 1) {
        handleClickRemove();
      } else {
        dispatch(
          updateItem({
            ...data,
            quanlity: data.quanlity - 1,
          })
        );
      }
    } else if (otp === "+") {
      dispatch(
        updateItem({
          ...data,
          quanlity: data.quanlity + 1,
        })
      );
    }
  };
  const onChangeQuanlity = (e) => {
    setQuanlity(e.target.value);
    if (e.target.value === "") {
      return;
    }

    if (Number.isInteger(Number(e.target.value))) {
      let num = Number(e.target.value);
      if (num <= 0) {
        handleClickRemove();
      } else {
        dispatch(
          updateItem({
            ...data,
            quanlity: num,
          })
        );
      }
    }
  };

  const handleChangeChoose = () => {
    dispatch(
      updateItem({
        ...data,
        choose: !data.choose,
      })
    );
  };

  return (
    <>
      <div className="cart-item">
        <div
          className="cart-item__cell cart-item__description"
          style={{ width: "44.45%" }}
        >
          <Checkbox
            checked={data?.choose}
            onChange={handleChangeChoose}
            sx={{
              padding: 0,
              marginRight: "12px",
              width: "18px",
              height: "18px",
            }}
          />
          <img src={data?.image} alt="" />

          <div className="cart-item__description__content">
            <Typography
              className="cart-item__description__text"
              gutterBottom
              variant="h5"
              component="div"
            >
              {data?.name}
            </Typography>
          </div>
        </div>
        <div
          className="cart-item__cell cart-item__price"
          style={{ width: "21.11%" }}
        >
          {numWithCommas(data?.price)} ₫
        </div>
        <div className="cart-item__cell" style={{ width: "14.45%" }}>
          <div className="cart-item__quanlity">
            <button
              onClick={() => {
                updateQuanlity("-");
              }}
            >
              -
            </button>
            <input onChange={onChangeQuanlity} type="text" value={quanlity} />
            <button
              onClick={() => {
                updateQuanlity("+");
              }}
            >
              +
            </button>
          </div>
        </div>
        <div
          className="cart-item__cell cart-item__total"
          style={{ width: "14.45%" }}
        >
          {numWithCommas(data?.price * data?.quanlity)} ₫
        </div>
        <div className="cart-item__cell" style={{ width: "3.33%" }}>
          <span style={{ cursor: "pointer" }} onClick={handleClickRemove}>
            <DeleteOutlinedIcon />
          </span>
        </div>
      </div>

      <Dialog onClose={handleClose} open={open}>
        <div className="dialog-removecart">
          <div className="dialog-removecart__title">
            <h4>Xoá sản phẩm</h4>
          </div>
          <div className="dialog-removecart__content">
            Bạn có muốn xóa sản phẩm đang chọn?
          </div>
          <div className="dialog-removecart__choose">
            <Button
              variant="outlined"
              onClick={handleRemoveItem}
              sx={{ width: "94px", height: "36px" }}
            >
              Xác nhận
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{ width: "57px", height: "36px" }}
            >
              Huỷ
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

export default CartItem;
