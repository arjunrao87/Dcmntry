import React from 'react';
import Modal from 'react-modal';

const VideoModal = (props) => {
  if (!props.selectedVideo) {
    return <div></div>;
  }
  return (
    <Modal
      isOpen={ props.modalIsOpen }
      onRequestClose={ () => props.onRequestClose() }>
      <div className="video-modal">
        <img alt="" src={ props.selectedVideo.images.original.url } />
        <p><strong>Source:</strong> <a href={ props.selectedVideo.source }>{ props.selectedVideo.source }</a></p>
        <p><strong>Rating:</strong> { props.selectedVideo.rating }</p>
        <button onClick={() => props.onRequestClose()}>close</button>
      </div>
    </Modal>
  );
};

export default VideoModal;