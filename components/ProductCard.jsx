import React from "react";
import Image from "next/image";
import Love from "@assets/Love.svg";
import Share from "@assets/Share.svg";
import Right from "@assets/Right.svg";
import Link from "next/link";

function ProductCard({ data }) {
	return (
		<div className='relative w-[358px] h-[487px] select-none drop-shadow-lg'>
			<div className='relative w-full h-[356px]  '>
				<Image
					src={data.img}
					fill
					alt={data.name}
					className='rounded-t-[25px] pointer-events-none'
				></Image>
			</div>
			<div className=' px-4 py-3 bg-white rounded-b-[25px] '>
				<div>
					<p className=' text-hotpink text-[12px] font-[700] tracking-[2px]'>
						STAR WARS SPECIAL
					</p>
					<p className=' text-[18px] font-[700] tracking-[1px]'>{data.name}</p>
					<p className=' text-[12px] font-[700] tracking-[2px] text-[#888888]'>
						{data.size}
					</p>
				</div>
				<div className='mt-5 w-full flex justify-between items-center'>
					<div className='flex gap-3'>
						<div className='relative w-[24px] h-[24px] cursor-pointer'>
							<Image src={Love} fill alt='love icon' />
						</div>
						<div className='relative w-[24px] h-[24px] cursor-pointer'>
							<Image src={Share} fill alt='Share icon' />
						</div>
					</div>
					<div>
						<Link href='/product'>
							<div className='relative w-[24px] h-[24px] bg-white rounded-full transition-all hover:bg-[rgba(0,0,0,0.1)] hover:scale-150'>
								<Image src={Right} fill alt='Right icon' />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
