import React from 'react';
import VectorCard from './VectorCard';

const ChooseUs = () => {
 
  return (
    <div className="w-full h-[30vw] sm:h-screen border border-gray-100 shadow-lg p-4 ">
      {/* Content on top of the image */}
     
<div className='relative'>

      {/* Image */}
      <img alt='interior' className='h-[30vw] w-screen object-cover' src='/assets/projects/about-us-3rd-image.jpg'/>
<div className='absolute top-[25%] w-full'>


      <div className=" flex flex-col h-full justify-center items-center">
        <span
          className="text-4xl font-bold text-white"
          style={{ fontFamily: 'junicode-bold' }}
        >
          WHY CHOOSE US
        </span>
      </div>
      {/* Content Section */}
      <div className="grid h-full w-full sm:grid-cols-3 justify-between ml-3 ">
        <VectorCard
          title="Quality"
          description=" As interior designers, the one thing that continues to resonate throughout our business is quality. From the moment you begin to discuss the project, right through to completion, we aim to uphold the highest standards possible and ensure that our clients are left with not only a great interior but a pleasant experience."
          image="/assets/svgs/quality.svg"
        />
        <VectorCard
          description="Our interior designers consistently push boundaries, whether reimagining kitchen layouts for dual functionality or incorporating a marine tank to enhance bedroom and en-suite lighting. Each project reflects our commitment to delivering uniquely brilliant interior designs."
          title="Creativity"
          image="/assets/svgs/think.svg"
        />
        <VectorCard
          title="Attention"
          description="We pay incredible attention to detail, selecting only the materials, furniture, and lighting that is perfect for the interior design job as a whole. And where we can’t find the perfect furniture, we can design and make bespoke furniture ourselves to deliver the perfect end result every time."
          image="/assets/svgs/attention.svg"
        />
      </div>
        
</div>
      {/* End Content Section */}
      </div>
    </div>
  );
};

export default ChooseUs;
