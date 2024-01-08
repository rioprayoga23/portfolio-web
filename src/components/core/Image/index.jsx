import React, { useState } from "react";
import Image from "next/image";
import { DefaultImage } from "@/configs/images";

const CImage = ({ src, alt, w, h, className, layout }) => {
  const [isError, setIsError] = useState(false);

  return (
    <Image
      src={!isError ? src : DefaultImage}
      alt={alt}
      width={w}
      height={h}
      className={className}
      layout={layout}
      placeholder="blur"
      blurDataURL={"data:/default-image.jpg"}
      onError={() => setIsError(true)}
    />
  );
};

export default CImage;
