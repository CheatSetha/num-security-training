import React from 'react'

const HomePage = () => {
  return (
    <div>
        <div className='h-[600px] bg-secondary flex'>
            <div>
                <h1 className='text-4xl font-bold'>Protect Your Digital Life with Our</h1>
                <h1 className='text-3xl font-bold'>Cybersecurity Training <span className='text-[#05a9df]'>platform</span></h1>
                <p className='mt-5 mb-3'>Empoer yourself with the knowlegde to stay safe online</p>
                <button className='btn bg-primary text-white'>Start training now</button>
            </div>
            <div>
                <img src='https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg' alt='hero' />
            </div>
        </div>
    </div>
  )
}

export default HomePage