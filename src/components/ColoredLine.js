import React from 'react';

const ColoredLine = ({ color }) => {
    return (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 1,
                width: '100%'
            }}
        />
    );
}

export default ColoredLine;