import { Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export function ImageComponent() {
  const matches = useMediaQuery('(min-width: 600px)');

  return <div>{matches ? <DesktopImage /> : <MobileImage />}</div>;
}

function DesktopImage() {
  return (
    <Image
      style={{
        margin: '0px',
        display: 'flex',
        width: '100%',
        height: '440px',
      }}
      src="image-product-desktop.jpg"
    ></Image>
  );
}

function MobileImage() {
  return (
    <Image
      style={{
        margin: '0px',
        display: 'flex',
        width: '375px',
        height: '100%',
        flexDirection: 'column',
      }}
      src="image-product-mobile.jpg"
    ></Image>
  );
}
