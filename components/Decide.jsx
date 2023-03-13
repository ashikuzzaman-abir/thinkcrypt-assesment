import React from 'react'
import Image from 'next/image'
import Banner1 from "@assets/BANNER1.svg"
import Banner2 from "@assets/BANNER2.svg"

function Decide() {
  return (
		<div className='mt-[140px] max-w-[1100px] mx-auto'>
			<div>
				<h1 className=' text-[36px] font-[700] tracking-[3px] w-fit mx-auto'>
					Handicrafted Scented Candles
				</h1>
				<p className=' w-fit mx-auto text-[20px] font-[400] tracking-[3px] '>
					With over hundreds of fragrances to choose from
				</p>
			</div>
			<div className='flex justify-between gap-4 mt-2'>
				<div className='relative w-[570px] h-[420px] flex justify-center items-center'>
					<h1
						className='relative z-10 text-[36px] text-center font-[700] text-white w-[319px] 
           sp-txt'
					>
						Women’s Day Special Gift Box
					</h1>
					<Image src={Banner1} fill alt='Banner picture' />
				</div>
				<div className='relative w-[570px] h-[420px] flex justify-center items-center'>
					<h1
						className='relative z-10 text-[36px] text-center font-[700] text-white w-[354px] 
           sp-txt'
					>
						Valentine’s Day Special Gift Box
					</h1>
					<Image src={Banner2} fill alt='Banner2 picture' />
				</div>
			</div>
		</div>
	);
}

export default Decide