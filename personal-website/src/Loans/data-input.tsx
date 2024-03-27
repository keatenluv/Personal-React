import { useState } from 'react'
import { remove } from 'three/examples/jsm/libs/tween.module.js';

interface Loan {
    id: number;
    amount: number;
    interestRate: number;
}


export default function DataForm() {

    const [numOfLoans, setNumOfLoans] = useState<number>(1);
    const [loans, setLoans] = useState<Loan[]>([]);

    function modifyLoan(idx: number): void {
        let newLoans = [...loans];

        newLoans[idx];

        setLoans(newLoans);
    }

    const addLoan = () => {
        setNumOfLoans(x => x + 1);
    }

    const removeLoan = () => {
        if (numOfLoans > 1){ setNumOfLoans(x => x - 1); }
    }

    return (
        <div>
            <form>
                {Array.from({ length: numOfLoans }, (_, index) => (
                    <div key={index}>
                        <label htmlFor={`amount${index}`}>Amount</label>
                        <input type='number' id={`amount${index}`} name={`amount${index}`}/>
                        <label htmlFor={`rate${index}`}>Intrest Rate</label>
                        <input type='number' id={`rate${index}`} name={`rate${index}`}></input>
                    </div>
                ))}
            </form>
            <button onClick={addLoan}>
                Add another Loan
            </button>
            <button onClick={removeLoan}>
                Remove Most recent loan
            </button>
        </div>
    )
}