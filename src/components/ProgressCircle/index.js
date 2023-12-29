import './style.scss';
// import { useState } from 'react';

export default function ProgressCircle({value, total}) {
    const percent = Math.floor((value / total) * 100)
    return (
        <div className="progress-circle" style={{
            background: `conic-gradient(from 0deg, teal 0%, teal ${percent}%, grey ${percent}%, grey 100%)`,
        }}>
            <h3>{value}</h3>
        </div>
    )
}
