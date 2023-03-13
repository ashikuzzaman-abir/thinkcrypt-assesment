"use client";
import React from "react";
import Image from "next/image";
import ProductImage from "@assets/ProductDetailsImage.svg";
import Rating from "react-rating";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import Slider from "@/components/Slider";

function Page() {
	return (
		<div className='mt-16'>
			<div className=' max-w-[1100px] mx-auto'>
				<div className=' flex justify-between'>
					<div className=' relative w-[544px] h-[452px]'>
						<Image src={ProductImage} fill alt='Product Image' />
					</div>
					<div className=' w-[508px]'>
						<h1 className=' text-[32px] font-[700] text-[#111]'>
							May The Force Be With You
						</h1>
						<p className=' text-[18px] font-[500] text-[#777]'>Size: 9oz</p>
						<div className=' mt-[28px] flex gap-4 text-[#F2994A] text-[24px] '>
							<Rating
								placeholderRating={3.5}
								emptySymbol={<AiOutlineStar className=' text-[26px]' />}
								fullSymbol={<FaStar />}
								placeholderSymbol={<FaStar />}
								fractions={2}
								className=''
							/>
							<p className=' text-[16px] font-[700] text-[#111] pt-[2px]'>
								22 Reviews
							</p>
						</div>
						<p className=' mt-[28px] text-[18px] text-[#111]'>
							Notes: Spring Flowers, Natural Patchouli & White Cedar
						</p>
						<p className='mt-[28px] text-[16px] font-[700]'>
							Category: Scented Candles
						</p>
						<p className='text-[16px] font-[700]'>
							Sub Category: Star Wars Special
						</p>
						<p className='mt-[28px] text-[16px] font-[700]'>In Stock</p>
						<p className='mt-[28px] text-[24px] font-[700] text-[#111]'>
							Price: BDT.850
						</p>
						<div className='mt-[28px] flex gap-2'>
							<div className=' text-[16px] font-[700] text-white bg-black px-8 py-3 cursor-pointer'>
								ADD TO CART
							</div>
							<div className='text-[16px] font-[700]  px-8 py-3 cursor-pointer'>
								ADD TO WISHLIST
							</div>
						</div>
					</div>
				</div>
				<p className='mt-[28px] text-[32px] font-[700] cursor-pointer'>
					Share this item
				</p>
				<div className='mt-[64px]'>
					<h2 className=' text-[44px] font-[700]'>Description</h2>
					<p className=' mt-[30px] text-[16px] font-[400]'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
						aliquid ex ea commodi consequatur? Quis autem vel eum iure
						reprehenderit qui in ea voluptate velit esse quam nihil molestiae
						consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?
					</p>
					<p className=' mt-[16px] text-[16px] font-[400]'>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
						sed quia non numquam eius modi tempora incidunt ut labore et dolore
						magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
						nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
						aliquid ex ea commodi consequatur? Quis autem vel eum iure
						reprehenderit qui in ea voluptate velit esse quam nihil molestiae
						consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
						pariatur?
					</p>
				</div>
			</div>
			<div className=' h-[36px]'></div>
			<Slider>
				<h2 className=' text-[36px] font-[700] tracking-[3px]'>
					Related Products
				</h2>
			</Slider>
			<div className=' h-[64px]'></div>
		</div>
	);
}

export default Page;
