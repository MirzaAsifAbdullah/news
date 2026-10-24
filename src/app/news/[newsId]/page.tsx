import { notFound } from "next/navigation";
import Image from "next/image";

type NewsBlock = {
  text: string;
};

type NewsDescription = {
  blocks: NewsBlock[];
};

type News = {
  id: string;
  title: string;
  source: string;
  firstPublished: string;
  imageUrl: string;
  description: NewsDescription;
  tags: string[];
  text: string;
  sourceUrl: string;
};

type NewsResponse = {
  data: News;
};

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const data: NewsResponse = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-base-200 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <article className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">

          {/* Image */}
          <div className="relative w-full h-[300px] md:h-[500px]">
            <Image
              src={news.imageUrl}
              alt={news.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">

            {/* Source */}
            <div className="flex items-center gap-3 mb-5">
              <span className="badge badge-primary">
                {news.source}
              </span>

              <span className="text-sm text-gray-500">
                {news.firstPublished ? new Date(news.firstPublished).toLocaleDateString() : "-"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {news.title}
            </h1>

            {/* Description */}
            {news.description?.blocks?.map(
              (block: NewsBlock, index: number) => (
                <p
                  key={index}
                  className="text-lg font-medium text-gray-600 mb-6"
                >
                  {block.text}
                </p>
              )
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {news.tags?.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="badge badge-outline"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="divider"></div>

            {/* Article Content */}
            <div className="text-lg leading-8 text-gray-700 whitespace-pre-line">
              {news.text}
            </div>

            {/* Source Link */}
            <div className="mt-10">
              <a
                href={news.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Read Original Article
              </a>
            </div>

          </div>
        </article>
      </div>
    </main>
  );
};

export default NewsDetails;