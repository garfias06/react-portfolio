import React from "react";
import './styles/Resume.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Resume() {
    return (
        <div className="resume">
            <Card text="white" bg="dark">
                <Card.Body>
                    <Button variant="light" type="submit" className="downloadBtn">
                        Download Resume
                    </Button>
                    <section className="center">
                        <h4>Programming Languages</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>GraphQL</li>
                        </ul>
                        <h4>Libraries & Frameworks</h4>
                        <ul>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>React</li>
                        </ul>
                        <h4>Databases & Libraries</h4>
                        <ul>
                            <li>SQL</li>
                            <li>NoSQL</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                        </ul>
                        <h4>Tools & Platforms</h4>
                        <ul>
                            <li>GitHub</li>
                            <li>Heroku</li>
                        </ul>
                    </section>
                </Card.Body>
            </Card>
        </div>
    )
}


// export default function Resume() {
//     return (
//         <table className="resume">
//             <tr>
//                 <th></th>
//                 <td className="contact">
//                     <ul>
//                         <li>Phone: 737-708-3903</li>
//                         <li>Email: garfias06_23@outlook.com</li>
//                     </ul>
//                 </td>
//             </tr>
//             <tr className="name">
//                 <th colSpan={2}>
//                 <h2>ULISES GARFIAS</h2>
//                 </th>
//             </tr>
//             <tr className="objective">
//                 <th>OBJECTIVE</th>
//                 <td>Proactive individual with a positive attitude to work; fully motivated to occupy a maintenance technician position in Texas Lehigh Cement Company, bringing exceptional ability to manage emergencies promptly and provide long-lasting solutions. </td>
//             </tr>
//             <tr className="skills">
//                 <th>SKILLS & ABILITIES</th>
//                 <td>
//                     <ul>
//                         <li>Great time management </li>
//                         <li>Communicative </li>
//                         <li>Team-player </li>
//                         <li>Always willing to learn more</li>
//                         <li>Great attention to details</li>
//                     </ul>
//                 </td>
//             </tr>
//             <tr className="experience">
//                 <th>EXPERIENCE</th>
//                 <td>
//                     <p>TOTAL WELDING AND FABRICATION</p>
//                     <ul>
//                         <li>January 2022-July 2022</li>
//                         <li>Position: Rig Welder</li>
//                     </ul>
//                     <p>Texas Lehigh Cement Plant</p>
//                     <ul>
//                         <li>September 2022-March 2023</li>
//                         <li>Position: Maintenance Technician</li>
//                     </ul>
//                 </td>
//             </tr>
//         </table>
//     )
// }


// try putting this resume inside a card and see how it looks giving a shadow effect

