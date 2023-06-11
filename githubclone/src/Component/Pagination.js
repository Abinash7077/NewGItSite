import React from 'react';

const Pagination = () => {
  return (
    <>
  
    {/* {
        repo.length>0 && <div className="my-6">
            <span className={(page>1)?`px-6 py-2 text-[16px] border-2 border-solid rounded-lg cursor-pointer rounded-r-none border-gray-700`:`hidden`} onClick={()=>selectPageHandler(page-1)}>prev</span>
            {[...Array(repo.length / 10)].map((_,i)=>{
                return  <span className={(page===i+1)?`bg-slate-300 px-6 py-2 text-[16px] border-t-2 border-b-2  text-green-700 border-solid border-l-2 cursor-pointer border-gray-300`:`px-6 py-2 text-[16px] border-t-2 border-b-2 border-r-2 border-solid border-l-2 cursor-pointer border-gray-300`} onClick={()=>selectPageHandler(i+1)} key={i}>{i+1}</span>
                
            })}
            
            <span className={(page<repo.length/10)?`px-6 py-2 text-[16px] border-2 border-solid rounded-lg rounded-l-none cursor-pointer border-gray-700`:`hidden`} onClick={()=>selectPageHandler(page+1)}>Next</span>
        </div>
      }  */}
      {/* 
      .slice(page * 10 - 10, page * 10) */}
      
      {/* 
       const selectPageHandler=(selectPage)=>{
    if(selectPage>=1 && selectPage<=repo.length/5 && selectPage!= page)
    setPage(selectPage)
  } */}
      </>
  );
}

export default Pagination;
