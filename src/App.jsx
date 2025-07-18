import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setVideoUrl('');

    try {
      const response = await fetch('http://localhost:5000/api/generate-video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.videoUrl) {
        setVideoUrl(data.videoUrl);
      } else {
        alert('Failed to generate video.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">AI Video Generator</h1>

      <textarea
        className="w-full max-w-lg p-4 text-black rounded mb-4"
        rows="4"
        placeholder="Enter your video idea or script..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Video'}
      </button>

      {videoUrl && (
        <div className="mt-6 w-full max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Generated Video:</h2>
          <video
            className="w-full rounded"
            controls
            src={videoUrl}
          >
            Your browser does not support the video tag.
          </video>
          <div className="mt-4 flex gap-2">
            <a
              href={videoUrl}
              download
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Download Video
            </a>
            <button
              onClick={() => setVideoUrl('')}
              className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
            >
              Clear
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
