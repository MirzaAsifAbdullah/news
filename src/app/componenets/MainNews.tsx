import Image from "next/image";
import React from "react";
interface INews {
  id: string;
  link: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  
}

const MainNews = ({ news }: { news: INews[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="card bg-base-100 w-full md:w-96 shadow-sm">
        <figure>
          <Image
            width={400}
            height={200}
            src={firstNews.imageUrl}
            alt={firstNews.title}
          />
        </figure>

        <div className="card-body">
          <p className="text-sm text-gray-500">{firstNews.category}</p>
          <h2 className="card-title">{firstNews.title}</h2>
          <p>{firstNews.description}</p>
        </div>
      </div>

      <div className="w-full">
        {otherNews.slice(0, 5).map((n, i) => (
          <div key={i}>
            <div className="card bg-base-100 w-full shadow-sm border-b-2 border-gray-200">
              <div className="card-body">
                 <p className="text-sm text-gray-500">{n.category}</p>
                <h2 className="card-title">{n.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;