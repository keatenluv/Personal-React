import './css/Board.css'
import { useState, useEffect } from 'react'

interface contentDict {
        [key: string]: string,
        0: string,
        1: string,
        2: string
    }

export default function Board() {

    const [head, setHead] = useState([0, 0])
    const [snakeBoard, setSnakeBoard] = useState<number[][]>([]);

    // Width and Height of the board
    const size = 16;

    // Define the 2D array that represents the board
    let board: number[][] = Array.from<number>({ length: size }).map(() =>
        Array.from<number>({ length: size }).fill(0)
    );

    
    const squareDesc: contentDict = {
        0: 'empty-square',
        1: 'player-square',
        2: 'food-square'
    }


    useEffect(() => {
        const x: number = Math.floor(Math.random() * size);
        const y: number = Math.floor(Math.random() * size);

        board[y][x] = 1;
        setHead([y, x])
    }, []);


    return (
        <div className='board'>
            {board.map((square, sindex: number) => (
                <div className='board-row'>
                    {square.map((value, index: number) => (
                        <div>
                            <Square contents={squareDesc[board[sindex][index]]}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function Square({ contents }: { contents: string}) {
    

    return (
        <div className={contents}>
        </div>
    );
}