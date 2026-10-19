import Image from "next/image";
import Marquee from "./componenets/Marquee";
import MainNews from "./componenets/MainNews";
import NewsCard from "./componenets/NewsCard";
import MostRead from "./componenets/MostRead";

interface IotherNews {
  curationId: string;
  title: string;
  articles: {
    id: string;
    link: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
  }[];
}

export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews= sections[0].articles;

  const otherNews: IotherNews[] = sections.slice(1);
  console.log(otherNews);
  // console.log(mainNews);
  return (
    <div >
      

      <div className="grid grid-cols-3 gap-4  max-w-7xl mx-auto mt-5 px-4">
  {/* main news */}
  <div className="col-span-2 ">
    <MainNews news={mainNews} />
  
  
   <div   >
    {otherNews.map(os => <div className="" key={os.curationId}>
      <h1 className="font-bold mt-5  border-b-2 border-gray-700 py-2">{os.title}</h1>
     <div className="grid grid-cols-3 gap-4 mt-2">
      {os.articles.map(news => <NewsCard key={news.id} news={news} />)}
     </div>
    </div>)}
  </div>
  </div>

 

  {/* side news */}
  <div className="col-span-1" >
    <MostRead />
  </div>
</div>
    </div>
  );
}
