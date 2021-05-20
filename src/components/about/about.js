import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap'
import "./about.scss";

export const About =  () => {
    return (
        <div className="aboutframe d-flex justify-content-center">
            <div className="row aboutcontianer align-middle">
                <div className="col-6 ">
                    <Card className="aboutcard" style={{ backgroundColor: '#7C7C7C', borderRadius: '40px' }}>
                        <CardTitle style={{fontSize: '48px', color: '#52DEE5', margin: '10px'}}>
                            About
                        </CardTitle>
                        <CardText style={{color:'#EEE5E9', margin:'10px'}}>
                            I was born and raised in South Florida and has always loved the problem-solving 
                            nature and infinite challenges of math and science. Throughout high school, I worked 
                            on a math research project and began learning computer science, which led me to major 
                            in Electrical Engineering and computer science at Yale. I have a passion for community, 
                            ethical technology, and social justice. In my free time, I love playing and watching 
                            sports, spending time with my dog, Nemo, and throwing pottery. 
                        </CardText>
                    </Card>
                </div>
                <div className="col-6">
                <Card className="aboutcard" style={{borderRadius: '40px'}}>
                    <CardText style={{margin:'10px'}}>
                        Picutres of me on a carosel here yay
                    </CardText>
                </Card>
                </div>
            </div>
        </div>
    )

}

export default About;