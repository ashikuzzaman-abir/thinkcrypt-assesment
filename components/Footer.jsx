import React from "react";
import Image from "next/image";
import Facebook from "@assets/Facebook.svg";
import Instagram from "@assets/Instagram.svg";
import Call from "@assets/call.svg";
import Mail from "@assets/Mail.svg";

function Footer() {
	return (
		<div className='mt-1 bg-shalowGray'>
			<div className='pt-[102px]  max-w-[1100px] mx-auto flex justify-between items-start'>
				<div className=' w-[216px]'>
					<h1 className=' text-[18px] font-[700] tracking-[3px]'>
						VINCENT’S SPHERE
					</h1>
					<p className=' mt-3 text-[14px] font-[400] tracking-[2px]'>
						Flat A5, 4/11 Humayun Road, Mohammadpur, Dhaka 1207
					</p>
					<div className=' mt-3 flex gap-2 items-center'>
						<div className=' relative w-[25px] h-[25px] '>
							<Image src={Call} fill alt=' call logo' />
						</div>
						<p className='text-[14px] font-[400] tracking-[2px]'>
							0182-8398225
						</p>
					</div>
					<div className=' mt-3 flex gap-2 items-center'>
						<div className=' relative w-[25px] h-[25px] '>
							<Image src={Mail} fill alt=' Mail logo' />
						</div>
						<p className='text-[14px] font-[400] tracking-[2px]'>
							info@thinkcrypt.io
						</p>
					</div>
				</div>
				<div className='w-[611px] flex justify-between'>
					<div className='w-[161px]'>
						<h1 className=' text-[18px] font-[700] tracking-[3px]'>
							Navigation
						</h1>
						<p className='mt-3 text-[14px] font-[400] tracking-[2px] cursor-pointer'>
							Home
						</p>
						<p className='mt-3 text-[14px] font-[400] tracking-[2px] cursor-pointer'>
							About
						</p>
						<p className='mt-3 text-[14px] font-[400] tracking-[2px] cursor-pointer'>
							About
						</p>
					</div>
					<div className='w-[161px]'>
						<h1 className=' text-[18px] font-[700] tracking-[3px]'>Legal</h1>
						<p className='mt-3 text-[14px] font-[400] tracking-[2px] cursor-pointer'>
							Privacy Policy
						</p>
						<p className='mt-3 text-[14px] font-[400] tracking-[2px] cursor-pointer'>
							Terms of Service
						</p>
						<p className='mt-3 text-[14px] font-[400] tracking-[2px] cursor-pointer'>
							Return Policy
						</p>
					</div>
					<div className='w-[161px]'>
						<h1 className=' text-[18px] font-[700] tracking-[3px]'>Social</h1>
						<div className='mt-3 flex items-center gap-4'>
							<div className=' relative w-[25px] h-[25px] '>
								<Image src={Facebook} fill alt=' Facebook logo' />
							</div>
							<div className=' relative w-[25px] h-[25px]'>
								<Image src={Instagram} fill alt=' Instagram logo' />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mt-[60px] bg-black text-white text-[14px] font-[400] tracking-[3px] text-center py-3'>
				Copyright © 2021, Vincent’s Sphere | All rights reserved | Powered by
				<span className='text-hotpink'> thinkcrypt.io</span>
			</div>
		</div>
	);
}

export default Footer;
