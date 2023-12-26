import './style.scss';
// import { useState } from 'react';

const menuItems = [
    {
        link: "",
        name: "home",
        icon: ""
    },
    {
        link: "",
        name: "profile",
        icon: ""
    },
    {
        link: "",
        name: "schedule",
        icon: ""
    },
    {
        link: "",
        name: "classes",
        icon: ""
    },
    {
        link: "",
        name: "settings",
        icon: ""
    },
]

export default function NavMenu() {
    return (
        <aside className="nav-container">
            <h3>Student Dashboard</h3>
            <nav>
                <ul>
                    {
                        menuItems.map((item, i) => {
                            const {name} = item
                            return (
                                <li key={i} className="menu-item">
                                    <div className="placeholder-img"></div>
                                    <h4 className="menu-item-name">{name}</h4>
                                </li>
                            )
                        })

                    }
                </ul>
            </nav>
        </aside>
    )
}
