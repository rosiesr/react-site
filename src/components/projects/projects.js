import React from "react";
import { Container, Row, Col, Card, CardTitle } from 'reactstrap'; 
import "./projects.scss";

export const Projects =  () => {
    return (
        <div className="projects d-flex justify-content-center">
            <Container className="projectcontainer" style={{height: "700px"}}>
                <Row xs="3" style={rowStyle}>
                    <Col>
                        <Card style={mainCard}>
                            <CardTitle style={mainTitle}>Projects</CardTitle>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Project 1</CardTitle>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Project 2</CardTitle>
                        </Card>
                    </Col>
                </Row>
                <br/>
                <Row xs="3" style={rowStyle}>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Project 3</CardTitle>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Project 4</CardTitle>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={cardStyle}>
                            <CardTitle style={cardTitle}>Project 5</CardTitle>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}

export default Projects;

const rowStyle = {height:"45%", width:"100%"}
const mainCard = {height:"100%", backgroundColor:"#7C7C7C", borderRadius:"20px"}
const mainTitle = {color: "#52DEE5", margin: "10px", fontSize:"48px"}
const cardStyle = {height:"100%", backgroundColor:"#EEE5E9", borderRadius:"20px"}
const cardTitle = {color: "#383D3B", margin: "10px", fontSize:"36px"}