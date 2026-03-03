import styles from "./styles.module.css";

const Pagination = ({totalPages , handleNextPage , handlePreviousPage , handlePageClick, currentPage}) => {
    return (
        <div className={styles.pagination}>
            <button
                disabled={currentPage <= 1}
                onClick={handlePreviousPage}
                className={styles.arrow}>
                {'<'}
            </button>
            <div className={styles.list}>
                {Array(totalPages).fill().map((_, i) =>
                    <button
                        onClick={() => handlePageClick(i+1)}
                        className={styles.pageNumber}
                        disabled={currentPage === i+1}
                        key={i}>
                        { i+1 }
                    </button>)}
            </div>
            <button
                disabled={currentPage >= totalPages}
                onClick={handleNextPage}
                className={styles.arrow}>
                             {'>'}
            </button>
        </div>
    )
}

export default Pagination