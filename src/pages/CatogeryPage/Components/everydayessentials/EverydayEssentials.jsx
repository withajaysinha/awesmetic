// import React from 'react'
// import './EverydayEssentials.css';
// import { EverydayEssentialsData } from './everydayessentialsdata/EverydayEssentialsData';
// import Slider from "react-slick";

// export const EverydayEssentials = () => {
//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1
//       };
//   return (
//     <>
//     <div className='container p-5 text-bg-light mb-4'>
//         <div className='text-center'>
//             <h1>Best Sellers</h1>
//         </div>
//         <div>
//             <Slider {...settings}>
//                 {
//                 EverydayEssentialsData.map((essentialsdata)=>{
//                 return(
//                     <React.Fragment key={essentialsdata.id}>
//                     <div className='everydayessentials-img p-1'>
//                         <img src={essentialsdata.img} alt="" />
//                     </div>
//                     </React.Fragment>
//                 )
//                 })
//             }
//             </Slider>
//         </div>
//     </div>
//     </>
//   )
// }
