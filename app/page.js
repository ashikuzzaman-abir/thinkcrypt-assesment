import React from 'react'
import Main from '@/components/Main'
import StorySection from '@/components/StorySection'
import Consultation from '@/components/Consultation';
import Decide from '@/components/Decide';

function page() {
  return (
		<div className=''>
			<Main />
			<StorySection />
			<Decide/>
      <Consultation/>
			<div className='h-[183px]'></div>
		</div>
	);
}

export default page