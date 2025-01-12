'use client'
import { useState, useEffect } from 'react';
import '@/app/globals.css';

interface LawData {
  title: string;
  Explanation: string;
  Punishment: string;
  BNSSection: string;
}

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<LawData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [news, setNews] = useState<any[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news"); 
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
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
    setError('');

    try {
      const response = await fetch(`/api/search?query=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError('An error occurred while fetching the data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="font container mx-auto h-[80vh] p-4" style={{ background: "#fcfaf6" }}>
        <h1 className="text-2xl font-bold text-center mb-4 pt-28">Search for laws</h1>

        <form onSubmit={handleSearch} className="flex justify-center mb-4 pb-10">
          <div className="relative w-2/3">
            <img src="search.png" alt="Search" className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6" />
            <input
              type="text"
              placeholder="Search for laws..."
              className="p-2 pl-10 border w-full rounded-2xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-2xl">
            Search
          </button>
        </form>

        {loading && <p className="pl-20 pt-20">Loading...</p>}
        {error && <p className="text-red-500 pl-20">{error}</p>}

        {results.length > 0 && (
          <div className="pl-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((law, index) => (
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white border-2 border-gray-500">
                <h3 className="text-xl font-semibold text-gray-800">{law.title}</h3>
                <p className="text-sm text-gray-600 mt-2"><strong>Explanation:</strong> {law.Explanation}</p>
                <p className="text-sm text-gray-600 mt-2"><strong>Punishment:</strong> {law.Punishment}</p>
                <p className="text-sm text-gray-600 mt-2"><strong>BNS Section:</strong> {law.BNSSection}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-500 h-1 opacity-90"></div>
      
      <div className="font flex h-[80vh]"
      style={{
        background: "linear-gradient(to top, #808080, #D6D6D6)", 
      }}
      >

        <div className="p-2 w-[30vw] border rounded-xl border-black">
          <h1 className="flex justify-center mt-16 text-3xl">Latest News</h1>
          <div className="p-4 h-[60vh] overflow-y-auto">
            <ul className="space-y-4">
              {news.map((item, index) => (
                <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="font pl-4 flex flex-col items-center h-[80vh]">

        <h1 className="text-5xl p-7 text-center mt-16">Most Common Crimes</h1>
        
        
        <div className="flex gap-8  justify-center">
          <div className="w-80 px-2 h-80 border-4 border-black rounded-2xl bg-gray-300 bg-opacity-80 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <h2 className="text-2xl text-center">Human Trafficking</h2>
            <h5 className="text-lg"><u>Explanation</u> - Trafficking humans for the purpose of illegally removing and selling their organs</h5>
            <h5 className="text-lg"><u>BNS Section</u> - 370-372</h5>
            <h5 className="text-lg"><u>Punishment</u> - Imprisonment up to 10 years and a fine</h5>
            <h5 className="text-lg"><u>BNSS Section</u> - 150-153 (procedures to combat Trafficking and organ trade)</h5>
          </div>
          <div className="w-80 px-2 h-80 border-4 border-black rounded-2xl bg-gray-300 bg-opacity-80 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <h2 className="text-2xl text-center">Corruption</h2>
            <h5 className="text-lg"><u>Explanation</u> - Misusing power for personal benefit, especially by government officials</h5>
            <h5 className="text-lg"><u>BNS Section</u> - 166-169</h5>
            <h5 className="text-lg"><u>Punishment</u> - Imprisonment up to 5 years and a fine</h5>
            <h5 className="text-lg"><u>BNSS Section</u> - 135-137 (dealing with corruption cases)</h5>
          </div>
          <div className="w-80 px-2 h-80 border-4 border-black rounded-2xl bg-gray-300 bg-opacity-80 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <h2 className="text-2xl text-center">Murder</h2>
            <h5 className="text-lg"><u>Explanation</u> - The killing of one person by another that is not legally justified or executable</h5>
            <h5 className="text-lg"><u>BNS Section</u> - 302 (Murder)</h5>
            <h5 className="text-lg"><u>Punishment</u> - Life imprisonment or death</h5>
            <h5 className="text-lg"><u>BNSS Section</u> - 110 (handling murder cases)</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;


