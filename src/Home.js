import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
          
            <img 
            className='home_image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
              />
              <div className='home_row'>
                <Product title='The Lean Startup: How Today Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses' 
                id="123456"
                price={19.99}
                image="https://cdn01.sapnaonline.com/product_media/9780670921607/md_9780670921607.jpg"
                 rating={5}/>
                <Product
                title="Adidas Womens Ultraboost 22 W Leather Running Shoe"
                price={143.45}
                rating={4}
                image="https://m.media-amazon.com/images/I/61g75Gxy5gL._UL1500_.jpg" />
                
  
              </div>
              <div className='home_row'>
              
              <Product 
              id="1234560"
              title='Acer Nitro 27 Inch Full HD IPS Gaming Monitor I 165Hz Refresh Rate I AMD Radeon Free Sync '
              price={210.20}
              rating={5}
              image="https://m.media-amazon.com/images/I/81HK954c4LL._SL1500_.jpg"/>
              <Product 
              id="1234569"
              title='2021 Apple 12.9-inch iPad Pro (Wi-Fi, 256GB) - Space Grey'
              price={1529.65}
              rating={4}
              image="https://m.media-amazon.com/images/I/61gQ245+F-S._AC_SL1000_.jpg"
              />
              <Product 
              id="1234568"
              title="Samsung Galaxy Watch4 Classic 42mm Black Stainless Steel - Google Wear OS"
              price={379}
              rating={4}
              image="https://m.media-amazon.com/images/I/51RnXF1oCGS._AC_SL1000_.jpg"/>
              </div>
              <div className='home_row'>
              <Product
              id="1234567"
              title="LG UltraWide 38WN95C Monitor with 1ms 144 Hz 38 Inch 21:9 IPS QHD+ Display, AMD Freesync G-Sync Compatible, Multitasking and Gaming, White"
              price={2099.89}
              rating={5} 
              image="https://m.media-amazon.com/images/I/81WrBJdJcIL._AC_SL1500_.jpg"/>
              </div>
        
        
        </div>

    </div>
  )
}

export default Home;