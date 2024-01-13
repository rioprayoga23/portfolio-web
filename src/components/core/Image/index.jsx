import Image from "next/image";
import { useState } from "react";
import { DefaultImage } from "@/configs/images";

const CImage = ({ src, alt, w, h, className, layout, style }) => {
  const [isError, setIsError] = useState(false);
  const link = !isError ? src : DefaultImage;

  return (
    <Image
      src={link}
      alt={alt}
      width={w}
      height={h}
      className={`${className}`}
      layout={layout}
      onError={() => setIsError(true)}
      style={style}
      {...(typeof link === "string" && { placeholder: "blur" })}
      {...(typeof link === "string" && { blurDataURL: link })}
    />
  );
};

export default CImage;
