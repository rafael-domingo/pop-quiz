import React from 'react'
import { useSelector } from "react-redux";
import General from '../components/Quiz/general';

export default function Quiz() {
    const quiz = useSelector(state => state.user.quiz)
    const divStyle = {

        
    }
    console.log(quiz[0].question)
    if (quiz.length > 1) {
        return (
            <div style={divStyle}>
                <General question={quiz[0].question} correct={quiz[0].correct} incorrect={quiz[0].incorrect}/>
            </div>
        )
    } else {
        return (
            <div>
                
            </div>
        )
        
    }
   
}