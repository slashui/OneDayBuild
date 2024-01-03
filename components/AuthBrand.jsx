import React from 'react'

const AuthBrand = () => {
  return (
//     <header
//   class="relative flex items-center justify-center h-screen mb-12 overflow-hidden"
// >
//   <div
//     class="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
//   >
//     Welcome to my site!
//   </div>
//   <video
//     autoplay
//     loop
//     muted
//     class="absolute z-10 w-auto min-w-full min-h-full max-w-none"
//   >
//     <source
//       src="/pic/office.mp4"
//       type="video/mp4"
//     />
//     Your browser does not support the video tag.
//   </video>
// </header>
<header className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
<div
    className="relative z-30 p-5  lg:text-2xl 2xl:text-8xl font-Bebas text-primary"
  >
    Make it work,<br />
    Make it right,<br />
    Make it fast.
    <div className='text-4xl'>——Kent Beck</div>
  </div>
  <video src={require('../public/pic/office.mp4')} autoPlay muted loop className="absolute z-10 w-auto min-w-full min-h-full max-w-none" />

</header>
  )
}

export default AuthBrand