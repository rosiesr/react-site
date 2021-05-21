import React from "react";
import "./experience.scss";
import { CardText, Card, CardTitle, Button } from "reactstrap";

export const Experience =  () => {
    return (
        <div className="experience">
            <div className="experiencevertical d-flex justify-content-center">
            <div className="experiencecontainter row align-middle">
                <div className="col-8">
                    <Card style={cardStyle}>
                        <CardText style={cardTextStyle}>PagerDuty: Software Engineer Intern</CardText>
                    </Card>
                    <br className="smallspace"/>
                    <Card style={cardStyle}>
                        <CardText style={cardTextStyle}>Yale Computer Society: Vice President, Workshop Team Lead, Secretary</CardText>
                    </Card>
                    <br className="smallspace"/>
                    <Card style={cardStyle}>
                        <CardText style={cardTextStyle}>Rocketansky: Software Engineer Intern</CardText>
                    </Card>
                    <br className="smallspace"/>
                    <Card style={cardStyle}>
                        <CardText style={cardTextStyle}>Yale College Council: Davenport Senator and Deputy Director of Academics</CardText>
                    </Card>
                    <br className="smallspace"/>
                    <Card style={cardStyle}>
                        <CardText style={cardTextStyle}>Yale Physics Department: Phys 200 Peer Tutor</CardText>
                    </Card>
                    <br className="smallspace"/>
                    <Card style={cardStyle}>
                        <CardText style={cardTextStyle}>Other Experiences</CardText>
                    </Card>
                </div>
                <div className="col-4 experiencecard">
                    <Card style={mainCardStyle}>
                        <CardTitle style={mainCardTitle}> 
                            Experience
                        </CardTitle>
                        <CardText style={{color: '#EEE5E9', margin:'10px'}}>
                        After finishing my first year at Yale in Spring 2020, I decided 
                        to take a gap year during the COVID-19 Pandemic.  In the fall, I 
                        interned at a Rocketansky, a paswordless authentication startup, 
                        and in the spring, I interned at PagerDuty.  At Yale and Pine Crest 
                        School, I have stayed engaged with my community through clubs and 
                        extracurriculars. Read more about my experiences here or download 
                        my full resume.
                        </CardText>
                        <br/>
                        <div className="d-flex justify-content-center ">
                            <Button style={{width: '50%'}}> Download Full Resume </Button>
                        </div>
                    </Card>
                </div>
            </div>
            </div>
        </div>
    )

}

export default Experience;

const cardStyle = {height: '15%', borderRadius: '20px'}
const cardTextStyle = {margin: "10px"}

const mainCardStyle = {height: '98%', backgroundColor:'#383D3B', borderRadius: "40px"}
const mainCardTitle = {fontSize: '48px', color: '#52DEE5', margin: '10px'}