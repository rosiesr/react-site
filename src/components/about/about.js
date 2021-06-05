import React, { useState } from "react";
import { Card, CardTitle, CardText,   Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption } from 'reactstrap'

import "./about.scss";
import solo from "./pose1.jpeg";
import nemo from "./nemo.jpg";
import soccer from "./soccer.jpg";

export const About =  () => {
    
    const items = [
        {
            src: solo,
            altText: 'Solo Shot',
          },
          {
            src: soccer,
            altText: 'soccer',
            caption: 'Yale Club Soccer'
          },
          {
            src: nemo,
            altText: 'Nemo',
            caption: 'Nemo'
          }
    ]
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} width="100%" className="carousel-image"/>
            <CarouselCaption captionHeader={item.caption} />
          </CarouselItem>
        );
      });
    
    return (
        <div className="aboutframe d-flex justify-content-center">
            <div className="row aboutcontianer align-middle">
                <div className="col-6 ">
                    <Card className="aboutcard" style={cardStyle}>
                        <CardTitle style={titleStyle}>
                            About
                        </CardTitle>
                        <CardText style={textStyle}>
                            I was born and raised in South Florida and have always loved the problem-solving 
                            nature and infinite challenges of math and science. Throughout high school, I worked 
                            on a math research project and began learning computer science, which led me to major 
                            in electrical engineering and computer science at Yale. Specifically, I have a strong 
                            interest in cybersecurity and ethical technology, although I’m still exploring the 
                            endless subject areas of the technology sector. I am always looking for a challenge 
                            and opportunity to learn something new. In my free time, I love playing and watching 
                            sports, spending time with my dog, Nemo, and throwing pottery. 
                            <br/>
                            <br/>
                        </CardText>
                        <br/>
                        <br/>
                    </Card>
                </div>
                <div className="col-6">
                    <Card style={cardStyleCarousel} className="justify-content-center">
                    <Carousel
                    activeIndex={activeIndex}
                    next={next}
                    previous={previous}
                    style={{width:"100%", height:"100%", borderRadius:'40px'}}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText=" " onClickHandler={previous} />
                        <CarouselControl direction="next" directionText=" " onClickHandler={next} />
                    </Carousel>
                    </Card>
                </div>
            </div>
        </div>
    )

}

export default About;

const cardStyle = { backgroundColor: '#7C7C7C', borderRadius: '40px', height: '100%', margin: '10px' }
const cardStyleCarousel = { backgroundColor: 'white', borderRadius: '40px', height: '100%', border:'0px' }
const titleStyle = { fontSize: '48px', color: '#52DEE5', margin: '10px' }
const textStyle = { color:'#EEE5E9', margin:'10px', fontSize: '18px' }