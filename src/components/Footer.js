import React from "react"
import imgPem from "../../static/images/Lambang_Kabupaten_Sumedang_cn.png"

const Footer = () => (
    <div className="w-full sm:py-7 border-t-2 border-fuchsia-600">
        <div className="container w-full mx-auto flex justify-center flex-wrap items-center sm:justify-between mt-0 px-6 py-2">
            <div className="order-1 md-order-1">
                <img src={imgPem} alt="pemkab logo" />
            </div>

            <div className="md:flex md:items-center md:w-auto w-full order-1 md:order-1">
                <span>
                    <h6 className="my-2 text-center">
                        <span className="text-xl">Disparbudpora</span> Kabupaten Sumedang
                    </h6>

                    <p className="mb-2 text-center">
                        2020 - 2021 &copy; Virtual Tour Sumedang
                    </p>
                </span>

            </div>

            <div className="order-2 md:order-3 flex items-center sm:mt-4">

            </div>
        </div>
    </div>
)
export default Footer