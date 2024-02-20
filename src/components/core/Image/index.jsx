import Image from "next/image";
import { useState } from "react";

const CImage = ({ src, alt, w, h, className, layout, style, shape }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const link = !isError ? src : "/default-image.jpg";

  return (
    <div className={`relative h-full w-full ${!shape && "overflow-hidden"}`}>
      <Image
        src={link}
        alt={alt}
        width={w}
        height={h}
        className={`object-cover duration-700 ease-in-out ${className} ${
          isLoading
            ? "scale-150 blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        }`}
        layout={layout}
        style={style}
        // placeholder="blur"
        // blurDataURL={`data:image/svg+xml;base64,${toBase64(src)}`}
        onError={() => setIsError(true)}
        onLoadingComplete={() => setIsLoading(false)}
        priority
      />
    </div>
  );
};

export default CImage;
