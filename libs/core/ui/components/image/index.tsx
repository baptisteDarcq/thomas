import { useState } from "react";

import { Image as ExpoImage, ImageProps as ExpoImageProps } from "expo-image";

export interface ImageProps extends ExpoImageProps {
  sources: number[];
}

export function Image({ sources, ...props }: ImageProps) {
  const [currentSource, setCurrentSource] = useState<number | string>(
    sources[0]
  );

  const handleError = () => {
    setCurrentSource(sources[1]);
  };

  return <ExpoImage source={currentSource} onError={handleError} {...props} />;
}

export default Image;
