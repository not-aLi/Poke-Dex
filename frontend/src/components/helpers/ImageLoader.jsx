import React, { useEffect, useState } from "react";

export default function ImageLoader({ src, alt, Height, Width,h,w }) {

  /* This code snippet is a React functional component named `ImageLoader` that is responsible for
loading an image. */

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoading(false);
  }, [src]);

  return (
    <div className="flex justify-center items-center">
      {loading ? (
        <div
          className={`Loader border-4 border-t-2 border-gray-200 rounded-full animate-spin`}
          style={{ height: `${Height}px`, width: `${Width}px` }}
        ></div>
      ) : (
        <img src={src} alt={alt} loading="lazy" className="flex items-center" style={{height: `${h}px`, width: `${w}px`}} />
      )}
    </div>
  );
}
