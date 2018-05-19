import React from 'react';
import Events from './events';
import dummyData from '../../helper/dummydata';
import CarouselInfo from '../components/mainCarousel';
import Top from './top'


export default props => {
    const allEvents = dummyData.map((item, index)=>{
        return(
            <Events title={item.title} venue_name={item.venue_name} time={item.start_time} image={item.image} key={index}/>
              
        )
    })
    const carouselMainInfo = dummyData.map((item, index) =>{
        return(
            <CarouselInfo key={index} title={item.title} venue_name= {item.venue_name} time={item.start_time}/> 
        )
    })

    const top = dummyData.map((item, index) =>{
        return(
            <Top key={index} city_name={item.city_name}/> 
        )
    });
    
    


    return(
      <div>
         <Top city_name={dummyData[0].city_name}/>
         <CarouselInfo title={dummyData[0].title} venue_name={dummyData[0].venue_name} time={dummyData[0].start_time}/>
        {/* {carouselMainInfo} */} 
        {allEvents}
        
        {/* <Events title={dummyData[1].title} image={dummyData[1].image.blackborder250.url}/> */}

        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 text-center">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                </div>
            </div>
        </div>
    </div>
    
    );
}