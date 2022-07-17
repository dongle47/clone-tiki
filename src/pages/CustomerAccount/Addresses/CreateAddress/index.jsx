import { Check } from "@mui/icons-material";
import "./CreateAddress.scss";
function CreateAddress(){
    return (
        <div className="createaddress">
            <div className="createaddress__heading">Tạo sổ địa chỉ</div>
            <div className="createaddress__inner">
                <div className="createaddress__inner__input">
                    <label htmlFor="Hoten" className="createaddress__inner__input__inputlabel">Họ và tên:</label>
                    <input type="text" name="Hoten" className="createaddress__inner__input__inputcontent" placeholder="Nhập họ và tên"/>
                </div>
                <div className="createaddress__inner__input">
                    <label htmlFor="Congty" className="createaddress__inner__input__inputlabel">Công ty:</label>
                    <input type="text" name="Congty" className="createaddress__inner__input__inputcontent" placeholder="Nhập công ty"/>
                </div>
                <div className="createaddress__inner__input">
                    <label htmlFor="Sodienthoai" className="createaddress__inner__input__inputlabel">Số điện thoại:</label>
                    <input type="text" name="Sodienthoai" className="createaddress__inner__input__inputcontent" placeholder="Nhập số điện thoại"/>
                </div>
                <div className="createaddress__inner__input">
                    <label htmlFor="Tinhthanhpho" className="createaddress__inner__input__inputlabel">Tỉnh/Thành phố:</label>
                    <select className="createaddress__inner__input__inputselect" name="Tinhthanhpho">
                        <option value="" >Chọn Tỉnh/Thành phố</option>
                        <option value="1">Hà Nội</option>
                        <option value="2">Hồ Chí Minh</option>
                        <option value="3">Đà Nẵng</option>
                    </select>
                </div>
                <div className="createaddress__inner__input">
                    <label htmlFor="Quanhuyen" className="createaddress__inner__input__inputlabel">Quận huyện:</label>
                    <select className="createaddress__inner__input__inputselect" name="Quanhuyen">
                        <option value="" >Chọn Quận/Huyện</option>
                        <option value="1">Quận 1</option>
                        <option value="2">Quận 5</option>
                        <option value="3">Quận 6</option>
                    </select>
                </div>
                <div className="createaddress__inner__input">
                    <label htmlFor="Phuongxa" className="createaddress__inner__input__inputlabel">Phường xã:</label>
                    <select className="createaddress__inner__input__inputselect" name="Phuongxa">
                        <option value="" >Chọn Phường/Xã</option>
                        <option value="1">Phường Bến Thành</option>
                        <option value="2">Phường Đa Kao</option>
                        <option value="3">Phường Bến Nghé</option>
                    </select>
                </div>
                <div className="createaddress__inner__input">
                    <label htmlFor="Diachi" className="createaddress__inner__input__inputlabel">Địa chỉ:</label>
                    <textarea name="Diachi" rows="5" placeholder="Nhập địa chỉ" className="createaddress__inner__input__textarea"></textarea>
                </div>     
                <div className="createaddress__inner__input">
                    <label htmlFor="Loaidiachi" className="createaddress__inner__input__inputlabel">Loại địa chỉ:</label> 
                    <label className="createaddress__inner__input__radio">
                        <input type="radio" name="Loaidiachi" className="createaddress__inner__input__radio__input" value={Check}/>
                        <span>Nhà riêng/Chung cư</span>
                    </label>   
                    <label className="createaddress__inner__input__radio">
                        <input type="radio" name="Loaidiachi" className="createaddress__inner__input__radio__input"/>
                        <span>Cơ quan/Công ty</span> 
                    </label>          
                </div > 
                <div className="createaddress__inner__input">
                    <label htmlFor="Macdinh" className="createaddress__inner__input__inputlabel">&nbsp;</label>
                    <label htmlFor="Macdinh" className="createaddress__inner__input__checkbox">
                        <input type="checkbox" className="createaddress__inner__input__checkbox__type" name="Macdinh"/>
                        <span className="createaddress__inner__input__checkbox__label">Đặt làm địa chỉ mặc định</span> 
                    </label>                   
                </div>  
                <div className="createaddress__inner__input">
                    <label htmlFor="Capnhat" className="createaddress__inner__input__inputlabel">&nbsp;</label>
                    <button type="submit" className="createaddress__inner__btn-submit" name="Capnhat">Cập nhật</button>
                </div>    
            </div>
        </div>
    )
}

export default CreateAddress