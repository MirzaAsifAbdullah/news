import Link from 'next/link';

interface INav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}


const Navbar = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      cache: "no-store",
    });

    let navs: INav[] = [];
    try {
      const data = await res.json();
      navs = Array.isArray(data?.data) ? data.data : [];
    } catch {
      navs = [];
    }

    const filteredNavs = navs.filter((n) => n.scrapable);

    // console.log(navs);

    return (
       
        <div className='flex flex-wrap items-center justify-center gap-3 py-3 text-sm md:text-lg font-semibold text-gray-700'>
            <Link href={"/"} className="whitespace-nowrap">হোম</Link>
            {filteredNavs.map((n, i) => <Link key={i} href={`/category/${n.slug}`} className="whitespace-nowrap">{n.title}</Link>)}
        </div>
    );
};

export default Navbar;