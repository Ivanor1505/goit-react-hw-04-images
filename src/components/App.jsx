import React, { useState, useEffect } from 'react';
import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api';
import { AppBox } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSearch = value => {
    if (value === '') {
      return;
    }
    setPage(1);
    setImages([]);
    setQuery(value);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = imageUrl => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchImageData = async () => {
      if (query === '' && error === false) {
        return;
      }

      setLoading(true);
      setError(false);

      try {
        const newImages = await fetchImages(query, page);
        setImages(prevState => [...prevState, ...newImages.hits]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [query, page, error]);

  return (
    <AppBox>
      <Searchbar onSubmit={handleSearch} />
      <Gallery allImages={images} onImageClick={openModal} />
      {images.length > 0 && !loading && <Button loadMore={handleLoadMore} />}
      {showModal && <Modal image={selectedImage} closeModal={closeModal} />}
      {loading && <Loader />}
    </AppBox>
  );
};
