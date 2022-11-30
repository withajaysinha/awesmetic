// import React from 'react'
// import './BestSellingProducts.css';
// import { BestSellingProductsData } from './bestsellingproductsdata/BestSellingProductsData'
// import Slider from 'react-slick';

// export const BestSellingProducts = () => {
//     const settings = {
//         infinite: true,
//         speed: 500,
//         slidesToShow: 5,
//         slidesToScroll: 1
//       };
//   return (
//     <>
//         <div className='container p-5 text-bg-light mb-4'>
//             <div className='text-center'>
//                 <h1>BEST SELLING PRODUCTS</h1>
//             </div>
//             <div>
//                 <Slider {...settings}>
//                 {
//                 BestSellingProductsData.map((bestsellingproductdata)=>{
//                     return(
//                     <React.Fragment key={bestsellingproductdata.id}>
//                         <div className='bestselleingproducts-img p-1'>
//                         <img src={bestsellingproductdata.img} alt="" />
//                         </div>
//                     </React.Fragment>
//                     )
//                 })
//                 }
//                 </Slider>
//             </div>
//         </div>

//     </>
//   )
// }
