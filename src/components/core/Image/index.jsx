import Image from "next/image";
import { useState } from "react";

const CImage = ({ src, alt, w, h, className, layout, style }) => {
  const [isError, setIsError] = useState(false);
  const link = !isError ? src : "/public/default-image.jpg";

  const toBase64 = (src) =>
    typeof window === "undefined"
      ? Buffer.from(src).toString("base64")
      : window.btoa(src);

  return (
    <Image
      src={link}
      alt={alt}
      width={w}
      height={h}
      className={`${className}`}
      layout={layout}
      style={style}
      placeholder="blur"
      blurDataURL={`data:image/svg+xml;base64,${toBase64(src)}`}
      onError={() => setIsError(true)}
      priority
    />
  );
};

export default CImage;
