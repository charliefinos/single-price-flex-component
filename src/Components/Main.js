import React from 'react'

const Main = () => {
  return (
    <div className='flex flex-col mx-auto px-10 mt-10 pt-10 sm:max-w-screen-md '>

      <div className='bg-white py-6 px-5 rounded-t-lg sm:h-3/6 sm:px-10'>
        <h1 className='text-primary-cyan font-bold text-lg sm:text-3xl mb-4 sm:mb-6'>Join our community</h1>
        <p className='text-primary-yellow font-bold mb-4 sm:text-lg leading-5 sm:mb-2'>30-day, hassle-free money back guarantee</p>
        <p className='text-neutral-blue text-sm leading-7 sm:text-lg'>Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.</p>
      </div>

      <div className="flex flex-col sm:flex-row">

        <div className='bg-primary-cyan py-6 px-5 sm:w-3/6 sm:rounded-bl-lg sm:px-10'>
          <h1 className='text-white text-lg mb-3'>Monthly Subscription</h1>
          <div className='flex flex-row mb-2'>
            <p className=' text-white font-bold text-3xl'>$29</p>
            <p className='text-neutral-gray pt-1.5 ml-3'>per month</p>
          </div>
          <p className='text-white font-light text-sm tracking-wide'>Full access for less than $1 a day</p>
          <button className='mt-6 bg-primary-yellow text-white w-full py-3 rounded-md shadow-lg'>Sign Up</button>
        </div>

        <div className='bg-neutral-bg py-6 px-5 rounded-b-md sm:rounded-bl-none sm:rounded-br-md sm:w-3/6 sm:px-10'>
          <h2 className='text-white font-bold text-xl mb-3 '>Why Us</h2>
          <p className='text-white text-sm'>Tutorial by industry experts</p>
          <p className='text-white text-sm'>Peer & expert code review</p>
          <p className='text-white text-sm'>Coding Exercises</p>
          <p className='text-white text-sm'>Access to our Github repos</p>
          <p className='text-white text-sm'>Community forum</p>
          <p className='text-white text-sm'>Flashcard decks</p>
          <p className='text-white text-sm'>New videos every week</p>
        </div>
      </div>
    </div>
  )
}

export default Main