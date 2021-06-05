import React from "react";
import { Container, Row, Col, Card, CardTitle, CardText, Button, CardImg } from 'reactstrap'; 
import "./projects.scss";
import bitAdder from "./bit-adder.jpeg";

export const Projects =  () => {
    
    return (
        <div className="projects d-flex justify-content-center text-center">
            <Container className="projectcontainer" style={{height: "100%"}}>
                <Row xs="3" style={rowStyle}>
                    <Col>
                        <Card style={mainCard}>
                            <CardTitle style={mainTitle}>Projects</CardTitle>
                            <CardText style={mainText}>From personal projects to classwork to Hackathons, 
                                here are some of the projects I’ve worked on.</CardText>
                            <br className="projects-br"/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Personal Website</CardTitle>
                            <CardText style={cardText}>You found my personal website! This was created 
                            using React.</CardText>
                            <div className="d-flex justify-content-center ">
                                <a href="www.example.com" target="_blank" rel="noopener noreferrer">
                                    <Button style={buttonStyle}>NEED TO FIX</Button>
                                </a>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>YES Internship Site</CardTitle>
                            <CardText style={cardText}>Worked on a team of ~8; AWS Cloud Security for the website 
                            and Recruiting infrastructure to manage 500+ applicants </CardText>
                            <div className="d-flex justify-content-center ">
                                <a href="https://www.internships.yesatyale.org/" target="_blank" rel="noopener noreferrer">
                                    <Button style={buttonStyle}>YES Website</Button>
                                </a>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row xs="3" style={rowStyle}>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Syllabus Parser</CardTitle>
                            <CardText style={cardText}>Input your syllabus into this program, and it will automatically 
                            create Google Calendar events for all assignments and exams. Created during Duke Hackathon 
                            in November 2020 and was recognized as a top 30 project out of 100+ submissions. </CardText>
                            <div className="d-flex justify-content-center ">
                                <a href="https://github.com/rosiesr/syllabusparser" target="_blank" rel="noopener noreferrer">
                                    <Button style={buttonStyle}>Source Code</Button>
                                </a>
                            </div>
                            <br/>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle} className="">
                            <CardTitle style={cardTitle}>2-Bit Adder</CardTitle>
                            <CardText style={cardText}>Created using transistors, resistors, wires and a voltage supply for 
                            Introduction to Computer Engineering. Hardware engineering project </CardText>
                            <div><CardImg style={{width:"70%"}} src={bitAdder} alt="2 bit adder" /></div>

                        </Card>
                    </Col>
                    <Col>
                        <Card className="justify-content-center" style={cardStyle}>
                            <CardTitle style={cardTitle}>More Projects Coming Soon!</CardTitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Projects;

const rowStyle = {width:"100%"}

const mainCard = {height:"100%", backgroundColor:"#7C7C7C", borderRadius:"20px", textAlign: "left"}
const mainTitle = {color: "#52DEE5", margin: "10px", fontSize:"52px"}
const mainText = { margin: "10px", fontSize: "24px" }

const cardStyle = {height:"100%", backgroundColor:"#EEE5E9", borderRadius:"20px"}
const cardTitle = {color: "#383D3B", margin: "10px", fontSize:"36px"}
const cardText = { color: "#383D3B", margin: "10px", fontSize:"18px" }

const buttonStyle ={ width: "100%", color: "#52DEE5"}