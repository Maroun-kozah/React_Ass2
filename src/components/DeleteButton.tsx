import React from 'react';
import Button from 'react-bootstrap/Button';
import { Trash } from 'react-bootstrap-icons';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <Button variant="danger" onClick={onClick}>
      <Trash />
    </Button>
  );
};

export default DeleteButton;
