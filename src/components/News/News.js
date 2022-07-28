import React from 'react'
import { getAllNews } from '../../services/ApiCall';
import { LinearProgress } from '@mui/material';

const News = () => {

    const [news, setNews] = useState(null)

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        getAllNews()
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(news);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <LinearProgress />
    } else {
        return (
            <div className="news-card">

            </div>
        );
    }
}

export default News