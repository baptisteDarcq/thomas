import { Image } from '../image';

export function Logo() {
  return (
    <Image
      name="logo"
      source={require('./logo.png')}
      style={{ height: 200, width: 200 }}
      cachePolicy={'none'}
    />
  );
}

export default Logo;
