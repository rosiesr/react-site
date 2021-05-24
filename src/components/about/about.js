import React from "react";
import { Card, CardTitle, CardText } from 'reactstrap'
import "./about.scss";

export const About =  () => {
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
                            in Electrical Engineering and computer science at Yale. I have a passion for community, 
                            ethical technology, and social justice. In my free time, I love playing and watching 
                            sports, spending time with my dog, Nemo, and throwing pottery. 
                        </CardText>
                        <br/>
                        <br/>
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

const cardStyle = { backgroundColor: '#7C7C7C', borderRadius: '40px' }
const titleStyle = { fontSize: '48px', color: '#52DEE5', margin: '10px' }
const textStyle = { color:'#EEE5E9', margin:'10px' }