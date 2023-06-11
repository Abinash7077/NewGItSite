import React from 'react';
import { useSelector } from 'react-redux';

const TrendingHead = () => {
  const theme=useSelector((state)=>state.darker)
 
  return (
    <div className={theme.show?`w-full h-[200px] flex items-center justify-center flex-col text-center bg-[var(--color-trending-bg)] border-2 border-solid border-[var(--color-trending-border)]`:`w-full h-[200px] flex items-center justify-center flex-col text-center bg-slate-400 border-2 border-solid border-[var(--color-trending-border)] text-white`}>
      <h1 className='text-[35px] font-sans font-[500]'>Trending</h1>
      <p className='text-[656d76] text-[17px] font-sans'>See what the GitHUb community is most excited about today</p>
    </div>
  );
}

export default TrendingHead;
