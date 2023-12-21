import React, { useState } from "react";
import Image from "next/image";
import { DefaultImage } from "@/configs/images";

const CImage = ({ src, alt, w, h, className }) => {
  const [isError, setIsError] = useState(false);

  return (
    <Image
      src={!isError ? src : DefaultImage}
      alt={alt}
      width={w}
      height={h}
      className={className}
      layout=""
      onBlur={"blur"}
      blurDataURL={src}
      onError={() => setIsError(true)}
    />
  );
};

export default CImage;
