import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

const NewsDetailsCard = ({ news }) => {
    const {id, title, category_id, image_url, details } = news;
    console.log(id);
    
    return (
        <div className="card bg-base-100 shadow-sm p-5">
            <Helmet>
                <title>Dragon news | {`id`}</title>
            </Helmet>
            <figure>
                <img className='w-full h-[350px] object-cover'
                    src={image_url}
                    alt="img" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-accent'>{details}</p>
                <div className="card-actions justify-start">
                    <Link to={`/category/${category_id}`} className="btn btn-secondary"> <FaArrowLeftLong />All news in this categories</Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;