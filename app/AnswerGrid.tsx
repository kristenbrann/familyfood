import React, {useEffect, useState} from 'react';
import {Answer} from "./Answer";

interface AnswerGridProps {
    answers: {
        text: string;
        count: number;
        number: number;
    }[];
}


export const AnswerGrid = ({
    answers,
   ...props
}: AnswerGridProps) => {
    const [answer1Revealed, setAnswer1Revealed] = useState(false)
    const [answer2Revealed, setAnswer2Revealed] = useState(false)
    const [answer3Revealed, setAnswer3Revealed] = useState(false)
    const [answer4Revealed, setAnswer4Revealed] = useState(false)
    const [answer5Revealed, setAnswer5Revealed] = useState(false)
    const [answer6Revealed, setAnswer6Revealed] = useState(false)
    const [answer7Revealed, setAnswer7Revealed] = useState(false)
    const [answer8Revealed, setAnswer8Revealed] = useState(false)
    useEffect(() => {
        setAnswer1Revealed(false)
        setAnswer2Revealed(false)
        setAnswer3Revealed(false)
        setAnswer4Revealed(false)
        setAnswer5Revealed(false)
        setAnswer6Revealed(false)
        setAnswer7Revealed(false)
        setAnswer8Revealed(false)
    }, answers)
    const answer1 = answers.find(a => a.number === 1)
    const answer2 = answers.find(a => a.number === 2)
    const answer3 = answers.find(a => a.number === 3)
    const answer4 = answers.find(a => a.number === 4)
    const answer5 = answers.find(a => a.number === 5)
    const answer6 = answers.find(a => a.number === 6)
    const answer7 = answers.find(a => a.number === 7)
    const answer8 = answers.find(a => a.number === 8)
    return (
        <div style={{
            gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
            display: 'grid',
            gap: '1rem'
        }}>
            <Answer onClick={() => {if(answer1) setAnswer1Revealed(!answer1Revealed)}} text={answer1?.text || ''} count={answer1?.count || 0} revealed={answer1Revealed} answerNumber={answer1?.number}/>
            <Answer onClick={() => {if(answer5) setAnswer5Revealed(!answer5Revealed)}} text={answer5?.text || ''} count={answer5?.count || 0} revealed={answer5Revealed} answerNumber={answer5?.number}/>
            <Answer onClick={() => {if(answer2) setAnswer2Revealed(!answer2Revealed)}} text={answer2?.text || ''} count={answer2?.count || 0} revealed={answer2Revealed} answerNumber={answer2?.number}/>
            <Answer onClick={() => {if(answer6) setAnswer6Revealed(!answer6Revealed)}} text={answer6?.text || ''} count={answer6?.count || 0} revealed={answer6Revealed} answerNumber={answer6?.number}/>
            <Answer onClick={() => {if(answer3) setAnswer3Revealed(!answer3Revealed)}} text={answer3?.text || ''} count={answer3?.count || 0} revealed={answer3Revealed} answerNumber={answer3?.number}/>
            <Answer onClick={() => {if(answer7) setAnswer7Revealed(!answer7Revealed)}} text={answer7?.text || ''} count={answer7?.count || 0} revealed={answer7Revealed} answerNumber={answer7?.number}/>
            <Answer onClick={() => {if(answer4) setAnswer4Revealed(!answer4Revealed)}} text={answer4?.text || ''} count={answer4?.count || 0} revealed={answer4Revealed} answerNumber={answer4?.number}/>
            <Answer onClick={() => {if(answer8) setAnswer8Revealed(!answer8Revealed)}} text={answer8?.text || ''} count={answer8?.count || 0} revealed={answer8Revealed} answerNumber={answer8?.number}/>
        </div>
    )
}
