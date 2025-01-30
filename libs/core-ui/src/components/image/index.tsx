import { useState } from 'react';

import { Image as ExpoImage, ImageProps as ExpoImageProps } from 'expo-image';

export interface ImageProps extends ExpoImageProps {
  name: string;
  source: number;
}

/*
  This image component will try to serve the asset image available on build time
  and specified in the app.json in "plugins": [
      [
        "expo-asset",
        {
          "assets": ["./assets/images/XXXX"]
        }
      ]
    ]
  If this image isn't available, we look for the image available in the same directory than our component
  All OrgImage should be wrap in a feature component in the lib folder
*/
export function Image({ name, source, ...props }: ImageProps) {
  // We assign the file name and try to access assets files
  const [currentSource, setCurrentSource] = useState<number | string>(name);

  const handleError = () => {
    // If we failed to access to assets files, we use the source filled with a required function (ex: require('./logo.png'))
    setCurrentSource(source);
  };

  return <ExpoImage source={currentSource} onError={handleError} {...props} />;
}

export default Image;
