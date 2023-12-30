import './style.scss';
// import { useState } from 'react';

export default function ProgressCircle({value, total}) {
    const percent = Math.floor((value / total) * 100)
    return (
        <div className="progress-circle" style={{
            background: `conic-gradient(from 0deg, var(--theme_teal) 0%, var(--theme_teal) ${percent}%, var(--theme_white)  ${percent}%, var(--theme_white)  100%)`,
        }}>
            <h3>{value}</h3>
        </div>
    )
}
