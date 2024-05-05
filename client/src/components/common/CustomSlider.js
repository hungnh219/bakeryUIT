import React, { memo } from "react"
import Slider from "react-slick"
import { Product } from "components"

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
}
const CustomSlider = ({ products, activedTab, normal }) => {
  return (
    <div className="w-full">
      {products && (
        <Slider className="custom-slider border-main border-t-2 p-2 mt-2" {...settings}>
          {products?.map((el, index) => (
            <Product
              key={index}
              pid={el._id}
              productData={el}
              isNew={activedTab === 1 ? false : true}
              normal={normal}
            />
          ))}
        </Slider>
      )}
    </div>
  )
}

export default memo(CustomSlider)
