import React from 'react';

interface StrikeProps {
}


export const Strike = ({
   ...props
}: StrikeProps) => {
    return (
        <span style={{color: '#a92121', fontWeight: 'bold'}}>{'[X]'}</span>
    )
}
