import { Group } from '@mantine/core';

export function ImageComponent() {
  return (
    <picture
      style={{
        margin: '0px',
        display: 'flex',
        width: '50%',
        height: '440px',
      }}
    >
      <source media="(max-width: 30rem)" srcSet="image-product-mobile.jpg" />
      <source media="(min-width: 50rem)" srcSet="image-product-desktop.jpg" />
      <img src="image-product-desktop.jpg" alt="preview-photo" />
    </picture>
  );
}
