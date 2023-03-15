import React from "react";
import Image from "next/image";
import Hero from "@assets/Hero.svg";

function Main() {
	return (
		<div className='relative w-full h-[524px] border-b-black border-b-4'>
			<div className='relative z-10 max-w-[1100px] mx-auto h-full flex items-center'>
				<div>
					<h1 className=' text-[68px] font-[700] w-fit px-4 bg-hotpink text-center tracking-[4px] border-black border-t-8 border-b-8'>
						VINCENT&apos;S SPHERE
					</h1>
					<h2 className=' mt-3 text-[32px] font-[400] w-fit px-4 bg-hotpink text-center tracking-[4px]'>
						HANDICRAFTED HAPPINESS FOR ALL
					</h2>
					<div className=' mt-4 bg-black px-12 py-3 text-white w-fit text-[16px] font-[700] tracking-[2px] cursor-pointer'>
						EXPLORE
					</div>
				</div>
			</div>
			<Image
				src={Hero}
				fill
				className=' object-cover object-center'
				alt='Hero Image'
			></Image>
		</div>
	);
}

export default Main;
