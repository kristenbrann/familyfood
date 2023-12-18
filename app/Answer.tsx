import React from 'react';

interface AnswerProps {
    text: string;
    count: number;
    revealed: boolean;
    answerNumber: number | undefined;
    onClick: () => void;
}

interface AnswerRevealedProps {
    text: string;
    count: number;
    onClick: () => void;
}

interface AnswerHiddenProps {
    answerNumber: number | undefined;
    onClick: () => void;
}

export const Answer = ({
    text,
    count,
    revealed,
    answerNumber,
    onClick,
   ...props
}: AnswerProps) => {
    if (revealed) {
        return <AnswerRevealed text={text} count={count} onClick={onClick}/>
    }
    return <AnswerHidden answerNumber={answerNumber} onClick={onClick}/>
}

const AnswerHidden = ({ answerNumber, onClick }: AnswerHiddenProps) => (
    <div onClick={onClick}>
        <p style={{
            float: 'left',
            width: '275px',
            border: '1px solid #000000',
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '20px',
            paddingRight: '20px',
            height: '18.5px',
            textAlign: 'center'
        }}>{answerNumber}</p>
    </div>
)

const AnswerRevealed = ({
    text,
    count,
    onClick,
    ...props
}: AnswerRevealedProps) => {
    return (
        <div onClick={onClick}>
            <p style={{
                float: 'left',
                width: '250px',
                borderLeft: '1px solid #000000',
                borderTop: '1px solid #000000',
                borderBottom: '1px solid #000000',
                padding: '10px'
            }}>{text}</p>
            <p style={{
                float: 'right',
                width: '25px',
                border: '1px solid #000000',
                padding: '10px'
            }}>{count}</p>
        </div>

    )
}
