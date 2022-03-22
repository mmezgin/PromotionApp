import React,{useState,useEffect} from 'react'
import './index.scss'
import Card from './Card'
import axios from 'axios'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
export default ()=>{
    const [data,setData]=useState(null)
    const carouselItems = [];
    useEffect(()=>{
        try {
            axios
            .request({
                headers: {
                "X-Country-Id":"TR",
                "X-Language-Id":"TR",
                "Content-Type":"application/json"
                },
                method: 'GET',
                url: 'https://api.extrazone.com/promotions/list?Channel=PWA',
            })
            .then((response) => {
                setData(response.data)
            })
            } catch (error) {
                console.log(error)
            }
        },[])

        const CustomDot = ({ onClick, ...rest }) => {
            const {
              onMove,
              index,
              active,
              carouselState: { currentSlide, deviceType }
            } = rest;
            
            
            return (
              
              <button
                className={active ? "dots-active" : "dots"}
                onClick={(e) => {onClick();console.log(e)}}
              >
                {React.Children.toArray(carouselItems)[index]}
              </button>
              
            );
          };

            const responsive = {
                desktop: {
                  breakpoint: { max: 3000, min: 1024 },
                  items: 1,
                  slidesToSlide: 1, 
                  partialVisibilityGutter: 30
                },
                tablet: {
                  breakpoint: { max: 1024, min: 464 },
                  items: 1,
                  slidesToSlide: 1, 
                  partialVisibilityGutter: 30
                },
                mobile: {
                  breakpoint: { max: 464, min: 0 },
                  items: 1,
                  slidesToSlide: 1, 
                  partialVisibilityGutter: 30
                }
              };

        if(data){
            return(
                <Carousel 
                responsive={responsive}
                swipeable={true}
                draggable={true}
                showDots={true}
                ssr={true}
                arrows={false}
                infinite={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                partialVisible={true}
                containerClass="carousel-con"
                customDot={<CustomDot/>}>
                  {data.map((item)=>{
                      return(
                          <Card item={item} />
                      )
                  })}
                </Carousel>
            )}
            return(
                <p>Yükleniyor...</p>
            )
}