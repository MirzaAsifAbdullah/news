import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface INews {
    id: string;
    link: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

const NewsCard = ({news}: {news: INews}) => {
    return (
      <Link href={`/news/${news.id}`} className="card w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
       <div className="card bg-base-100 max-w-7xl mx-auto shadow-sm">
              <figure>
                <Image
                  width={400}
                  height={200}
                  src={news.imageUrl}
                  alt={news.title}
                />
              </figure>
      
              <div className="card-body">
                <p className="text-sm text-gray-500">{news.category}</p>
                <h2 className="card-title">{news.title}</h2>
                <p>{news.description}</p>
              </div>
            </div>
      </Link>
    );
};

export default NewsCard;