import React, { Component } from 'react'
import CommonCard from '../commonCard/CommonCard';

function ProductComponent({ slides }) {
    return (
        <div className="w-full items-center gap-[20px] justify-center">
            <div className="w-full grid grid lg:grid-cols-4 md:grid-cols-3 grid grid-cols-2 lg:gap-[30px] gap-[20px]">
                {slides?.map((slide, index) => {
                    return (
                        <CommonCard key={index} slide={slide} />
                    );
                })}
            </div>
        </div>
    )
}

export default ProductComponent