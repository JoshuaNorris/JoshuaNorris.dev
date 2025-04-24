import React from 'react';

export default function Logo () {

    const color = "#000";
    const letterSize = 8;
    const bracketSize = 8;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
        style={{
            fontFamily: 'Pixelify Sans, sans-serif',
            fontOpticalSizing: 'auto',
            fontWeight: 400,
            fontStyle: 'normal',
        }}

            <text x="4" y="20" fontSize={fontSize} fill={color}>{'{'}</text>
            <text x="12" y="20" fontSize={letterSize} fill={color}>j</text>
            <text x="20" y="20" fontSize={letterSize} fill={color}>n</text>
            <text x="28" y="20" fontSize={fontSize} fill={color}>{'}'}</text>

        </svg>
    );
}