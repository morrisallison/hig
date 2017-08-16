import React, { Component } from 'react';
import PlaygroundSection from '../PlaygroundSection';
import { Button, Modal } from '../../react-hig';

class ModalSection extends Component {
  constructor() {
    super();
    this.state = { isOpen: false };
  }

  closeModal = (event) => {
    event.preventDefault();
    this.setState({ isOpen: false });
  };

  openModal = (event) => {
    event.preventDefault();
    this.setState({ isOpen: true });
  };

  render() {
    const buttonProps = [
      { title: 'Cancel', type: 'secondary', onClick: this.closeModal },
      { title: 'Ok', onClick: this.closeModal }
    ];

    return (
      <PlaygroundSection title="Modal">
        <Button title="Open modal" onClick={this.openModal} />
        <Modal
          title="Are you sure?"
          isOpen={this.state.isOpen}
          buttons={buttonProps}
          body="This is the body of my modal"
          headerColor="gray"
          onClose={this.closeModal}
        >
          <h1>This is my modal content</h1>
        </Modal>
      </PlaygroundSection>
    )
  }
}
export default ModalSection;