'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Search, Newspaper, Gavel, AlertTriangle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
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

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<LawData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);

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
      const response = await fetch(`/api/search?query=${searchQuery}`);
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

  return (
    <>
      <Head>
        <title>Law Search Portal | Provincial Justice</title>
        <meta name="description" content="Search Indian legal sections, punishments, and latest law-related news." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-gradient-to-br from-white to-gray-100 py-28 text-center shadow-inner">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center md:gap-6 gap-3"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Search for Indian Laws
          </h1>
        </motion.div>
        <p className="text-gray-600 text-md md:text-xl mt-4 flex justify-center items-center gap-2">
          <Search size={22} className="text-gray-500 hidden md:block" />
          Find details about crimes, sections, and punishments
        </p>
      </header>


      <main className="bg-[#f7f7f7] px-4 py-8">
        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full sm:w-2/3 md:w-1/2 shadow-md">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for laws..."
              className="p-3 pl-10 w-full rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
          >
            Search
          </button>
        </motion.form>


        {loading && <p className="text-center text-lg font-medium">Loading...</p>}
        {error && <p className="text-center text-red-500 font-medium">{error}</p>}

        {results.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {results.map((law, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-gray-300 bg-white p-5 shadow hover:shadow-md transition transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{law.title}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Explanation:</strong> {law.Explanation}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Punishment:</strong> {law.Punishment}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>BNS Section:</strong> {law.BNSSection}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </main>

      <div className="bg-gray-400 h-[2px] opacity-70 my-6"></div>

      <section className="bg-gradient-to-t from-gray-600 to-gray-200 py-10 px-4">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Latest News */}
          <div className="w-full lg:w-1/3 border rounded-xl border-black p-5 bg-white bg-opacity-90">
            <h1 className="flex justify-center items-center gap-2 text-2xl font-semibold mb-4">
              <Newspaper /> Latest News
            </h1>
            <div className="p-2 max-h-[60vh] overflow-y-auto space-y-3">
              {news.length > 0 ? (
                news.map((item, index) => (
                  <div key={index} className="p-3 bg-gray-100 rounded-lg shadow hover:bg-gray-200 transition">
                    <h3 className="text-base font-medium">{item.title}</h3>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-600">No news available.</p>
              )}
            </div>
          </div>

          {/* Most Common Crimes */}
          <div className="flex-1 p-4 bg-white bg-opacity-90 rounded-xl border border-black">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">⚖️ Most Common Crimes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <CrimeCard
                title="Human Trafficking"
                explanation="Trafficking humans for illegal removal and sale of organs."
                section="370-372"
                punishment="Up to 10 years imprisonment and fine"
                icon={<AlertTriangle size={32} />}
              />
              <CrimeCard
                title="Corruption"
                explanation="Misusing power for personal benefit, especially by officials."
                section="166-169"
                punishment="Up to 5 years imprisonment and fine"
                icon={<Gavel size={32} />}
              />
              <CrimeCard
                title="Murder"
                explanation="Unlawful killing of one person by another."
                section="302"
                punishment="Life imprisonment or death"
                icon={<ShieldCheck size={32} />}
              />
            </div>
          </div>
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
  <div className="w-full max-w-xs mx-auto p-6 border border-gray-400 rounded-2xl bg-white shadow-md hover:shadow-lg hover:scale-105 transition duration-300">
    <div className="flex justify-center mb-2 text-gray-700">{icon}</div>
    <h2 className="text-2xl text-center font-semibold">{title}</h2>
    <p className="text-sm mt-2"><strong>Explanation:</strong> {explanation}</p>
    <p className="text-sm mt-1"><strong>BNS Section:</strong> {section}</p>
    <p className="text-sm mt-1"><strong>Punishment:</strong> {punishment}</p>
  </div>
);

export default Home;



