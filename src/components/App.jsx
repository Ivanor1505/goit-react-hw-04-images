import { Button } from './Button/Button';
import { Gallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './api';
import { AppBox } from './App.styled';

const { Component } = require('react');

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
    showModal: false,
    selectedImage: '',
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.setState({ loading: true, error: false });
      try {
        const newImages = await fetchImages(query, page);
        this.setState({ images: [...prevState.images, ...newImages.hits] });
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
      }

  handleSearch = value => {
    if (value === '') {
      return;
    }
    this.setState({ query: value });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  openModal = imageUrl => {
    this.setState({
      selectedImage: imageUrl,
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { images, showModal, loading } = this.state;
    return (
      <AppBox>
        <Searchbar onSubmit={this.handleSearch} />
        <Gallery allImages={this.state.images} onImageClick={this.openModal} />
        {images.length > 0 && !loading && (
          <Button loadMore={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal
            image={this.state.selectedImage}
            closeModal={this.closeModal}
          />
        )}
        {loading && <Loader />}
      </AppBox>
    );
  }
}
