import React from 'react'
import { RoomConsumer } from '../context'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import Loading from './Loading'
export default function RoomContainer() {

    return (
        <RoomConsumer>
          {(value)=>{
              const{loading , rooms , sortedRooms} = value;
              if(loading){
                  return <Loading/>
              }
              return(
                  <div>
                      <RoomFilter rooms={rooms}/>
                      <RoomList rooms={sortedRooms}/>
                  </div>
              );
          }}
        </RoomConsumer>
    )
}
