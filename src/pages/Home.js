import React from 'react'
import Hero from '../Components/Hero'
import "../App.css"
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms'
export default function Home() {
    return (
    <>
       <Hero >
       <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting At $299">
         <Link className="btn-primary"to="/rooms">our Rooms</Link>       
        </Banner>
       </Hero>
       <Services/>
       <FeaturedRooms/>
     </>  
    )
}
