import Link from 'next/link';

interface INav {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}


const Navbar = async() => {

    const res=await fetch("https://news-api-v2.vercel.app/api/categories");
    const data=await res.json();
    const navs: INav[]=data.data;
    const filteredNavs= navs.filter((n)=> n.scrapable);

    // console.log(navs);

    return (
       
        <div className='flex items-center justify-center gap-5 py-3 text-lg font-semibold text-gray-700'>
            <Link href={"/"} >হোম</Link>
            {filteredNavs.map((n,i)=><Link key={i} href={`/category/${n.slug}`} >{n.title}</Link>)}
        </div>    );
};

export default Navbar;