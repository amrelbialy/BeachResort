import React from 'react'
import "../App.css"
export default function Banner({children , title , subtitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
               <div/>
                <p>
                    {subtitle}
                </p>
                {children}
            
        </div>
    )
}
