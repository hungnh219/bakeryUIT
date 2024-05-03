import React, { useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';

function NavigationBar() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current path is:", location.pathname);
    // Có thể thực hiện thêm một số logic ở đây nếu cần
  }, [location]);

  return (
    <div className="w-main border p-4 flex justify-between mt-8 m-auto">
      <NavLink to="/products" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>
        Tất cả
      </NavLink>
      <NavLink to="/banhmi?page=1" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>
        Bánh mì
      </NavLink>
      <NavLink to="/nuocuong?page=1" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>
        Nước uống
      </NavLink>
      <NavLink to="/banhkem?page=1" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>
        Bánh kem
      </NavLink>
      <NavLink to="/nuocngot?page=1" className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""}>
        Bánh ngọt
      </NavLink>
    </div>
  );
}

export default NavigationBar;