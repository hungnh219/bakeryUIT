import React, { memo } from "react";
import icons from "ultils/icons";
import logoFooter from "assets/uit-cake-logo-white.png";

const { MdEmail, MdLocationOn, RiPhoneFill } = icons;
const Footer = () => {
  return (
    <div className="w-full ">
      <div className="h-[103px] w-full bg-main flex items-center justify-center">
        <div className="w-main flex items-center justify-between">
          <div className="flex flex-col flex-1">
            <span className="text-xl font-medium">ĐĂNG KÍ BẢN TIN</span>
            <small className="text-sm">
              Nhanh tay đăng kí để nhận bản tin hàng tuần!
            </small>
          </div>
          <div className="flex-1 flex items-center">
            <input
              className="p-4 pr-0 rounded-l-full w-full outline-none text-gray-100 placeholder:text-base placeholder:text-gray-500 placeholder:italic placeholder:opacity-50"
              type="text"
              placeholder="Điền email đăng kí (bắt buộc)"
            />
            <div className="h-[56px] w-[56px] bg-[#F04646] rounded-r-full flex items-center justify-center text-white">
              <MdEmail size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[407px] w-full bg-gray-700 flex items-center justify-center text-white text-[13px]">
        <div className="w-main flex">
          <div className="flex-2 flex flex-col gap-2">
            <img src={logoFooter} alt="logo-footer" className="w-64" />
            <div className="px-2 flex flex-col gap-y-2 text-base mt-2">
              <div className="flex items-center gap-x-2">
                <MdLocationOn className="text-3xl" />
                <span className="opacity-70">
                  QL1A/1B 20, Khu Phố 6, Thủ Đức, Thành phố Hồ Chí Minh
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <RiPhoneFill className="text-3xl" />
                <span className="opacity-70">0706770436</span>
              </div>
              <div className="flex items-center gap-x-2">
                <MdEmail className="text-3xl" />
                <span className="opacity-70">uitcake@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="mb-[20px] text-[15px] font-medium border-l-2 border-white pl-[15px]">
              INFORMATION
            </h3>
            <span>Typography</span>
            <span>Gallery</span>
            <span>Store Location</span>
            <span>Today's Deals</span>
            <span>Contacts</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="mb-[20px] text-[15px] font-medium border-l-2 border-white pl-[15px]">
              WHO WE ARE
            </h3>
            <span>Help</span>
            <span>Free Shipping</span>
            <span>FAQs</span>
            <span>Return & Exchange</span>
            <span>Testimonials</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h3 className="mb-[20px] text-[15px] font-medium border-l-2 border-main pl-[15px]">
              #DIGITALWORLDSTORE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
