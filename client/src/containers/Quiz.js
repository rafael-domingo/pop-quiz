import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import General from '../components/Quiz/general';
import Score from '../components/Quiz/score';
import Results from './Results';
export default function Quiz() {
    const quiz = useSelector(state => state.user.quiz)
    const answered = useSelector(state => state.user.answered)
    const dispatch = useDispatch()
    
    const divStyle = {
        color: 'white'
        
    }
    if (quiz.length > 1 && answered <= 12) {
        console.log(quiz[answered].question)
        return (
            <div style={divStyle}>           
                <Score />
                <General index={answered}/>
            </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <Results />
            </div>
        )
        
    }
   
}