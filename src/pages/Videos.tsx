import { useState, useEffect } from 'react';
import axios from 'axios';

const MAX_RESULTS = 10;
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_URL;

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
  contentDetails?: {
    duration: string;
  };
}

const workoutCategories = [
  { id: 'all', name: 'All Workouts' },
  { id: 'hiit', name: 'HIIT' },
  { id: 'strength', name: 'Strength Training' },
  { id: 'yoga', name: 'Yoga' },
  { id: 'cardio', name: 'Cardio' },
  { id: 'pilates', name: 'Pilates' },
  { id: 'stretching', name: 'Stretching' },
];

const durationFilters = [
  { id: 'all', name: 'Any Duration' },
  { id: 'short', name: 'Under 10 min' },
  { id: 'medium', name: '10-30 min' },
  { id: 'long', name: 'Over 30 min' },
];

const Videos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [pageToken, setPageToken] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [currentSearch, setCurrentSearch] = useState('');
  const [error, setError] = useState<string | null>(null);

  console.log('API Key:', API_KEY); // Add this for debugging
  console.log('API Base URL:', API_BASE_URL); // Add this for debugging

  const searchVideos = async (query: string, loadMore: boolean = false) => {
    if (!query.trim() && selectedCategory === 'all') return;
    
    if (!API_KEY) {
      setError('YouTube API key is not configured. Please check your environment variables.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const searchQuery = query || 
        (selectedCategory !== 'all' ? `${selectedCategory} workout` : 'fitness workout');
      
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            part: 'snippet',
            maxResults: MAX_RESULTS,
            q: searchQuery + ' workout fitness gym',
            type: 'video',
            order: 'viewCount',
            key: API_KEY,
            pageToken: loadMore ? pageToken : undefined,
            videoDuration: selectedDuration !== 'all' ? selectedDuration : undefined,
          },
        }
      );

      if (loadMore) {
        setVideos(prev => [...prev, ...response.data.items]);
      } else {
        setVideos(response.data.items);
      }

      setPageToken(response.data.nextPageToken || null);
      setHasMore(!!response.data.nextPageToken);
      setCurrentSearch(searchQuery);
    } catch (error) {
      console.error('Error fetching videos:', error);
      setError('Failed to fetch videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPageToken(null);
    setHasMore(true);
    searchVideos('Killer Leg Day Workout');
  }, [selectedCategory, selectedDuration]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPageToken(null);
    setHasMore(true);
    searchVideos(searchQuery);
  };

  const handleLoadMore = () => {
    if (hasMore && !loading) {
      searchVideos(currentSearch, true);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="section-title">Workout Videos</h1>
      
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        <form onSubmit={handleSearch} className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for workout videos..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </form>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {workoutCategories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setPageToken(null);
                setHasMore(true);
              }}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Duration Filter */}
        <div className="flex flex-wrap gap-2">
          {durationFilters.map(filter => (
            <button
              key={filter.id}
              onClick={() => {
                setSelectedDuration(filter.id);
                setPageToken(null);
                setHasMore(true);
              }}
              className={`px-4 py-2 rounded-lg ${
                selectedDuration === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading videos...</p>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id.videoId} className="card hover:shadow-lg transition-shadow duration-200">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h2 className="text-xl font-semibold mb-2 mt-4 line-clamp-2">{video.snippet.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {video.snippet.description}
            </p>
            <div className="flex justify-between items-center">
              <a
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Watch on YouTube
              </a>
              <button
                onClick={() => {
                  const videoUrl = `https://www.youtube.com/watch?v=${video.id.videoId}`;
                  navigator.clipboard.writeText(videoUrl);
                }}
                className="text-gray-500 hover:text-gray-700"
                title="Copy video link"
              >
                📋
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && !loading && videos.length > 0 && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Load More Videos
          </button>
        </div>
      )}

      {/* No Results */}
      {!loading && videos.length === 0 && !error && (
        <div className="text-center py-8">
          <p className="text-gray-600">No videos found. Try a different search term or filter.</p>
        </div>
      )}
    </div>
  );
};

export default Videos; 