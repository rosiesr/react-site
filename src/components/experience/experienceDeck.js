import React from "react";
import "./experience.scss";
import ExperienceCard from "./experienceCard"

export const ExperienceDeck =  () => {
    
    return (
        <>
            {experienceData.map((experience) => (
                <>
                <ExperienceCard 
                title= {experience.title}
                header= {experience.header}
                body={experience.body}
                color={experience.color}
                hoverColor={experience.hoverColor}
                fontColor={experience.fontColor}/>
                <br className="smallspace"/>
                </>
            ))}
        </>
    )

}

export default ExperienceDeck;

const experienceData = [
    {
        title: "PagerDuty Software Engineering Intern", 
        header: "PagerDuty", 
        body: "Security team member. Worked on Vault, Chef, etc", 
        color: "#383D3B",
        hoverColor: "#333836",
        fontColor: "#EEE5E9"
    },
    {
        title: "Yale Computer Society: Vice President, Workshop Team Lead, Secretary", 
        header: "Yale Computer Society", 
        body: "Details about role in YCS here", 
        color: "#383D3B",
        hoverColor: "#333836",
        fontColor: "#EEE5E9"
    },
    {
        title: "Rocketansky: Software Engineering Intern", 
        header: "Rocketansky", 
        body: "Fall 2020 software engineering internship role", 
        color: "#7C7C7C",
        hoverColor: "#706f6f",
        fontColor: "#EEE5E9"
    },
    {
        title: "Yale College Council: Davenport Senator and Deputy Director of Academics", 
        header: "YCC", 
        body: "stuff I did on the YCC", 
        color: "#7C7C7C",
        hoverColor: "#706f6f",
        fontColor: "#EEE5E9"
    },
    {
        title: "Yale Physics Department: Core Based Peer Tutor", 
        header: "Yale Physics Department", 
        body: "Worked as a peer tutor", 
        color: "white",
        hoverColor: "#F7F7F7",
        fontColor: "#383D3B"
    },
    {
        title: "Other Experiences", 
        header: "Other Experiences", 
        body: "Member of Yale College council, FOOT leader, Mathnasium Instructor, etc", 
        color: "white",
        hoverColor: "#F7F7F7",
        fontColor: "#383D3B"
    }
]