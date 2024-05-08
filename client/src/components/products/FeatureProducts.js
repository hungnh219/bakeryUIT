import React, { useState, useEffect, memo } from "react"
import { ProductCard } from "components"
import { apiGetProducts } from "apis"

const FeatureProducts = () => {
  const [products, setProducts] = useState(null)

  const fetchProducts = async () => {
    const response = await apiGetProducts({ limit: 9, sort: "-totalRatings" })
    if (response.success) setProducts(response.products)
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)
  return (
    <div className="w-full">
      <h3 className="text-[20px] font-semibold py-[15px] border-b-2 border-main">
        SẢN PHẨM TIÊU BIỂU
      </h3>
      <div className="flex flex-wrap mt-[15px] mx-[-10px]">
        {products?.map((el) => (
          <ProductCard key={el._id} pid={el._id} image={el.thumb} {...el} />
        ))}
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4">
        <div className="col-span-2 row-span-2 relative rounded">
          <span className="absolute top-2 right-4 py-1 px-2 text-white rounded-md bg-gray-600 bg-opacity-50">Bánh mì cà rốt nhân cherry</span>
          <img
            src="https://monabakery.monamedia.net/wp-content/uploads/2023/12/Images2.jpg"
            alt="banh-mi-carot-nhan-cherry"
            className="w-full h-full object-cover rounded "
          />
        </div>
        <div className="col-span-1 row-span-1 relative rounded">
        <span className="absolute top-2 left-2 py-1 px-2 text-white rounded-md bg-gray-600 bg-opacity-50">Bánh mì nguyên hạt</span>
          <img
            src="https://monabakery.monamedia.net/wp-content/uploads/2023/12/Images08.jpg"
            alt="banh-mi-nguyen-hat"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="col-span-1 row-span-2 relative rounded">
        <span className="absolute top-2 left-2 py-1 px-2 text-white rounded-md bg-gray-600 bg-opacity-50">Bánh bông lan kem</span>
          <img
            src="https://monabakery.monamedia.net/wp-content/uploads/2023/12/Images06.jpg"
            alt="banh-bong-lan-kem"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="col-span-1 row-span-1 relative rounded">
        <span className="absolute top-2 left-2 py-1 px-2 text-white rounded-md bg-gray-600 bg-opacity-50">Bánh mì thô</span>
          <img
            src="https://monabakery.monamedia.net/wp-content/uploads/2023/12/Images23.jpg"
            alt="banh-mi-tho"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default memo(FeatureProducts)
