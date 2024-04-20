import { useState, useCallback } from "react";
import { Image, Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface ImageSliderProps {
  images: Array<{ alt: string; src: string }>;
}

function ImageSlider(props: ImageSliderProps) {
  const { images } = props;
  const [position, setPosition] = useState(0);

  const handlePrev = useCallback(() => {
    if (position === 0) {
      setPosition(images.length - 1);

      return;
    }
    setPosition(position - 1);
  }, [position, images.length]);

  const handleNext = useCallback(() => {
    if (position === images.length - 1) {
      setPosition(0);

      return;
    }

    setPosition(position + 1);
  }, [images.length, position]);

  return (
    <div className="relative w-full h-[80%] flex max-md:h-[40vh]">
      <Button
        onClick={handlePrev}
        className="absolute z-20 h-full bg-transparent hover:bg-black max-md:h-full"
      >
        <FontAwesomeIcon icon={faChevronLeft} className="text-white text-6xl" />
      </Button>
      <Image
        alt={images[position].alt}
        src={images[position].src}
        className="h-full"
      />
      <Button
        onClick={handleNext}
        className="absolute right-0 z-20 h-full bg-transparent hover:bg-black max-md:h-full"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-white text-6xl"
        />
      </Button>
    </div>
  );
}

export default ImageSlider;
