'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Search,
  Newspaper,
  Gavel,
  AlertTriangle,
  ShieldCheck,
  Loader2,
  ChevronRight,
  Scale,
} from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import '@/app/globals.css';

interface LawData {
  title: string;
  Explanation: string;
  Punishment: string;
  BNSSection: string;
}

interface NewsItem {
  title: string;
}

// Small utility for a subtle shimmer skeleton
const Shimmer = ({ className = '' }: { className?: string }) => (
  <div
    className={`relative overflow-hidden rounded-md bg-gray-100 ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    <style jsx global>{`
      @keyframes shimmer {
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<LawData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // ---------------------------------------------
  // Effects
  // ---------------------------------------------
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setNews(data);
      } catch (err) {
        console.error('News fetch error:', err);
      }
    };
    fetchNews();
  }, []);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setResults([]);
    setError('');
    if (!searchQuery.trim()) {
      setError('Please enter a search term');
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };

  const hasResults = results && results.length > 0;

  // micro-interaction variants
  const cardVariants = {
    rest: { y: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    hover: prefersReducedMotion
      ? { }
      : { y: -2, boxShadow: '0 10px 24px rgba(0,0,0,0.08)' },
  };

  const resultsContainer = (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05, duration: 0.5 }}
    >
      {results.map((law, index) => (
        <motion.article
          key={index}
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm transition-all"
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 rounded-xl bg-indigo-50 p-2">
              <Gavel className="w-5 h-5 text-indigo-600" />
            </div>
            <h3 className="text-base md:text-lg font-semibold text-gray-900 leading-snug">
              {law.title}
            </h3>
          </div>
          <dl className="mt-3 space-y-2 text-sm text-gray-700">
            <div>
              <dt className="font-medium text-gray-900">Explanation</dt>
              <dd className="mt-0.5 leading-relaxed">{law.Explanation}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Punishment</dt>
              <dd className="mt-0.5">{law.Punishment}</dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">BNS Section</dt>
              <dd className="mt-0.5">{law.BNSSection}</dd>
            </div>
          </dl>
          <div className="mt-4 flex items-center justify-end">
            <button className="inline-flex items-center gap-1.5 text-indigo-600 hover:text-indigo-700 text-sm font-medium">
              View details <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );

  return (
    <>
      <Head>
        <title>Law Search Portal | Provincial Justice</title>
        <meta
          name="description"
          content="Search Indian legal sections, punishments, and latest law-related news."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <header className="bg-white">
        <div className="relative px-6 pt-16 pb-12 sm:pt-20 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Search for Indian Laws
            </h1>
            <p className="text-gray-500 text-base sm:text-lg mt-3 flex justify-center items-center gap-2">
              <Search size={18} className="text-gray-400 hidden md:block" />
              Find details about crimes, sections, and punishments
            </p>
          </motion.div>
        </div>
      </header>

      {/* Search Bar */}
      <main className="px-6 py-6 sm:py-10">
        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
          aria-label="Search laws"
        >
          <div className="relative w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search for laws..."
              className="p-3 pl-11 w-full rounded-full border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300/70 shadow-sm outline-none transition text-sm sm:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search query"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 text-white font-medium rounded-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400/70 active:translate-y-[1px] transition-all"
            aria-label="Submit search"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Searching
              </>
            ) : (
              <>
                <Search className="w-4 h-4" />
                Search
              </>
            )}
          </button>
        </motion.form>

        {/* Messages */}
        <AnimatePresence>
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-3xl mx-auto mt-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-2xl bg-white p-6 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Shimmer className="w-10 h-10" />
                      <Shimmer className="h-4 w-2/3" />
                    </div>
                    <Shimmer className="h-3 w-full mt-4" />
                    <Shimmer className="h-3 w-5/6 mt-2" />
                    <Shimmer className="h-3 w-3/5 mt-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <p className="text-center text-red-500 font-medium mt-6">{error}</p>
        )}

        {/* Results */}
        {hasResults && resultsContainer}
      </main>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-8" />

      {/* News + Crimes */}
      <section className=" px-8 pb-12">
        <div className="grid lg:grid-cols-3 gap-8  mx-auto">
          {/* Latest News */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              <Newspaper className="w-5 h-5 sm:w-6 sm:h-6" /> Latest News
            </h2>
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
              <AnimatePresence initial={false}>
                {news.length > 0 ? (
                  news.map((item, index) => (
                    <motion.div
                      key={`${item.title}-${index}`}
                      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -6 }}
                      transition={{ duration: 0.25 }}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-colors"
                    >
                      <h3 className="text-sm sm:text-[15px] font-medium text-gray-800">{item.title}</h3>
                    </motion.div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No news available.</p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Most Common Crimes */}
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6 border border-gray-100"
          >
            <h2 className="text-xl flex items-center justify-center md:text-2xl font-bold text-gray-900 text-center mb-6">
              <Scale className='mr-2'/> Most Common Crimes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <CrimeCard
                title="Human Trafficking"
                explanation="Trafficking humans for illegal removal and sale of organs."
                section="370-372"
                punishment="Up to 10 years imprisonment and fine"
                icon={<AlertTriangle size={28} />}
              />
              <CrimeCard
                title="Corruption"
                explanation="Misusing power for personal benefit, especially by officials."
                section="166-169"
                punishment="Up to 5 years imprisonment and fine"
                icon={<Gavel size={28} />}
              />
              <CrimeCard
                title="Murder"
                explanation="Unlawful killing of one person by another."
                section="302"
                punishment="Life imprisonment or death"
                icon={<ShieldCheck size={28} />}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

interface CrimeCardProps {
  title: string;
  explanation: string;
  section: string;
  punishment: string;
  icon: React.ReactNode;
}

const CrimeCard = ({ title, explanation, section, punishment, icon }: CrimeCardProps) => (
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 260, damping: 18 }}
    className="p-5 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
  >
    <div className="flex justify-center mb-3 text-indigo-600">{icon}</div>
    <h3 className="text-base sm:text-lg font-semibold text-center text-gray-900">{title}</h3>
    <dl className="text-sm mt-2 text-gray-700 space-y-1.5">
      <div>
        <dt className="font-medium text-gray-900">Explanation</dt>
        <dd className="mt-0.5 leading-relaxed">{explanation}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">BNS Section</dt>
        <dd className="mt-0.5">{section}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-900">Punishment</dt>
        <dd className="mt-0.5">{punishment}</dd>
      </div>
    </dl>
  </motion.div>
);

export default Home;
