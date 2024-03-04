import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

interface DriftCarItemProps {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

const DriftCarItem: React.FC<DriftCarItemProps> = ({ id, title, description, completed, onDelete, onToggleCompletion }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="mb-2">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <input 
              type="checkbox" 
              checked={completed} 
              onChange={() => onToggleCompletion(id)} 
            />
            <span className="ml-2">{completed ? 'Completed' : 'Active'}</span>
          </div>
          <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DriftCarItem;
