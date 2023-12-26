import './style.scss';
// import { useState } from 'react';

const courses = [
    {
        name: "math",
        img: "",
    },
    {
        name: "art",
        img: "",
    },
    {
        name: "history",
        img: "",
    },
    {
        name: "biology",
        img: "",
    },
    {
        name: "chemistry",
        img: "",
    },
    {
        name: "physics",
        img: "",
    },
]

export default function NavMenu() {
    return (
        <main id="home-page" className="page-container">
            <h2>Popular Courses</h2>
            <div className="courses-container">
                {
                    courses.map((course, i) => {
                        const {name} = course;
                        return (
                            <div 
                                key={i} 
                                className="course-item math"
                                style={{gridArea: `c${i+1}`}}
                            >
                                <h3 className="course-name">{name}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </main>
    )
}
