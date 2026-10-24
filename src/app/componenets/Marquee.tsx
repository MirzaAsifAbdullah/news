import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface INews {
    id: string;
    title: string;
    url: string;
    image: string;
    category: string;
    published_at: string;
    source: string;
  }

const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {
      cache: "no-store",
    });

    let headlines: INews[] = [];
    try {
      const data = await res.json();
      headlines = Array.isArray(data?.data) ? data.data : [];
    } catch {
      headlines = [];
    }
    // console.log(data);
    return (
    <div className="bg-red-700">
            <div className="flex max-w-7xl mx-auto " >
            <div className=" text-white py-2 px-4 bg-red-900 font-semibold">
                সর্বশেষ
            </div>
          {headlines.length > 0 ? (
            <MarqueeText direction="right" duration={15} className=" text-white py-1 px-4">
               {
                headlines.map(n => <Link
  key={n.id}
  href={`/news/${n.id}`}
  target="_blank"
  rel="noopener noreferrer"
>
    <span>
      <span className="p-1">•</span>
      <span>{n.title}</span>
    </span>
  </Link>
                )
            }
            </MarqueeText>
          ) : null}
        </div>
    </div>
    );
};

export default Marquee;