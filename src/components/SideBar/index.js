import './style.scss';
import { ProgressCircle } from "../" ;
// import { useState } from 'react';

const posts = [
    {
        user: {
            name: "kevin",
            img: "",
        },
        img: "",
        description: "Did anyone get their grades back from the take-home assignment?"
    },
    {
        user: {
            name: "sofia",
            img: "",
        },
        img: "",
        description: "What resources are people using to prepare for the exam?"
    }
]

export default function SideBar() {
    return (
        <aside className="sidebar">
            <div id="user-header" className="">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>
                <h3>Jamal J8</h3>
                <div className="placeholder-img"></div>
            </div>
            <div id="gpa-container" className="">
                <h3>Current GPA: </h3>
                <ProgressCircle value={3.8} total={4.0}/>
            </div>

            <div id="" className="">
                <h3>Recent Discussions</h3>
                <div id="" className="posts-container">
                    {
                        posts.map((post, i) => {
                            const {user, description} = post;
                            return (
                                <div key={i} id="" className="">
                                    <div className="header">
                                        <div className="placeholder-img"></div>
                                        <h3>{user.name}</h3>
                                    </div>
                                    <div className="placeholder-thumbnail"></div>
                                    <p>{description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </aside>
    )
}
