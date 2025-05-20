import React from 'react';

export default function Logo () {

    const color = "#000";
    const letterSize = 16;
    const bracketSize = 32;

    const letterStyling = {
        fontFamily: 'Pixelify Sans, sans-serif',
        fontOpticalSizing: 'auto',
        fontWeight: 400,
        fontStyle: 'normal',
    }

    const bracketStyling = {
        fontFamily: 'Inconsolata, monospace',
        fontOpticalSizing: 'auto',
        fontWeight: 300,
        fontStyle: 'normal',
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 32 32"
        >

            <text x="0" y="24" fontSize={bracketSize} style={bracketStyling} fill={color}>{'{'}</text>
            <text x="8" y="18" fontSize={letterSize} style={letterStyling} fill={color}>j</text>
            <text x="16" y="18" fontSize={letterSize} style={letterStyling} fill={color}>n</text>
            <text x="19" y="24" fontSize={bracketSize} style={bracketStyling} fill={color}>{'}'}</text>

        </svg>
    );
}