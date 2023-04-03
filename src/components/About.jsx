import React from 'react'
import res from '../img/res.jpeg'
const About = () => {
  return (
    <div className='py-6'>
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home"> 
    <div className='flex-3 flex flex-col items-start justify-center gap-6'>
      <p className='text-gray-500 h-[90%] text-center md:text-left md:w-[80%] p-6 text-2xl'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa enim. Proin maximus, justo eu eleifend rhoncus, ex lorem elementum purus, 
      a placerat urna sapien et nunc. Mauris commodo mauris eget convallis posuere. Integer a tincidunt arcu. Nunc euismod, mi sit amet euismod cursus, mauris odio blandit mi,
      at ullamcorper ex elit in sem. 
      </p>
      <p className='text-gray-500 h-[90%] text-center md:text-left md:w-[80%] p-6 text-2xl'>
      Curabitur blandit ac purus ac vehicula. Morbi ut rhoncus mauris, at sagittis odio.
       Morbi mi risus, tempus vel eros sed, sagittis facilisis justo. Fusce ullamcorper diam vitae orci rutrum facilisis.
        Vivamus consectetur, felis nec aliquet tempus, est tortor tincidunt augue, at pretium arcu dui vitae lectus. Sed lacinia augue mauris, 
        eget accumsan tortor vehicula at. Integer ligula lorem, gravida vitae metus iaculis, maximus dignissim lectus. In interdum justo sit amet ex
      </p>
    </div>
    <div className='flex-1 flex items-center relative py-6'>
      <div>
        <p className=' text-2xl lg:text-4xl font-serif text-white bg-brown rounded-xl items-center justify-center flex  m-auto h-[100%] w-[50%] mb-12 lg:-mt-12'>Our Restaurant</p>
          <img className='w-full h-auto rounded-md shadow-2xl hover:shadow-brown ' src={res} alt='res' whileHover ={{scale:2.2}}/>
        </div></div>
    </section>
    <footer className='bg-brown text-white text-2xl'>
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home"> 
    <div className='flex-3 flex flex-col items-start justify-center gap-6'>
      <p className='text-white h-[90%] text-center md:text-left md:w-[80%] p-6 text-2xl'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa enim. Proin maximus, justo eu eleifend rhoncus, ex lorem elementum purus, 
      a placerat urna sapien et nunc. Mauris commodo mauris eget convallis posuere. Integer a tincidunt arcu. Nunc euismod, mi sit amet euismod cursus, mauris odio blandit mi,
      at ullamcorper ex elit in sem. 
      </p>
    </div>
    <div className='py-2 flex-1 flex items-center relative'>
      <div>
      <p className='text-white h-[90%] text-center md:text-left md:w-[80%] p-6 text-2xl'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor massa enim. Proin maximus, justo eu eleifend rhoncus, ex lorem elementum purus, 
      a placerat urna sapien et nunc. Mauris commodo mauris eget convallis posuere. Integer a tincidunt arcu. Nunc euismod, mi sit amet euismod cursus, mauris odio blandit mi,
      at ullamcorper ex elit in sem. 
      </p>
        </div></div>
    </section>
    </footer>
    </div>
  )
}

export default About