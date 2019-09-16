import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail , FaHiking , FaShuttleVan , FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state={
     services:[
         {
          icon:<FaCocktail/>,
          title:"free Cocktails",
          info:"Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub"

         },
         {
            icon:<FaHiking/>,
            title:"endless hiking",
            info:"Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub"
  
           },
           {
            icon:<FaShuttleVan/>,
            title:"free Shuttle",
            info:"Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub"
  
           },
           {
            icon:<FaBeer/>,
            title:"strongest Beer",
            info:"Lorem Ipsum Dolor Amet Offal Butcher Quinoa Sustainable Gastropub"
  
           },
         
     ]
    }
    render() {
        return (
            <section className="services ">
            <Title title="Services"/>
            <div className="services-center">
                {this.state.services.map((item , index)=>{
                    return (
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6 >{item.title}</h6>
                            <p>{item.info}</p>

                        </article>
                    )
                } )}
            </div>
            </section>
        )
    }
}
