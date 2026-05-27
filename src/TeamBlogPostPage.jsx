import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp, FaCloud, FaCloudRain, FaSun } from 'react-icons/fa';
import ImageCarousel from './components/ImageCarousel';
import { blogPosts, tagStyles } from './teamBlogData';

function WeatherIcon({ weather }) {
  const normalizedWeather = weather?.toLowerCase();
  const iconClassName = 'text-base text-orange-200';

  if (normalizedWeather === 'sunny') {
    return <FaSun className={iconClassName} aria-label="Sunny" title="Sunny" />;
  }

  if (normalizedWeather === 'cloudy') {
    return <FaCloud className={iconClassName} aria-label="Cloudy" title="Cloudy" />;
  }

  if (normalizedWeather === 'rainy') {
    return <FaCloudRain className={iconClassName} aria-label="Rainy" title="Rainy" />;
  }

  return <span className="text-sm font-semibold text-gray-300">{weather}</span>;
}

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
  const [activeDiaryEntry, setActiveDiaryEntry] = useState(0);

  const togglePanel = (key) => {
    setOpenPanels((current) => ({
      ...current,
      [key]: !current[key]
    }));
  };

  const handleDiaryScroll = (event) => {
    const pageWidth = event.currentTarget.clientWidth;
    if (!pageWidth) return;

    setActiveDiaryEntry(Math.round(event.currentTarget.scrollLeft / pageWidth));
  };

  const goToDiaryEntry = (index) => {
    const diaryScroller = document.getElementById('diary-pages');
    if (!diaryScroller) return;

    diaryScroller.scrollTo({
      left: diaryScroller.clientWidth * index,
      behavior: 'smooth'
    });
    setActiveDiaryEntry(index);
  };

  const moveDiaryEntry = (direction, totalEntries) => {
    const nextIndex = Math.min(
      Math.max(activeDiaryEntry + direction, 0),
      totalEntries - 1
    );

    goToDiaryEntry(nextIndex);
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
              className="mb-8 inline-flex items-center gap-2 rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow transition-all duration-200 hover:bg-[#d73a1a]"
            >
              <FaChevronLeft className="text-xs" aria-hidden="true" />
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

            if (section.layout === 'versionedRows') {
              return (
                <section
                  key={section.heading}
                  className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8 shadow-xl shadow-black/20"
                >
                  <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-8">
                      {section.heading}
                    </h2>
                    <div className="space-y-8">
                      {section.versions.map((version) => (
                        <div
                          key={version.title}
                          className="grid grid-cols-1 gap-8 rounded-lg border border-white/10 bg-black/20 p-5 sm:p-6 lg:grid-cols-[1fr_26rem] lg:items-center"
                        >
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-orange-200">
                              {version.title}
                            </h3>
                            {version.subtitle && (
                              <p className="mt-1 text-sm sm:text-base font-semibold text-orange-100">
                                {version.subtitle}
                              </p>
                            )}
                            <p className="mt-4 text-justify text-base sm:text-lg leading-relaxed text-gray-200">
                              {version.body}
                            </p>
                            {version.details && (
                              <div className="mt-4 space-y-2">
                                {version.details.map((detail) => (
                                  <p key={detail.label} className="text-justify text-sm sm:text-base leading-relaxed text-gray-200">
                                    <span className="font-semibold text-white">{detail.label}: </span>
                                    {detail.body}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex justify-center lg:justify-end">
                            <ImageCarousel images={version.images} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            }

            if (section.layout === 'diaryPages') {
              return (
                <section
                  key={section.heading}
                  className="rounded-lg border border-white/15 bg-white/10 p-5 sm:p-8 shadow-xl shadow-black/20"
                >
                  <div className="mx-auto max-w-6xl">
                    <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-8">
                      {section.heading}
                    </h2>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => moveDiaryEntry(-1, section.entries.length)}
                        disabled={activeDiaryEntry === 0}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white transition-all duration-200 hover:bg-[#d73a1a] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/35"
                        aria-label="Previous diary entry"
                      >
                        <FaChevronLeft aria-hidden="true" />
                      </button>

                      <div
                        id="diary-pages"
                        className="flex min-w-0 flex-1 snap-x snap-mandatory gap-6 overflow-x-hidden pb-4"
                        onScroll={handleDiaryScroll}
                      >
                        {section.entries.map((entry, index) => (
                          <article
                            key={`${entry.date}-${entry.shortTitle}`}
                            className="grid w-full shrink-0 snap-center grid-cols-1 gap-8 rounded-lg border border-white/10 bg-black/20 p-5 sm:p-6 lg:grid-cols-[1fr_26rem] lg:items-center"
                          >
                          <div>
                            <div className="mb-5 flex flex-wrap items-center gap-3">
                              <span className="rounded-full border border-orange-300/40 bg-orange-400/15 px-3 py-1 text-xs font-semibold text-orange-100">
                                Entry {index + 1}
                              </span>
                              <span className="text-sm font-semibold text-orange-300">
                                {entry.date}
                              </span>
                              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1">
                                <WeatherIcon weather={entry.weather} />
                              </span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-orange-200">
                              {entry.shortTitle}
                            </h3>
                            <p className="mt-4 text-justify text-base sm:text-lg leading-relaxed text-gray-200">
                              {entry.body}
                            </p>
                          </div>

                          <div className="flex justify-center lg:justify-end">
                            <ImageCarousel images={entry.images} />
                          </div>
                          </article>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => moveDiaryEntry(1, section.entries.length)}
                        disabled={activeDiaryEntry === section.entries.length - 1}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white transition-all duration-200 hover:bg-[#d73a1a] disabled:cursor-not-allowed disabled:bg-white/15 disabled:text-white/35"
                        aria-label="Next diary entry"
                      >
                        <FaChevronRight aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-4 flex justify-center gap-2">
                      {section.entries.map((entry, index) => (
                        <button
                          key={`${entry.date}-${entry.shortTitle}-indicator`}
                          type="button"
                          onClick={() => goToDiaryEntry(index)}
                          className={`h-1.5 rounded-full transition-all duration-200 ${
                            activeDiaryEntry === index
                              ? 'w-10 bg-orange-500'
                              : 'w-7 bg-white/35 hover:bg-white/60'
                          }`}
                          aria-label={`Go to diary entry ${index + 1}`}
                        />
                      ))}
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
