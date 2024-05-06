import anhCuaHang from "assets/anh-cuahang.jpg";
import { Link } from "react-router-dom";
import path from "ultils/path";

function About() {
  return (
    <div className="w-main mt-6 flex flex-col items-center">
      <h3 className="text-main inline-block mb-4 py-2 font-semibold text-5xl text-center shadow-[0px_4px_0px_0px_rgba(236,193,61,1)]">
        Giới thiệu
      </h3>
      <div className="p-4 border flex gap-8">
        <img
          src={anhCuaHang}
          alt="anh-cua-hang"
          className="w-[40%] rounded-lg"
        />
        <div className="w-[60%] flex flex-col items-center">
          <h3 className="text-center text-main font-semibold text-xl py-2">
            Chào mừng bạn đến với{" "}
            <span className="font-bold text-2xl">UITCake</span>
          </h3>
          <p className="indent-4 mb-2 text-justify">
            Là bữa ăn tin cậy cho các bạn học sinh, sinh viên Làng Đại Học với
            tiêu chí hương vị bánh mì thì ngon, đạt chuẩn vệ sinh an toàn thực
            phẩm và giá thành vừa với túi tiền của các bạn học sinh, sinh viên.
          </p>
          <p className="indent-4 my-2 text-justify">
            Với tầm nhìn của một nhà sáng tạo và tinh thần sáng tạo không ngừng
            nghỉ, chúng tôi cũng luôn cập nhật và thay đổi menu của mình để mang
            đến những trải nghiệm mới mẻ cho khách hàng thân yêu.
          </p>
            <button className="w-[98%] text-center bg-main rounded py-1 text-gray-100 font-semibold hover:bg-[#f3c63f] hover:text-white hover:-translate-y-1 hover:scale-105 duration-300">
                <Link to={`/${path.INTRODUCE}`} className="px-[224px]">
                    Xem thêm
                </Link>
            </button>
        </div>
      </div>
    </div>
  );
}

export default About;
