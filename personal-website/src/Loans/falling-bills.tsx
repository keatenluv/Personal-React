import React, { useState, useEffect } from 'react';
import png from './assets/100_bill.png';

const FallingBill = ({ duration, imgCount, idx }: { duration: number, imgCount: number, idx: number}) => {
    
    const [top, setTop] = useState(-5 - (idx % 100) * (Math.random() * (4 - 2) + 2));
    const [tran, setTran] = useState('none');
    const [left, setLeft] = useState(Math.random() * 100)


    useEffect(() => {
        const interval = setInterval(() => {
            const element = document.getElementById(idx.toLocaleString());
            const rect = element?.getBoundingClientRect();
            console.log(rect?.top)
            if (rect?.top! >= window.innerHeight) {
                clearInterval(interval);
                setTop(-10)
                setTran('none');
            } else {
                setTop(prevTop => prevTop + 1);
                setTran('5s');
                setLeft(left + (Math.random() < .5 ? -1 : 1));
            }
        }, duration);
        return () => clearInterval(interval);
    }, [duration, top])


    return (
        <img
            className='falling-bill'
            id={idx.toLocaleString()}
            src={png}
            alt='Falling Bill'
            style={{
                position: 'absolute',
                top: `${top}%`,
                left: `${left}%`,
                width: '6%',
                transition: `${tran}`,
            }}
        />
    )
}

export default FallingBill;