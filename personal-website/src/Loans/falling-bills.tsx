import React, { useState, useEffect } from 'react';
import png from './assets/100_bill.png';

const FallingBill = ({ duration, imgCount, idx, onOutOfView }: { duration: number, imgCount: number, idx: number, onOutOfView: () => void}) => {
    
    const [top, setTop] = useState(-10 -(( idx % imgCount ) * 4 ));


    useEffect(() => {
        const interval = setInterval(() => {
            console.log(top)
            if (top >= 30) {
                clearInterval(interval);
                onOutOfView();
            } else {
                setTop(prevTop => prevTop + 1);
            }
        }, duration);
        return () => clearInterval(interval);
    }, [duration, top])


    return (
        <img
            className='falling-bill'
            src={png}
            alt='Falling Bill'
            style={{
                position: 'absolute',
                top: `${top}%`,
                left: `${Math.random() * 100}%`,
                width: '5%',
                transition: '5s',
            }}
        />
    )
}

export default FallingBill;