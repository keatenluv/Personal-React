import { useState, useEffect } from 'react';
import './css/loan-landing.css'
import { TypeAnimation } from 'react-type-animation';
import FallingBill from './falling-bills';
import './assets/100_bill.png'


interface BigBills {
    id: number;
    top: number;
}

export default function Loans() {

    const [bills, setBills] = useState<Record<string, number>[]>([]);
    const imageCount = 100;


    useEffect(() => {
        const initialImages = Array.from({ length: imageCount }, (_, index) => ({
            id: index,
            top: -5 + ((index % 10)*2)
        }));

        setBills(initialImages);
    }, [imageCount]);


    return (
        <div className="main">
            {bills.map((bill, index) =>
                <FallingBill 
                    key={bill.id}
                    imgCount = {imageCount}
                    idx = {index}
                    duration={100} 
                />
            )}

            <div className="loan-input">
                <div className="header">
                    <TypeAnimation
                        sequence={[
                            'Reduce student loan interest today.'
                        ]}
                        speed={65}
                        cursor={false}
                    />
                </div>
                <div className="get-started">
                        <button className="get-started-button">Get Started</button>
                </div>
            </div>
        </div>
    )
}