import React from 'react'

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination" style={{display: "flex", justifyContent:"center"}}>
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        {/* <a onClick={() => paginate(number)} href="#" className="page-link">
                            {number}
                        </a> */}
                        <button onClick={() => paginate(number)} href="#" className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
