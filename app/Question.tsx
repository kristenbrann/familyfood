import React from 'react';

interface QuestionProps {
    text: string;
    revealed: boolean;
    onClick: () => void;
}


export const Question = ({
    text,
    revealed = true,
    onClick,
   ...props
}: QuestionProps) => {
    if (revealed) {
        return (
            <h3 style={{textAlign: 'center'}} onClick={onClick}>{text}</h3>
        )
    }
    return (
        <h3 style={{textAlign: 'center'}} onClick={onClick}>{'Question'}</h3>
    )
}
