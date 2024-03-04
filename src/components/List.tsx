import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { DriftCar } from '../data/driftCarData';
import DeleteButton from './DeleteButton';
import { CSSTransition } from 'react-transition-group';

interface DriftCarListProps {
  cars: DriftCar[];
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

const DriftCarList: React.FC<DriftCarListProps> = ({ cars, onDelete, onToggleCompletion }) => {
  const [deletedCarId, setDeletedCarId] = useState<number | null>(null);

  const handleToggleCompletion = (id: number) => {
    onToggleCompletion(id);
  };

  const handleDelete = (id: number) => {
    setDeletedCarId(id);
    setTimeout(() => {
      onDelete(id);
      setDeletedCarId(null);
    }, 500); // Delay to match the CSS transition duration
  };

  return (
    <Table striped bordered hover className="text-left">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <CSSTransition key={car.id} in={car.id !== deletedCarId} timeout={500} classNames="car-item">
            <tr>
              <td>{car.title}</td>
              <td>{car.description}</td>
              <td>
                <label>
                  <input 
                    type="checkbox" 
                    checked={car.completed} 
                    onChange={() => handleToggleCompletion(car.id)} 
                  />
                </label>
              </td>
              <td>
                <DeleteButton onClick={() => handleDelete(car.id)} />
              </td>
            </tr>
          </CSSTransition>
        ))}
      </tbody>
    </Table>
  );
};

export default DriftCarList;
