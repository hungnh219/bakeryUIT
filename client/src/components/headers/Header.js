import React, { Fragment, memo, useEffect, useState } from "react";
import logo from "assets/logo-uit-cake.png";
import icons from "ultils/icons";
import { Link } from "react-router-dom";
import path from "ultils/path";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "store/user/userSlice";
import withBaseComponent from "hocs/withBaseComponent";
import { showCart } from "store/app/appSlice";
import { Navigation } from "components";

const { BsHandbagFill, FaUserCircle, FaShoppingCart } = icons;
const Header = ({ dispatch }) => {
  const { current } = useSelector((state) => state.user);
  const [isShowOption, setIsShowOption] = useState(false);
  useEffect(() => {
    const handleClickoutOptions = (e) => {
      const profile = document.getElementById("profile");
      if (!profile?.contains(e.target)) setIsShowOption(false);
    };

    document.addEventListener("click", handleClickoutOptions);

    return () => {
      document.removeEventListener("click", handleClickoutOptions);
    };
  }, []);

  return (
    <div className="w-main flex items-center justify-around h-[110px] py-[35px]">
      <Link to={`/${path.HOME}`}>
        <img src={logo} alt="logo" className="w-[234px] object-contain" />
      </Link>
      <Navigation />
      <div className="flex text-[13px]">
        {!current ? (
          <Link to={path.LOGIN} className="bg-main w-[148px] py-2 text-center text-xl text-white rounded hover:bg-[#f3c63f] hover:-translate-y-1 hover:scale-110 duration-300">
            Đăng nhập
          </Link>
        ) : (
          <Fragment>
            <div
              onClick={() => dispatch(showCart())}
              className="cursor-pointer flex items-center justify-center gap-2 px-6 border-r"
            >
              <FaShoppingCart className="text-3xl text-main hover:text-[#f3c63f] hover:-translate-y-1 hover:scale-110 duration-300" />
            </div>
            <div
              className="flex cursor-pointer items-center justify-center px-6 gap-2 relative"
              onClick={() => setIsShowOption((prev) => !prev)}
              id="profile"
            >
              <FaUserCircle className="text-3xl text-main hover:text-[#f3c63f] hover:-translate-y-1 hover:scale-110 duration-300" />
              {isShowOption && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-full flex-col flex left-[20px] bg-gray-100 border min-w-[150px]"
                >
                  <Link
                    className="p-2 w-full hover:bg-yellow-100"
                    to={`/${path.MEMBER}/${path.PERSONAL}`}
                  >
                    Trang cá nhân
                  </Link>
                  {+current.role === 1945 && (
                    <Link
                      className="p-2 w-full hover:bg-yellow-100"
                      to={`/${path.ADMIN}/${path.DASHBOARD}`}
                    >
                      Trang quản trị
                    </Link>
                  )}
                  <span
                    onClick={() => dispatch(logout())}
                    className="p-2 w-full hover:bg-yellow-100"
                  >
                    Đăng xuất
                  </span>
                </div>
              )}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default withBaseComponent(memo(Header));
