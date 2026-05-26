import { Link, useParams } from 'react-router-dom';
import { blogPosts, tagStyles } from './teamBlogData';

export default function TeamBlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <section className="px-4 sm:px-8 lg:px-20 pt-32 pb-16 bg-[#181818]">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex text-sm font-semibold text-orange-300 hover:text-orange-200 transition-colors mb-8"
          >
            Back to Team Blog
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${tagStyles[post.tag]}`}>
              {post.tag}
            </span>
            <p className="text-sm font-semibold text-orange-300">
              {post.date}
            </p>
            <p className="text-sm font-semibold text-gray-300">
              By {post.authors}
            </p>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-orange-500 mb-6">
            {post.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
            {post.description}
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 pb-20 bg-[#181818]">
        <article className="max-w-5xl mx-auto rounded-lg border border-white/15 bg-white/10 shadow-xl shadow-black/20 overflow-hidden">
          <div className="aspect-video bg-zinc-900">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-85"
            />
          </div>

          <div className="p-6 sm:p-10">
            <div className="space-y-8">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-3">
                    {section.heading}
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-200">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
