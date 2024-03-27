import { useState, useEffect } from 'react';
import './css/loan-landing.css'
import { TypeAnimation } from 'react-type-animation';
import FallingBill from './falling-bills';
import DataForm from './data-input';
import { Outlet, Link } from "react-router-dom";
import './assets/100_bill.png'


interface BigBills {
    id: number;
    top: number;
}

export default function Loans() {

    const [bills, setBills] = useState<Record<string, number>[]>([]);
    const imageCount = 200;


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
            <div className="header">      
                Reduce student loan interest
                {/* <TypeAnimation
                    sequence={[
                        'Reduce student loan interest'
                    ]}
                    speed={65}
                    cursor={false}
                /> */}
            </div>
            <div className="get-started">
                <Link to={"/loan-info"}>
                    <button className="get-started-button">Get Started</button>
                </Link>
            </div>
        </div>
    )
}