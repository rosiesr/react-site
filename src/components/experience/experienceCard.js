import React, { useState } from "react";
import "./experience.scss";
import { CardText, Card, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export const ExperienceCard =  ( { title, header, body, color, hoverColor, fontColor } ) => {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const [hover, setHover] = useState(false);
    const toggleHover = () => setHover(!hover);

    const cardStyleHover = {height: '15%', borderRadius: '20px', backgroundColor: hoverColor }
    const cardStyle = {height: '15%', borderRadius: '20px', backgroundColor: color }
    const cardTextStyle = {margin: "10px", color: fontColor }
  
  return (
      <>
          <Card style={hover ? cardStyleHover : cardStyle} onClick={toggle} onMouseOver={toggleHover} onMouseOut={toggleHover}>
            <CardText style={cardTextStyle}>{ title }</CardText>
          </Card>
          <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>{ header }</ModalHeader>
                <ModalBody> { body }</ModalBody>
              <ModalFooter>
              <Button color="secondary" onClick={toggle}>Close</Button>
              </ModalFooter>
          </Modal>
          <br className="smallspace"/>
      </>
  )
}

export default ExperienceCard;
