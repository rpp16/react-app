import React, { useContext } from 'react';
import { TextContext } from '../textContext';

export default function MyPage() {
    const { textContext, onChangeText } = useContext(TextContext);
    
    return (
        <div> 
            { textContext === 'before' ? 'Welcome to Hogwarts!' : 'Explore the Enchanted' }
            <br />
            <button
                className="rounded"
                onClick={() => {
                    onChangeText();
                }}>
                Begin the Journey
            </button>
        </div>               
    );
}