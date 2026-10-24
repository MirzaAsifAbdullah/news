import NewsCard from '@/app/componenets/NewsCard';
import React from 'react';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string;
  lastPublished: string;
  source: string;
}


const CategoryPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${id}`, {
      cache: "no-store",
    });

    let data: any = {};
    let category: NewsItem[] = [];
    try {
      data = await res.json();
      category = Array.isArray(data?.data) ? data.data : [];
    } catch {
      data = {};
      category = [];
    }

    console.log(category);
    return (
        <div>
           <h1 className="p-4 text-2xl font-bold border-b-2 border-gray-500">{data?.title || "Category"}</h1>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {category.map(cn => <NewsCard key={cn.id} news={cn} />)}
       </div>
        </div>
    );
};

export default CategoryPage;