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
                fontColor={experience.fontColor}
                languages={experience.languages}
                other={experience.other}/>
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
        body: `As a software engineering intern on the Product Security Team at PagerDuty from January to April 2021, I worked on a variety of product security and infra security related projects.
        Most of my work centered around improving our secrets manager, Vault, by implementing OIDC authentication, upgrading the software, creating a high availability
        disaster recovery plan using zookeeper and other operational improvements. Additionally, I began the implementation of DMARC for the Rundeck.com domain to prevent phishing, 
        supported team members working on-call by helping with AWS Access Requests, and updated documentation. During Hackweek, I helped build a portal using react to help my team better automate
        data deletion requests, which won the Top Internal Hack prize.`, 
        languages: "Languages and Technologies: Ruby, Vault, Chef, AWS, React", 
        color: "#383D3B",
        hoverColor: "#333836",
        fontColor: "#EEE5E9"
    },
    {
        title: "Yale Computer Society: Vice President, Workshop Team Lead, Secretary", 
        header: "Yale Computer Society", 
        body: `As the Vice President of the Yale Computer Society, I am one of the leaders for one of the biggest computer science clubs at Yale that serves
        over 60 active members. The club provides development opportunities, events, workshops, and social events for those interested in computer science. During my
        time as the Workshops Team Lead, we hosted various workshops including tecnical interview preparation and introduction to Python.`, 
        color: "#383D3B",
        hoverColor: "#333836",
        fontColor: "#EEE5E9"
    },
    {
        title: "Rocketansky: Software Engineering Intern", 
        header: "Rocketansky", 
        body: `Rocketansky is a pre-seed cybersecurity startup working to create passwordless authentication and an automated security analytics platform. 
        As a software engineering intern, I co-develop the backend of the platform by writing AWS lambda functions, creating API endpoints, and managing data 
        using AWS S3.  Additionally, I designed the infrastructure to function as a SAML identity provider and maintained other back-end functionality in order 
        to launch the prototype.`,
        languages: `Languages and Technologies: Python, AWS`, 
        color: "#7C7C7C",
        hoverColor: "#706f6f",
        fontColor: "#EEE5E9"
    },
    {
        title: "Yale College Council: Davenport Senator and Deputy Director of Academics", 
        header: "Yale College Council", 
        body: `As an elected Davenport Senator, I served 400 students in Davenport College and advocated for policy changes at Yale. I worked as a member of the COVID-19 
        Health and Policy Chair where I helped to secure reimbursements for COVID testing for the off-campus students.  As Deputy Director of Academics, I helped organize a 
        town hall with Yale College Dean, Marvin Chun, advocated to remove the late course drop fee, and worked to expand certificate opportunities.  Additionally,
        I was a member of the Sophomore Class Council and previously served as an Events Committee Member and Treasurer of the First Year Class Council.
        `, 
        color: "#7C7C7C",
        hoverColor: "#706f6f",
        fontColor: "#EEE5E9"
    },
    {
        title: "Yale Physics Department: Core Based Peer Tutor", 
        header: "Yale Physics Department", 
        body: `I was selected by professor recommendation to work as a peer tutor, where I hosted office hours and ran extra help sessions
        for students in introductory physics during fall 2020 and fall 2021.`, 
        color: "white",
        hoverColor: "#F7F7F7",
        fontColor: "#383D3B"
    },
    {
        title: "Other Experiences", 
        header: "Other Experiences", 
        body: `Code Haven: computer science instructor for middle school students at New Haven public schools`, 
        languages: `First Year Outdoor Orientation Trip Leader: selected to lead backpacking trips for incoming first-years and co-head of teaching hard skills`, 
        other: `Yale Women’s Club Soccer: Social Chair, Outside midfielder`,
        color: "white",
        hoverColor: "#F7F7F7",
        fontColor: "#383D3B"
    }
]