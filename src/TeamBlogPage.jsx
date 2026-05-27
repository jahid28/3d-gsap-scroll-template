import { Link } from 'react-router-dom';
import { blogPosts, tagStyles } from './teamBlogData';

export default function TeamBlogPage() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <section className="relative overflow-hidden px-4 sm:px-8 md:px-20 pt-32 pb-16 text-center">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center blur-sm"
          style={{ backgroundImage: "url('/competition/images/robosub2026-bots.jpg')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/75" aria-hidden="true" />

        <div className="relative z-10">
          <p className="text-lg text-gray-300 mb-3">RoboSub 2026</p>
          <h1 className="text-5xl sm:text-6xl font-bold text-orange-500 mb-6">
            Team Blog
          </h1>
          <p className="mx-auto max-w-3xl text-base sm:text-lg text-gray-300">
            Follow our mechanical, electrical, and software progress through our team blog posts.
          </p>
        </div>
      </section>

      <section className="bg-[#202020] px-4 sm:px-8 md:px-20 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-white/15 bg-white/10 backdrop-blur-md shadow-xl shadow-black/20 overflow-hidden"
              >
                <div className="aspect-video bg-zinc-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-orange-300 mb-2">
                        {post.date}
                      </p>
                      <h2 className="text-xl sm:text-2xl font-bold text-white">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-300">
                        By {post.authors}
                      </p>
                    </div>

                    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-semibold ${tagStyles[post.tag]}`}>
                      {post.tag}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  <ul className="space-y-2 text-sm sm:text-base text-gray-200 list-disc pl-5">
                    {post.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <div className="flex justify-center mt-6">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="bg-[#d73a1a] hover:bg-orange-600 text-white font-semibold px-8 py-2 rounded-lg shadow transition-all duration-200"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
