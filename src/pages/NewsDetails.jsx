import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const [news, setNews] = useState({})
        const {id} = useParams();
    const data = useLoaderData();
    // console.log(data, typeof id,news);

    useEffect(()=>{
        const newsDetails = data.find((singleNews) => singleNews.id === id);
        setNews(newsDetails)
    },[data ,id])
    
    return (
        <div>
            <header className='mt-5'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 my-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold mb-5'>News Details</h2>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;