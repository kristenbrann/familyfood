'use client'
import {Question} from "@/app/Question";
import {AnswerGrid} from "@/app/AnswerGrid";
import React, {useRef, useState} from "react";
import Image from 'next/image'
import {Strike} from "@/app/Strike";

export default function Home() {
    const [ currentQuestionIndex, setCurrentQuestionIndex ] = useState(0)
    const [strikeCount, setStrikeCount] = useState(0)
    const [questionRevealed, setQuestionRevealed] = useState(false)
    const [timer, setTimer] = useState("00:00:00");
    const Ref = useRef(null);

    // @ts-ignore
    const getTimeRemaining = (e) => {
        // @ts-ignore
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {total, hours, minutes, seconds,};
    };

    // @ts-ignore
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : "0" + hours) + ":" +
                (minutes > 9 ? minutes : "0" + minutes) + ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
    };

    // @ts-ignore
    const clearTimer = (e) => {
        setTimer("00:00:30");
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000);
        // @ts-ignore
        Ref.current = id;
    };

    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 30);
        return deadline;
    };

    const onClickNext = () => {
       if (currentQuestionIndex < questionList.length - 1) {
           setCurrentQuestionIndex(currentQuestionIndex+1)
       } else {
           setCurrentQuestionIndex(0)
       }
       setStrikeCount(0)
        setQuestionRevealed(false)
    }
    const onClickPrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex-1)
        } else {
            setCurrentQuestionIndex(questionList.length - 1)
        }
        setStrikeCount(0)
        setQuestionRevealed(false)
    }
    const onClickLogo = () => {
       if (strikeCount < 3) {
           setStrikeCount(strikeCount+1)
       }
    }
    const onClickQuestion = () => {
       setQuestionRevealed(!questionRevealed)
    }

    const onClickTimer = () => {
        clearTimer(getDeadTime())
    }
    return (
        <>
        <div style={{position: 'absolute', top:0, right: 0}}>
            <button style={{float: 'right', backgroundColor: '#ffffff', border: 'none'}} onClick={onClickTimer}>
                <Image
                    src="/timer.png"
                    alt="Start timer"
                    width={20}
                    height={20}
                    priority
                />
            </button>
            <span style={{margin: '5px'}} onClick={() => {clearTimer(undefined)}}>{timer}</span>
        </div>
      <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          textAlign: 'center'
      }}>

          <Image
              src="/logo4.png"
              alt="Family Food Logo"
              width={300}
              height={150}
              priority
              onClick={onClickLogo}
          />
          <div>
              <div style={{float: 'left'}}>
                  <button style={{
                      border: '1px solid',
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      marginBottom: '20px',
                      width: '100px'
                  }} onClick={onClickPrevious}>Previous</button>
              </div>
              <div style={{float: 'right'}}>
                  <button style={{
                      border: '1px solid',
                      backgroundColor: '#ffffff',
                      padding: '10px',
                      marginBottom: '20px',
                      width: '100px'
                  }} onClick={onClickNext}>Next</button>
              </div>
          </div>
          <div style={{
              width:'652px',
              border: '2px solid',
              padding: '20px'
          }}>
              <Question text={questionList[currentQuestionIndex].question} revealed={questionRevealed} onClick={onClickQuestion}/>
              <AnswerGrid answers={questionList[currentQuestionIndex].answers}/>
          </div>
          <div style={{marginTop: '10px', height: '19.5px'}} onClick={() => setStrikeCount(strikeCount - 1)}>
              {strikeCount > 0 && (<Strike/>)}
              {strikeCount > 1 && (<Strike/>)}
              {strikeCount > 2 && (<Strike/>)}
          </div>
      </div>
    </>)
}


const questionList = [
    {
        question: 'Name a food many people dislike.',
        answers: [
            {
                text: 'Anchovies',
                count: 22,
                number: 1
            },
            {
                text: 'Cilantro',
                count: 21,
                number: 2
            },{
                text: 'Mushrooms',
                count: 19,
                number: 3
            },{
                text: 'Olives',
                count: 15,
                number: 4
            },{
                text: 'Tuna',
                count: 14,
                number: 5
            },{
                text: 'Candy corn',
                count: 9,
                number: 6
            }
        ]
    },
    {
        question: 'Name a famous wizard.',
        answers: [
            {
                text: 'Harry Potter',
                count: 37,
                number: 1
            },
            {
                text: 'Merlin',
                count: 11,
                number: 2
            },{
                text: 'Gandalf',
                count: 11,
                number: 3
            },{
                text: 'Dr. Strange',
                count: 9,
                number: 4
            },{
                text: 'The Wizard of Oz',
                count: 8,
                number: 5
            },{
                text: 'Voldemort',
                count: 3,
                number: 6
            },{
                text: 'Newt Scamander',
                count: 2,
                number: 7
            }
        ]
    },
    {
        question: 'Name a reason you might be late for work.',
        answers: [
            {
                text: 'Traffic',
                count: 38,
                number: 1
            },
            {
                text: 'Woke up / left late',
                count: 26,
                number: 2
            },{
                text: 'Car trouble / accident',
                count: 11,
                number: 3
            },{
                text: 'Bus / train delay',
                count: 10,
                number: 4
            },{
                text: 'Dropping off kids',
                count: 4,
                number: 5
            },{
                text: 'Sick / medical emergency',
                count: 4,
                number: 6
            },{
                text: 'Weather',
                count: 3,
                number: 7
            },{
                text: 'Hungover',
                count: 2,
                number: 8
            }
        ]
    },
    {
        question: 'Name a place where people have to use coins.',
        answers: [
            {
                text: 'Vending machine',
                count: 29,
                number: 1
            },
            {
                text: 'Laundromat',
                count: 22,
                number: 2
            },{
                text: 'Bus / subway',
                count: 21,
                number: 3
            },{
                text: 'Parking meter',
                count: 20,
                number: 4
            },{
                text: 'Pay phone',
                count: 3,
                number: 5
            },{
                text: 'Bank',
                count: 2,
                number: 6
            }
        ]
    },
    {
        question: 'Name something associated with vampires.',
        answers: [
            {
                text: 'Twilight',
                count: 33,
                number: 1
            },
            {
                text: 'Blood',
                count: 29,
                number: 2
            },{
                text: 'Garlic',
                count: 21,
                number: 3
            },{
                text: 'Bat',
                count: 7,
                number: 4
            },{
                text: 'Cape',
                count: 7,
                number: 5
            },{
                text: 'Dracula',
                count: 5,
                number: 6
            },{
                text: 'Fangs',
                count: 4,
                number: 7
            },{
                text: 'Halloween',
                count: 4,
                number: 8
            }
        ]
    },
    {
        question: 'Other than feet, name something that runs.',
        answers: [
            {
                text: 'Water / Toilet',
                count: 37,
                number: 1
            },
            {
                text: 'Engine / Car',
                count: 24,
                number: 2
            },{
                text: 'Refrigerator',
                count: 10,
                number: 3
            },{
                text: 'Nose',
                count: 8,
                number: 4
            },{
                text: 'Pantyhose',
                count: 8,
                number: 5
            },{
                text: 'Clock',
                count: 3,
                number: 6
            }
        ]
    },
    {
        question: 'Fill in the blank: Hold the ____.',
        answers: [
            {
                text: 'Phone',
                count: 26,
                number: 1
            },
            {
                text: 'Door',
                count: 14,
                number: 2
            },{
                text: 'Mayo',
                count: 10,
                number: 3
            },{
                text: 'Elevator',
                count: 9,
                number: 4
            },{
                text: 'Line',
                count: 6,
                number: 5
            }
        ]
    }
]