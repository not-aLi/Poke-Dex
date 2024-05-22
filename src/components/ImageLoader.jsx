import React, { useEffect, useState } from "react";

export default function ImageLoader({ src, alt }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
  }, [src]);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div className="Loader border-4 border-t-2 border-gray-200 h-12 w-12 rounded-full animate-spin"></div>
      ) : (
        <img src={src} alt={alt} />
      )}
    </div>
  );
}
