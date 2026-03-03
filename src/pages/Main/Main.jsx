import styles from './styles.module.css'
import NewsBanner from "../../components/NewsBanner/NewsBanner.jsx";
import {useEffect, useState} from "react";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../components/NewsList/NewsList.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10
    const pageSize = 10;

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews(currentPage, pageSize);
            setNews(response.articles)
            setIsLoading(false);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage])

    function handleNextPage() {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    }

    function handlePreviousPage() {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    }

    function handlePageClick(pageNumber) {
        setCurrentPage(pageNumber);
    }

    return (
        <main className={styles.main}>
            {news.length > 0 && !isLoading ?  <NewsBanner item={news[0]}/> : <Skeleton count={1} type={'banner'} />}
            <Pagination
                totalPages={totalPages}
                handlePageClick={handlePageClick}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                currentPage={currentPage}
            />
            {!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'} />}
            <Pagination
                totalPages={totalPages}
                handlePageClick={handlePageClick}
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                currentPage={currentPage}
            />
        </main>
    )
}

export default Main