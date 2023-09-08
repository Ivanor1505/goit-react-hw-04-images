import React, { Component } from 'react';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export class GalleryItems extends Component {
  render() {
    const { miniImg } = this.props;

    return (
      <GalleryItem>
        <GalleryItemImage
          src={miniImg}
          alt=""
          onClick={() => {
            this.props.onImageClick();
          }}
        />
      </GalleryItem>
    );
  }
}
