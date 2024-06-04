import Image from 'next/image'
import React from 'react'

const TopProgram = ({url, bgColor, title}) => {
   const imagesUrl = url ? url : "/assets/images/logo/logo-no-background.png"
   const bg = bgColor ? bgColor : "E1EFFE"
   const textCaption = title ? title : "Caption title"
   
   return (
     <div className={`w-[300px] p-5 h-[210px] rounded-lg bg-[#${bg}]`}>
       <Image className='w-36 mx-auto' src={imagesUrl} alt='course cover' width={200} height={120} />
        {/* <img src={imagesUrl} /> */}
       <p>{textCaption}</p>
     </div>
   )
}

export default TopProgram