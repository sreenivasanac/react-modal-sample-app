import React from 'react';

class Modal extends React.Component {
  render() {

    const modalBackgroundStyle = {
      position: 'fixed',
      backgroundColor: '#000',
      padding: 50
    };

    const modalStyle = {
      backgroundColor: '#fff',
      maxWidth: 800,
      minHeight: 600,
      margin: '0 auto',
      padding: 20
    };

    return (
      <div className="modalBackground" style={modalBackgroundStyle}>
        <div className="modal" style={modalStyle}>
          <button onClick={this.props.toggleModal}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;