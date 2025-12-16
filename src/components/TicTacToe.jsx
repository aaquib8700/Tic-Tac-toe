import React, { useEffect, useState } from 'react'

const  App = () => {
 const[matrix,setMatrix]=useState(Array(9).fill(null));  
 const[isXTurn,setXturn]=useState(true);
 const[won,setWon]=useState(null)

 const handleUserClick=(e)=>{
  const pos=e.target.id;
  console.log(pos);
  const copymatrix=[...matrix];
  copymatrix[pos]=isXTurn ? 'X':'O';
  setMatrix(copymatrix);
  setXturn((prev)=>!prev)
 }

 const decideWinner=()=>{
  const lines=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8 ],
    [2,4,7]
  ]
  for(let i=0;i<lines.length;i++){
    const[a,b,c]=lines[i];
    if(matrix[a] && matrix[a]===matrix[b] && matrix[a]===matrix[c]){
      setWon(matrix[a]);
    }
  }
 }

 useEffect(()=>{
  decideWinner()
 },[matrix])

 const handleReset=()=>{
  setMatrix(Array(9).fill(null));
  setWon(null);
  setXturn(true);
 }
  return (
    <div className='flex flex-col items-center h-[500px] text-center'>
      <h1>Tic Tac Toe </h1>
      <div className='grid grid-cols-3'onClick={handleUserClick}>
        {matrix.map((item,index)=>(
          <div className='w-[70px] h-[70px] bg-zinc-200 border-1 hover:bg-white flex items-center justify-center font-semibold text-2xl' key={index} id={index}>{item}</div>
        ))}
      </div>
      <div className='mt-5'>
        <button onClick={handleReset}>Reset</button>
        <div>Next Player:{isXTurn ? 'X':'O'}</div>
        {won && <div>Player {won} won the Game</div>}
      </div>
    </div>
  )
}

export default  App