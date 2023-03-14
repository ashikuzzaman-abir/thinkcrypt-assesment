"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card1 from "@assets/Card1.svg";
import Card2 from "@assets/Card2.svg";
import Card3 from "@assets/Card3.svg";
import Card4 from "@assets/Card4.svg";
import ProductCard from "./ProductCard";

function Slider({ children }) {
	const items = [
		{
			img: Card1,
			name: "May the Force be with you",
			size: "9oz",
		},
		{
			img: Card2,
			name: "May the Force be with you",
			size: "9oz",
		},
		{
			img: Card3,
			name: "May the Force be with you",
			size: "9oz",
		},
		{
			img: Card4,
			name: "May the Force be with you",
			size: "9oz",
		},
	];
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3.2,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className=' mt-[70px] '>
			<div className='max-w-[1100px] mx-auto'>{children}</div>
			<div className=' h-[28px]'></div>
			<div className=' max-w-[1280px] mx-auto'>
				<div className=' max-w-[1200px] ml-auto'>
					<Carousel
						responsive={responsive}
						arrows={false}
						partialVisbile={false}
						containerClass=" p-2"
					>
						
							{items.map((item, ind) => {
								return <ProductCard key={ind} data={item} />;
							})}
						
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default Slider;
