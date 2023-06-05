import React from "react";
import './styles/Resume.css'

export default function Resume() {
    return (
        <table className="resume">
            <tr>
                <th></th>
                <td className="contact">
                    <ul>
                        <li>Phone: 737-708-3903</li>
                        <li>Email: garfias06_23@outlook.com</li>
                    </ul>
                </td>
            </tr>
            <tr className="name">
                <th colSpan={2}>
                <h2>ULISES GARFIAS</h2>
                </th>
            </tr>
            <tr className="objective">
                <th>OBJECTIVE</th>
                <td>Proactive individual with a positive attitude to work; fully motivated to occupy a maintenance technician position in Texas Lehigh Cement Company, bringing exceptional ability to manage emergencies promptly and provide long-lasting solutions. </td>
            </tr>
            <tr className="skills">
                <th>SKILLS & ABILITIES</th>
                <td>
                    <ul>
                        <li>Great time management </li>
                        <li>Communicative </li>
                        <li>Team-player </li>
                        <li>Always willing to learn more</li>
                        <li>Great attention to details</li>
                    </ul>
                </td>
            </tr>
            <tr className="experience">
                <th>EXPERIENCE</th>
                <td>
                    <p>TOTAL WELDING AND FABRICATION</p>
                    <ul>
                        <li>January 2022-July 2022</li>
                        <li>Position: Rig Welder</li>
                    </ul>
                    <p>Texas Lehigh Cement Plant</p>
                    <ul>
                        <li>September 2022-March 2023</li>
                        <li>Position: Maintenance Technician</li>
                    </ul>
                </td>
            </tr>
        </table>
    )
}
