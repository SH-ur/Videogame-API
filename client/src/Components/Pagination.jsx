import '../Css/pagination.css'
const Pagination= ({gamesPerPage, pagination, allGames, currentPage})=>{
    const pagesNum = [];

    for(let i =1; i<=Math.ceil(allGames.length/gamesPerPage); i++){
        pagesNum.push(i);
    }

    const handlerPrev =()=>{ 
        if(currentPage===1) return;
    pagination(currentPage-1);
console.log(currentPage)}

    const handlerNext= ()=>{
        if(currentPage === pagesNum.length) return
        pagination(currentPage +1);
    }

    return(
        <div className="pagination">
            
                <button className='button' onClick={handlerPrev} > Previous </button>
            
            {pagesNum&&pagesNum.map(page=>{
                return(
                    <div key={page} className="pages">
<button onClick={()=> pagination(page)}> {page}</button>
                    </div>
                )
            })}
        
                <button className="button" onClick={handlerNext} >Next</button>
            
        </div>
    )
}

export default Pagination;