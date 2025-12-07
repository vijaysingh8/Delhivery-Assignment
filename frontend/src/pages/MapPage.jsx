import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MapPage() {
  const bots = useSelector((state) => state.bots.bots);

  const [svgContent, setSvgContent] = useState(null);
  const [positions, setPositions] = useState({});

  // Handle SVG Upload
  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setSvgContent(reader.result);
    reader.readAsText(file);
  };

  // Simulate random bot movement
  useEffect(() => {
    const interval = setInterval(() => {
      const newPositions = {};
      bots.forEach((bot) => {
        newPositions[bot.id] = {
          x: Math.random() * 400 + 20,
          y: Math.random() * 250 + 20,
        };
      });
      setPositions(newPositions);
    }, 1000);

    return () => clearInterval(interval);
  }, [bots]);

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Warehouse Map</h2>

      <input type="file" accept=".svg" onChange={handleUpload} />

      <div className="relative border p-4">
        {/* SVG Layout */}
        {svgContent && (
          <div
            className="w-full"
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        )}

        {/* Bot Overlays */}
        <svg
          className="absolute top-0 left-0"
          width="100%"
          height="100%"
        >
          {bots.map((bot) => (
            <circle
              key={bot.id}
              cx={positions[bot.id]?.x || 50}
              cy={positions[bot.id]?.y || 50}
              r="8"
              fill="red"
            >
              <title>{bot.id}</title>
            </circle>
          ))}
        </svg>
      </div>
    </div>
  );
}

export default MapPage;
