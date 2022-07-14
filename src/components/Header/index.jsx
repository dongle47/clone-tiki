import React from 'react'
import "./Header.scss"
function Header() {
  return (
    <div className='Header'>
      <div className='Header__wrap'>
        <div className='Header__top'>
          <div className='Header__logo'>
            <img src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png" alt="tiki-logo" height="40" width="60"></img>
          </div>

          <div className='Header__search'>
            <div className='Header__search__group'>
              <input type="Text" />
              <button> Tìm Kiếm </button>
            </div>
          </div>

          <div className='Header__account'>
            <div className="Header__account__info">
            <span>
                <img class="cart-icon" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" height="32" width="32"></img>
              </span>
              <a> Tài khoản </a>
            </div>
            <div className="Header__account__cart">
              <span>
                <img class="cart-icon" src="https://salt.tikicdn.com/ts/upload/40/44/6c/b80ad73e5e84aeb71c08e5d8d438eaa1.png" height="32" width="32"></img>
              </span>
              <a> Giỏ hàng </a>
            </div>

          </div>
        </div>

        <div className="Header__bottom">
          <div className='Header__logo'>
            <img src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png" alt="free-ship-badge" height="12" width="83"></img>

          </div>
          <div className="Header__search__cate">
            <a>trái cây </a>
            <a>thịt,trứng </a>
            <a>rau củ quả </a>
            <a>sữa, bơ, phô mai </a>
            <a>hải sản </a>
            <a>gạo, mì ăn liền </a>
            <a>đồ uống, bia rượu </a>
            <a>bánh kẹo</a>
          </div>

          <div>
            <button>Bán hàng cùng Tiki</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Header