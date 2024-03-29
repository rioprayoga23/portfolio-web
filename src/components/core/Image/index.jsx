import Image from "next/image";
import { useState } from "react";

const CImage = ({ src, alt, w, h, className, layout, style }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const link = !isError ? src : "/default-image.jpg";

  return (
    <div
      className={`rounded-none duration-700 ease-in-out relative h-full w-full overflow-hidden ${
        isLoading ? "wave-animation bg-gray-700" : "bg-transparent"
      }`}
    >
      <Image
        src={link}
        alt={alt}
        width={w}
        height={h}
        className={`object-cover duration-700 ease-in-out object-top ${className} ${
          isLoading ? "scale-110 blur-xl" : "scale-100 blur-0"
        }`}
        layout={layout}
        style={style}
        placeholder="empty"
        onError={() => setIsError(true)}
        onLoadingComplete={() => setIsLoading(false)}
        priority
      />
    </div>
  );
};

export default CImage;
