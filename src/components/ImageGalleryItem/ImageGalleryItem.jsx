import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const GalleryItems = ({ miniImg, onImageClick }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={miniImg} alt="image" onClick={() => onImageClick()} />
    </GalleryItem>
  );
};
