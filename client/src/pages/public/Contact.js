import React from "react";
import bgIamge from "assets/bg-contact.jpg";
import icons from "ultils/icons";
import "./styles/contact.css";
import { Button } from "components";

const { MdLocationOn, RiPhoneFill, MdEmail, FaClock } = icons;

const Contact = () => {
  return (
    <div className="w-full ">
      <div className="w-full contact h-[400px] flex justify-center items-center">
        <span className="text-gray-500 capitalize text-5xl font-semibold">
          để lại thông tin liên hệ với UITCake
        </span>
      </div>
      <div className="w-main mx-auto mt-6">
        <div className="w-full flex gap-x-2">
          <h2 className="text-2xl flex-1 font-semibold">
            Cách liên hệ với chúng tôi
          </h2>
          <h2 className="text-2xl flex-1 font-semibold">
            Để lại thông tin của bạn
          </h2>
        </div>
        <div className="w-full flex gap-x-4 justify-center my-6">
          <div className="flex-1 grid grid-cols-2 gap-2">
            <div className="shadow rounded w-60 h-60 p-4">
              <MdLocationOn color="#578899" size={40} />
              <h3 className="text-xl font-semibold">Địa chỉ</h3>
              <p>QL1A/1B 20, Khu Phố 6, Thủ Đức, Thành phố Hồ Chí Minh</p>
            </div>
            <div className="shadow rounded w-60 h-60 p-4">
              <FaClock color="#578899" size={40} />
              <h3 className="text-xl font-semibold">Giờ mở cửa</h3>
              <p>7h30SA - 11h30CH</p>
            </div>
            <div className="shadow rounded w-60 h-60 p-4">
              <RiPhoneFill color="#578899" size={40} />
              <h3 className="text-xl font-semibold">Điện thoại</h3>
              <p>0706770436</p>
            </div>
            <div className="shadow rounded w-60 h-60 p-4">
              <MdEmail color="#578899" size={40} />
              <h3 className="text-xl font-semibold">Email</h3>
              <p>uitcake@gmail.com</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-4">
            <input
              placeholder="Nhập tên của bạn (bắt buộc)"
              className="px-2 w-full py-1 rounded border-2 border-gray-300 outline-none"
            />
            <input
            type="email"
              placeholder="Nhập email (bắt buộc)"
              className="px-2 w-full py-1 rounded border-2 border-gray-300 outline-none"
            />
            <textarea
              placeholder="Lời nhắn nhủ..."
              className="p-2 w-full py-1 h-40 rounded border-2 border-gray-300 outline-none"
            />
            <Button children={'Gửi'} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
