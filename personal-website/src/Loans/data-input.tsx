import { useState } from 'react'
import './css/loan-input.css'

interface Loan {
    id: number;
    amount: number;
    interestRate: number;
}


export default function DataForm() {

    const [numOfLoans, setNumOfLoans] = useState<number>(1);
    const [loans, setLoans] = useState<Loan[]>([]);

    const min = 1;
    const max = 10**1000;

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        alert(event.currentTarget[0]);
    }

    function modifyLoan(idx: number): void {
        let newLoans = [...loans];

        newLoans[idx];

        setLoans(newLoans);
    }

    const addLoan = () => {
        setNumOfLoans(x => x + 1);
        scrollToBottom();
    }

    const removeLoan = () => {
        if (numOfLoans > 1){ 
            setNumOfLoans(x => x - 1); 
            scrollToBottom();
        }
    }

    const scrollToBottom = () => {
        const loanDiv = document.getElementById("form-container");
        if (!loanDiv) return;
        setTimeout(() => {
            loanDiv.scrollTop = loanDiv.scrollHeight;    
        }, 0);
        
        console.log('here');
    }

    return (
        <div className='main-loan-input'>
            <div className='loan-info-container'>
                <div className='form-container' id='form-container'>
                    <form onSubmit={onSubmit} id='loanForm'>
                        {Array.from({ length: numOfLoans }, (_, index) => (
                            <LoanInput key={index} index={index} min={min}/>
                        ))}
                    </form>
                </div>
                <div className="button-container">
                    <button onClick={addLoan}>
                        Add another Loan
                    </button>
                    <button onClick={removeLoan}>
                        Remove Most recent loan
                    </button>
                    <button form='loanForm' type='submit'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}


function LoanInput({ index, min }: { index: number, min: number }) {
    return (
        <div className='loan' key={index}>
            <div className='loan-title'>
                Loan {index}
            </div>
            <div className='loan-info'>
                <div className='loan-section'>
                    <label htmlFor={`amount${index}`}>Amount:</label>
                    <input type='text' id={`amount${index}`} name={`amount${index}`}/>
                </div>
                <div className='loan-section'>
                    <label htmlFor={`rate${index}`}>Intrest Rate:</label>
                    <input type='text' id={`rate${index}`} name={`rate${index}`} min={min}></input>
                </div>
            </div>
            
        </div>
    )
}