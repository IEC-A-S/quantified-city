import type { FC } from "react";

interface IImageGallery {
  imagesUrls: string[];
  activeImageIndex?: number;
}

export const ImageGallery: FC<IImageGallery> = ({
  imagesUrls,
  activeImageIndex,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      {imagesUrls.map((url, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: activeImageIndex === index ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        ></div>
      ))}
    </div>
  );
};
