import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { PlusCircle } from 'react-bootstrap-icons';

interface DriftCarFormProps {
  onSubmit: (title: string, description: string) => void;
}

const DriftCarForm: React.FC<DriftCarFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // State to manage button disabled state
  const [showAnimation, setShowAnimation] = useState(false); // State to manage animation visibility

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    updateButtonState(event.target.value, description);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    updateButtonState(title, event.target.value);
  };

  const updateButtonState = (title: string, description: string) => {
    setIsButtonDisabled(!title.trim() || !description.trim()); // Disable button if either input is empty
  };

  const handleSubmit = () => {
    onSubmit(title, description);
    setTitle('');
    setDescription('');
    setIsButtonDisabled(true); // Reset button state after submission
    setShowAnimation(true); // Show animation
    setTimeout(() => {
      setShowAnimation(false); // Hide animation after a few seconds
    }, 2000); // Adjust the timeout value as needed
  };

  return (
    <Form>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter title" 
          value={title} 
          onChange={handleTitleChange} 
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Enter description" 
          value={description} 
          onChange={handleDescriptionChange} 
        />
      </Form.Group>
      <br></br>
      <Button 
        variant="primary" 
        onClick={handleSubmit} 
        disabled={isButtonDisabled}
        size="lg"
      >
        <PlusCircle /> {/* PlusCircle icon for creating */}
      </Button>
      {showAnimation && <p className="animation-message">Task added!</p>}
      <br></br>
      <br></br>
    </Form>
  );
};

export default DriftCarForm;
