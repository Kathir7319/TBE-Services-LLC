import React, { useState } from 'react';

export default function SafeImage({ src, alt, className = '', fallbackSrc = '/images/hero-lawn.jpg', ...props }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && fallbackSrc && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt || "TBE Services LLC"}
      onError={handleError}
      loading="lazy"
      className={className}
      {...props}
    />
  );
}
