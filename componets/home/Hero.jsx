import Link from 'next/link';

export default function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Dubai Real Estate Expert
          </h1>
          <p className="text-xl text-white mb-8">
            Specialized in property sales, rentals, and international investments in Dubai
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Sell Your Property
            </Link>
            <Link
              href="#invest"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Invest in Dubai
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}