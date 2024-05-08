import React, { useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current path is:", location.pathname);
    // Có thể thực hiện thêm một số logic ở đây nếu cần
  }, [location]);

  return (
    <div className="w-main border p-4 flex justify-between mt-6 m-auto mr-7 font-semibold ">
      <NavLink
        to="/products"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "hover:text-main"
            : "hover:text-main"
        }
      >
        Tất cả
      </NavLink>
      <NavLink
        to="/banhmi?page=1"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "hover:text-main"
            : "hover:text-main"
        }
      >
        Bánh mì
      </NavLink>
      <NavLink
        to="/nuocuong?page=1"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "hover:text-main"
            : "hover:text-main"
        }
      >
        Nước uống
      </NavLink>
      <NavLink
        to="/banhkem?page=1"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "hover:text-main"
            : "hover:text-main"
        }
      >
        Bánh kem
      </NavLink>
      <NavLink
        to="/nuocngot?page=1"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "hover:text-main"
            : "hover:text-main"
        }
      >
        Bánh ngọt
      </NavLink>
    </div>
  );
}

export default NavigationBar;
