import React, { Component } from 'react'
import items from './data'
import Client from './Contentful';


const RoomContext = React.createContext();

 class RoomProvider extends Component {
    state={
     rooms:[],
     sortedRooms:[],
     featuredRooms:[],
     loading:true,
     type:"all",
     capacity:1,
     price:0,
     minPrice:0,
     maxPrice:0,
     minSize:0,
     maxSize:0,
     breakfast:false,
     pets:false
    }
   getData = async () =>{
       try {
          let response = await Client.getEntries({
            content_type:"beachResortRoom",
            order:"sys.createdAt"
        })
        let rooms = this.formatData(response.items);
        
        let featuredRooms = rooms.filter(room=> room.featured === true)
        let maxPrice = Math.max(...rooms.map(item =>{
            return item.price
        }))
        console.log(maxPrice)
        let maxSize = Math.max(...rooms.map(item =>{
            return item.size
        }))
        this.setState({
            rooms , 
            featuredRooms, 
            sortedRooms:rooms, 
           loading:false,
            price:maxPrice,
            maxPrice,
            maxSize
        });
       } catch (error) {
           console.log(error)
       }
   }
    componentDidMount(){
        this.getData();
    }
     formatData = (items) =>{
         let tempItems = items.map(item=>{
             let id = item.sys.id;
             let images = item.fields.images.map(images => images.fields.file.url)
             let rooms = {...item.fields,images,id}
             return rooms
         })
         return tempItems
     }
     getRoom =(slug)=>{
        let tempRooms = [...this.state.rooms];
        const room = tempRooms.find(item=> item.slug === slug)
    return room
    }
    handleChange = event =>{
        const target = event.target
        const name = event.target.name
        const value = target.type ==='checkbox' ? target.checked:target.value;
        this.setState({
            [name]:value
        },this.filterRooms)
        
    }
    filterRooms=()=>{
        let {rooms , type,capacity,price,maxSize,minSize,breakfast,pets} = this.state
        let tempRoom = [...rooms];
         capacity =parseInt(capacity);
         price =parseInt(price);
        if(type !=='all'){
            tempRoom=tempRoom.filter(room=>room.type===type)
        }
        if(capacity !== 1){
            tempRoom=tempRoom.filter(room=>room.capacity>=capacity)
        }
        
            tempRoom=tempRoom.filter(room=>room.price <= price )
            tempRoom=tempRoom.filter(room=>room.size>=minSize && room.size<=maxSize)
            if(breakfast){
                tempRoom=tempRoom.filter(room=>room.breakfast===true)
            }
            if(pets){
                tempRoom=tempRoom.filter(room=>room.pets===true)
            }
        
        
        this.setState({
            sortedRooms:tempRoom
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{ 
                ...this.state , 
                getRoom:this.getRoom,
                handleChange:this.handleChange
                }}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer =RoomContext.Consumer;

export {RoomContext , RoomProvider , RoomConsumer}