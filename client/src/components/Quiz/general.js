import React from 'react';

export default function General({question, correct, incorrect}) {
   
    const divStyle = {
        color: 'white'
    }
    const questionStyle = {
        
    }
    const answerStyle = {

    }
    return (
        <div style={divStyle}>
            <div style={questionStyle}>
                {question}
            </div>    
            <div style={answerStyle}>
                {correct}
            </div>
            <div style={answerStyle}>
                {incorrect}
            </div>
        </div>
    )
}