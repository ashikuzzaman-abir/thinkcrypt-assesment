import React from "react";
import Main from "@/components/Main";
import StorySection from "@/components/StorySection";
import Consultation from "@/components/Consultation";
import Decide from "@/components/Decide";
import Featured from "@/components/Featured";
import Slider from "@/components/Slider";

function page() {
	return (
		<div className=''>
			<Main />
			<StorySection />
			<Featured />
			<Slider>
				<div>
					<h1 className=' w-fit mx-auto text-[36px] font-[700] tracking-[3px]'>
						Handicrafted Scented Candles
					</h1>
					<p className=' w-fit mx-auto text-[20px] font-[400] tracking-[3px] text-[#888888]'>
						With over hundreds of fragrances to choose from
					</p>
				</div>
			</Slider>
			<Slider>
				<div>
					<h1 className=' w-fit mx-auto text-[36px] font-[700] tracking-[3px]'>
						Handicrafted Scented Candles
					</h1>
					<p className=' w-fit mx-auto text-[20px] font-[400] tracking-[3px] text-[#888888]'>
						With over hundreds of fragrances to choose from
					</p>
				</div>
			</Slider>
			<Slider>
				<div>
					<h1 className=' w-fit mx-auto text-[36px] font-[700] tracking-[3px]'>
						Handicrafted Scented Candles
					</h1>
					<p className=' w-fit mx-auto text-[20px] font-[400] tracking-[3px] text-[#888888]'>
						With over hundreds of fragrances to choose from
					</p>
				</div>
			</Slider>
			<Slider>
				<div>
					<h1 className=' w-fit mx-auto text-[36px] font-[700] tracking-[3px]'>
						Handicrafted Scented Candles
					</h1>
					<p className=' w-fit mx-auto text-[20px] font-[400] tracking-[3px] text-[#888888]'>
						With over hundreds of fragrances to choose from
					</p>
				</div>
			</Slider>
			<Decide />
			<Consultation />
			<div className='h-[183px]'></div>
		</div>
	);
}

export default page;
