import React from 'react'
import Main from '@/components/Main'
import StorySection from '@/components/StorySection'
import Consultation from '@/components/Consultation';

function page() {
  return (
		<div className=''>
			<Main />
			<StorySection />
      <Consultation/>
			<div className='h-[183px]'></div>
		</div>
	);
}

export default page