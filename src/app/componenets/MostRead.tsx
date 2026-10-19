import Link from 'next/link';
import React from 'react';
interface INews {
    id: string;
    link: string;
    title: string;
   
}
const MostRead = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const mostRead: INews[] = data.data;
    return (
        <div className="card bg-gray-100 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-4">সর্বাধিক পঠিত</h1>

            <div>
                {mostRead.map((news,index) =><Link
  key={news.id}
  href={`/news/${news.id}`}
  target="_blank"
  rel="noopener noreferrer"
>
    <div className='flex items-center mt-2'>
        <span className=" mr-2 text-red-500">{index + 1}.</span>
        <h2 className="font-semibold border-b border-gray-300">{news.title}</h2>
    </div>
</Link> )}
            </div>
        </div>
    );
};

export default MostRead;