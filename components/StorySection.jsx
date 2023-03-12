import React from "react";
import Image from "next/image";
import Frame from "@assets/Frame.svg";

function StorySection() {
	return (
		<div className='mt-32 max-w-[1100px] mx-auto flex justify-between'>
			<div className='relative w-[400px] h-[564px]'>
				<Image src={Frame} fill alt='main gradient' />
			</div>
			<div className=' w-[616px]'>
				<div className=' bg-hotpink w-32 h-2 rounded-[50px]'></div>
				<h1 className='mt-[22px] text-[38px] font-[700] tracking-[4px] w-[428px] leading-[128%]'>
					The Story of Vincent&apos;s Sphere
				</h1>
				<h2 className=' mt-[22px] text-[14px] font-[400] tracking-[1px]'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum, illo inventore
					veritatis et quasi architecto beatae vitae dicta sunt explicabo.{" "}
				</h2>
				<h2 className=' mt-[22px] text-[14px] font-[400] tracking-[1px]'>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem
					accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
					ab illo inventore veritatis et quasi architecto beatae vitae dicta
					sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
					aspernatur aut odit aut fugit, sit amet, consectetur, adipisci velit,
					sed quia non numquam eius modi tempora incidunt ut labore et dolore
					magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
					nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
					aliquid ex ea commodi consequatur? Quis autem vel eum iure
					reprehenderit qui in ea voluptate velit esse quam illo inventore
					veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
					enim ipsam voluptatem quia nihil molestiae consequatur, vel illum qui
					dolorem eum fugiat quo voluptas nulla pariatur?
				</h2>
				<div className=' mt-[22px] bg-black w-fit text-white px-12 py-3 text-[14px] font-[500] tracking-[2px] cursor-pointer'>
					Learn more
				</div>
			</div>
		</div>
	);
}

export default StorySection;
