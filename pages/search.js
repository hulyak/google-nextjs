import Head from 'next/head';
import Header from '../components/Header';

const Search = () => {
    return (
        <div>
            <Head>
                <title>Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            <h1>Search Page</h1>
            {/* Search Results */}
        </div>
    );
};

export default Search;
