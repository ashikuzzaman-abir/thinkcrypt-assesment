import React from "react";
import Image from "next/image";
import mainLogo from "@assets/main-logo.svg";
import { HiOutlineSearch } from "react-icons/hi";
import Link from "next/link";
function Nav() {
	return (
		<div className=' h-[64px] bg-black flex items-center'>
			<div className='max-w-[1100px] mx-auto flex justify-between  items-center w-full'>
				<div className='flex justify-between items-center gap-8'>
					<div className='relative w-[48px] h-[48px]'>
						<Image src={mainLogo} fill alt='main logo'></Image>
					</div>
					<div className='flex items-center bg-lightGray px-3 py-1 justify-between gap-4'>
						<input
							type='text'
							name=''
							id=''
							className=' bg-transparent font-[500] text-white text-[16px] placeholder:text-midGray placeholder:font-[500] px-1 focus:outline-none'
							placeholder='Search'
						/>
						<HiOutlineSearch className=' text-midGray text-[16px] cursor-pointer' />
					</div>
				</div>
				<div className=' text-white'>
					<ul className=' list-none flex justify-between items-center w-full gap-8 text-[14px] font-[500] tracking-[2px] cursor-pointer'>
						<li>
							<Link href="/">
								<>Home</>
							</Link>
						</li>
						<li>
							<a>Catagories</a>
						</li>
						<li>
							<a>Login</a>
						</li>
						<li>
							<a>About Us</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Nav;
