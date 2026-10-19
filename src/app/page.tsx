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

  // Filter out media/social media sections (WhatsApp, Instagram, Facebook, etc.)
  const mediaKeywords = [
    'whatsapp', 'হোয়াটসঅ্যাপ', 'হ vọngসঅ্যাপ',
    'instagram', 'ইন্সটাগ্রাম', 'ইন্সটাগ্রামে',
    'facebook', 'ফেসবুক',
    'twitter', 'টুইটার',
    'telegram', 'টেলিগ্রাম',
    'youtube', 'ইউটিউব',
    'সামাজিক মাধ্যমে', 'social media',
  ];

  const filteredSections = sections.filter((section: any) => {
    const title = section.title?.toLowerCase() || '';
    return !mediaKeywords.some(keyword => title.includes(keyword.toLowerCase()));
  });

  const mainNews = filteredSections[0]?.articles || [];
  const otherNews: IotherNews[] = filteredSections.slice(1);

  console.log(otherNews);
  return (
    <div >
      

      <div className="grid gap-4 max-w-7xl mx-auto mt-5 px-4 md:grid-cols-3">
  {/* main news */}
  <div className="md:col-span-2">
    <MainNews news={mainNews} />
  
  
   <div   >
    {otherNews.map(os => <div className="" key={os.curationId}>
      <h1 className="font-bold mt-5  border-b-2 border-gray-700 py-2">{os.title}</h1>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
      {os.articles.map(news => <NewsCard key={news.id} news={news} />)}
     </div>
    </div>)}
  </div>
  </div>

 

  {/* side news */}
  <div className="md:col-span-1">
    <MostRead />
  </div>
</div>
    </div>
  );
}
