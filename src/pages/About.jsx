import React, { useState } from 'react';
import { Heart, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const CountdownTimer = () => {
  const [time] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <span className="font-bold text-2xl">{String(time.days).padStart(2, '0')}</span>
        <span className="text-sm">Days</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex items-center gap-1">
        <span className="font-bold text-2xl">{String(time.hours).padStart(2, '0')}</span>
        <span className="text-sm">Hours</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex items-center gap-1">
        <span className="font-bold text-2xl">{String(time.minutes).padStart(2, '0')}</span>
        <span className="text-sm">Minutes</span>
      </div>
      <span className="text-2xl">:</span>
      <div className="flex items-center gap-1">
        <span className="font-bold text-2xl">{String(time.seconds).padStart(2, '0')}</span>
        <span className="text-sm">Seconds</span>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <div className="group relative">
      <div className="relative">
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
          -{product.discount}%
        </div>
        
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={() => setIsWishlist(!isWishlist)}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <Heart className={`w-4 h-4 ${isWishlist ? 'fill-red-500 stroke-red-500' : 'stroke-gray-600'}`} />
          </button>
          <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100">
            <Eye className="w-4 h-4 stroke-gray-600" />
          </button>
        </div>

        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
        
        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Add To Cart
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="font-medium">{product.name}</h3>
        <div className="flex gap-2">
          <span className="text-red-500">${product.salePrice}</span>
          <span className="text-gray-400 line-through">${product.originalPrice}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-4 h-4 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-200'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
};

const FlashSales = () => {
  const allProducts = [
    {
      name: 'HAVIT HV-G92 Gamepad',
      salePrice: 120,
      originalPrice: 160,
      discount: 40,
      rating: 5,
      reviews: 88,
      image: '/api/placeholder/300/300'
    },
    {
      name: 'AK-900 Wired Keyboard',
      salePrice: 960,
      originalPrice: 1160,
      discount: 35,
      rating: 4,
      reviews: 75,
      image: '/api/placeholder/300/300'
    },
    {
      name: 'IPS LCD Gaming Monitor',
      salePrice: 370,
      originalPrice: 400,
      discount: 30,
      rating: 5,
      reviews: 99,
      image: '/api/placeholder/300/300'
    },
    {
      name: 'S-Series Comfort Chair',
      salePrice: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4,
      reviews: 98,
      image: '/api/placeholder/300/300'
    },
    {
      name: 'S-Series Comfort Chair 2',
      salePrice: 375,
      originalPrice: 400,
      discount: 25,
      rating: 4,
      reviews: 98,
      image: '/api/placeholder/300/300'
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 4; // Số sản phẩm hiển thị cùng lúc

  const handlePrevious = () => {
    setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setStartIndex(prevIndex => 
      Math.min(allProducts.length - itemsToShow, prevIndex + 1)
    );
  };

  const currentProducts = allProducts.slice(startIndex, startIndex + itemsToShow);
  const canGoPrevious = startIndex > 0;
  const canGoNext = startIndex + itemsToShow < allProducts.length;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-5 h-10 bg-red-500" />
            <span className="text-red-500 font-medium">Today's</span>
          </div>
          <div className="flex items-center gap-20">
            <h2 className="text-3xl font-semibold">Flash Sales</h2>
            <CountdownTimer />
          </div>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            className={`p-2 border rounded-full hover:bg-gray-100 transition-colors
              ${!canGoPrevious ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={handleNext}
            disabled={!canGoNext}
            className={`p-2 border rounded-full hover:bg-gray-100 transition-colors
              ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {currentProducts.map((product, index) => (
          <ProductCard key={startIndex + index} product={product} />
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-8 py-3 bg-red-500 text-white rounded hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default FlashSales;