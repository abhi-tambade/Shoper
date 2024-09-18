import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Shoper, we bring you the latest in fashion for everyone in the family. From trendy kids’ wear to stylish men’s and women’s clothing, our international brand is dedicated to providing high-quality apparel that suits every taste and occasion. Explore our diverse collection and experience the joy of shopping with Shoper, where fashion meets convenience.</p>
          <p>At Shoper, we believe that fashion should not only look good but also feel good. That’s why we meticulously select the finest fabrics and ensure every piece of clothing meets our high standards of quality. Our dedicated customer service team is always here to assist you, ensuring a seamless shopping experience from start to finish. Join our community of satisfied customers and discover why Shoper is the preferred choice for fashion enthusiasts worldwide.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to revolutionize the way you experience fashion. We strive to offer a diverse range of high-quality clothing that caters to all ages and styles, ensuring that everyone can find something they love. We are committed to sustainability and ethical practices, working tirelessly to reduce our environmental footprint while delivering exceptional value to our customers.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We ensure every product meets our high standards of quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Enjoy a seamless shopping experience with our user-friendly platform.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our dedicated team is always here to assist you.</p>
        </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
