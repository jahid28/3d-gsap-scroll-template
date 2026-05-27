import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ImageCarousel from './components/ImageCarousel';
import { blogPosts, tagStyles } from './teamBlogData';

function getSectionImages(post, section) {
  return section.images ?? [
    {
      src: post.image,
      caption: `${section.heading} image placeholder.`
    }
  ];
}

function SectionImagePanel({ images, hideCaption = false, fill = false }) {
  const image = images[0];

  if (!image) return null;

  return (
    <figure className={`w-full overflow-hidden rounded-xl border border-white/15 bg-black/30 ${fill ? 'h-full' : ''}`}>
      <div className={`flex justify-center bg-black/30 ${fill ? 'h-full items-start' : 'min-h-[26rem] items-center'}`}>
        <img
          src={image.src}
          alt={image.alt ?? image.caption}
          className={`h-full w-full ${fill ? 'object-contain' : 'max-h-[34rem] object-contain'}`}
        />
      </div>
      {!hideCaption && image.caption && (
        <figcaption className="bg-black/65 px-4 py-3 text-center text-sm sm:text-base text-white">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function TeamBlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug) ?? blogPosts[0];
  const [openPanels, setOpenPanels] = useState({});

  const togglePanel = (key) => {
    setOpenPanels((current) => ({
      ...current,
      [key]: !current[key]
    }));
  };

  const renderItemDropdowns = (section, className = 'mt-6 space-y-3') => (
    <div className={className}>
      {section.items.map((item) => {
        const key = `${section.heading}-${item.title}`;
        const isOpen = Boolean(openPanels[key]);

        return (
          <div key={item.title} className="rounded-lg border border-white/10 bg-black/20">
            <button
              type="button"
              onClick={() => togglePanel(key)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              aria-expanded={isOpen}
            >
              <h3 className="text-base sm:text-lg font-bold text-orange-200">
                {item.title}
              </h3>
              <span className="shrink-0 text-sm text-orange-200" aria-hidden="true">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-white/10 px-4 pb-4 pt-3">
                <div className="space-y-2">
                  {item.details.map((detail) => (
                    <p key={detail.label} className="text-justify text-sm sm:text-base leading-relaxed text-gray-200">
                      <span className="font-semibold text-white">{detail.label}: </span>
                      {detail.body}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <section className="px-4 sm:px-8 lg:px-20 pt-32 pb-16 bg-[#181818]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 items-center">
          <div>
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

            <h1 className="text-3xl sm:text-5xl font-extrabold text-orange-500 mb-6">
              {post.title}
            </h1>
            <p className="max-w-3xl text-justify text-base sm:text-lg text-gray-200 leading-relaxed">
              {post.description}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden border border-white/15 bg-white/10 shadow-xl shadow-black/20">
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-contain bg-zinc-900"
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 pb-20 bg-[#181818]">
        <article className="max-w-7xl mx-auto space-y-8">
          {post.sections.map((section) => {
            const sectionKey = `${post.slug}-${section.heading}`;
            const isSectionOpen = Boolean(openPanels[sectionKey]);

            if (section.layout === 'centeredImageDropdown') {
              return (
                <section
                  key={section.heading}
                  className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8 shadow-xl shadow-black/20"
                >
                  <div className="mx-auto max-w-4xl">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-6">
                      {section.heading}
                    </h2>
                    <div className="mb-6 flex justify-center">
                      <ImageCarousel images={getSectionImages(post, section)} />
                    </div>
                    <button
                      type="button"
                      onClick={() => togglePanel(sectionKey)}
                      className="flex w-full items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 px-4 py-4 text-left"
                      aria-expanded={isSectionOpen}
                    >
                      <span className="text-base sm:text-lg font-bold text-orange-200">
                        Read Details
                      </span>
                      <span className="shrink-0 text-sm text-orange-200" aria-hidden="true">
                        {isSectionOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </button>
                    {isSectionOpen && (
                      <div className="rounded-b-lg border-x border-b border-white/10 bg-black/10 px-4 py-4">
                        <p className="text-justify text-base sm:text-lg leading-relaxed text-gray-200">
                          {section.body}
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              );
            }

            if (section.layout === 'centeredImageAccordion') {
              return (
                <section
                  key={section.heading}
                  className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8 shadow-xl shadow-black/20"
                >
                  <div className="mx-auto max-w-5xl">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-3">
                      {section.heading}
                    </h2>
                    <p className="mx-auto mb-6 max-w-4xl text-center text-base sm:text-lg leading-relaxed text-gray-200">
                      {section.body}
                    </p>
                    <div className="mb-6 flex justify-center">
                      <ImageCarousel images={getSectionImages(post, section)} />
                    </div>
                    {section.items && renderItemDropdowns(section)}
                  </div>
                </section>
              );
            }

            if (section.layout === 'sideImageAccordion') {
              return (
                <section
                  key={section.heading}
                  className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8 shadow-xl shadow-black/20"
                >
                  <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-3">
                      {section.heading}
                    </h2>
                    <p className="mx-auto mb-8 max-w-4xl text-center text-base sm:text-lg leading-relaxed text-gray-200">
                      {section.body}
                    </p>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_32rem] lg:items-stretch">
                      <div>
                        {section.items && renderItemDropdowns(section, 'space-y-3')}
                      </div>
                      <div className="flex h-full items-stretch">
                        <SectionImagePanel images={getSectionImages(post, section)} hideCaption fill />
                      </div>
                    </div>
                  </div>
                </section>
              );
            }

            return (
              <section
                key={section.heading}
                className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8 shadow-xl shadow-black/20"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_26rem] gap-8 items-start">
                  <div className="px-3 sm:px-6 lg:px-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-justify text-base sm:text-lg leading-relaxed text-gray-200">
                      {section.body}
                    </p>
                    {section.items && renderItemDropdowns(section)}
                  </div>

                  <div className="flex justify-center lg:justify-end lg:self-start">
                    <ImageCarousel images={getSectionImages(post, section)} />
                  </div>
                </div>
              </section>
            );
          })}
        </article>
      </section>
    </div>
  );
}
