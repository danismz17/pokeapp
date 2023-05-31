export default function SearchFilter() {
    return (
        <>
            <div className="filter-block-container">
                <div className="input-search-container">
                    <div className="full-search-container">
                        <span> <img src="Images/Icons/search.svg" alt="" /></span>
                        <input type="search" placeholder='Search' />
                    </div>
                </div>

                <div className='filter-container-button'>
                    <button onClick={open}>
                        <img src="/Images/Icons/sort.svg" alt="" />
                    </button>
                </div>

            </div>

        </>
    )
}
