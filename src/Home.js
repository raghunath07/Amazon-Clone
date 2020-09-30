import React from 'react'
import './Home.css'
import Product from '../src/Product'

function Home() {
    return (
        <div className="home">
           <div className="home__container">
                <img 
                className="home__image"
                alt="" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                <div
                className="home__row">
                <Product
                    id="100"
                    title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White)"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/614-yYoVkUL._SY879_.jpg"
                    rating={5}
                />
                <Product
                    id="101"
                    title="Kodak 80 cm (32 Inches) HD Certified Android LED TV 32HDX7XPRO (Black) (2020 Model)"
                    price={239.0}
                    image="https://images-na.ssl-images-amazon.com/images/I/81LJieGEznL._SX679_.jpg"
                    rating={5}
                />
                </div>
                <div
                className="home__row">
                <Product
                id="102"
                title="Samsung Galaxy S20 Ultra (Cosmic Gray, 12GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={135.0}
                image="https://images-na.ssl-images-amazon.com/images/I/71cD4NUIBWL._SY879_.jpg"
                rating={4}
                />
                <Product
                id="103"
                title="Samsung Galaxy Note 20 Ultra 5G (Mystic Bronze, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={156.0}
                image="https://images-na.ssl-images-amazon.com/images/I/71puZXbPIvL._SY879_.jpg"
                rating={4}
                />
                <Product
                id="104"
                title="Apple iPhone Xs (512GB) - Space Grey"
                price={200.0}
                image="https://m.media-amazon.com/images/I/51wU55p7DnL._AC_UY218_.jpg"
                rating={4}
                />
                </div>
                <div
                className="home__row">
                <Product
                id="105"
                title="Samsung LC49RG90SSuXEN 49' Curved LED Gaming Monitor"
                price={220.0}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                rating={4}
                />
                </div>
           </div>
        </div>
    )
}

export default Home
