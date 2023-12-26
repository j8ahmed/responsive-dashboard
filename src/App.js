import './App.scss';
import { useState } from 'react';
import { NavMenu } from './components/'
import { HomePage } from './pages/'

export default function App() {
    return (
        <div className="app-container">
            <NavMenu/>
            <HomePage/>
        </div>
    )
}
