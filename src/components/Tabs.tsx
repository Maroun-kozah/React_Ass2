import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DriftCarList from './List';
import DriftCarForm from './Form';
import Spinner from './Spinner'; // Import the Spinner component
import DriftCarItem from './Item'; // Import the DriftCarItem component
import { DriftCar } from '../data/driftCarData';

interface DriftCarTabsProps {
  activeCars: DriftCar[];
  completedCars: DriftCar[];
  onCreate: (title: string, description: string) => void;
  onDelete: (id: number) => void;
  onToggleCompletion: (id: number) => void;
}

const DriftCarTabs: React.FC<DriftCarTabsProps> = ({ activeCars, completedCars, onCreate, onDelete, onToggleCompletion }) => {
  const [loadingActiveTab, setLoadingActiveTab] = useState(false);
  const [loadingCompletedTab, setLoadingCompletedTab] = useState(false);

  const handleTabChange = (key: string | null) => {
    if (key === "active" && !loadingActiveTab) {
      setLoadingActiveTab(true);
      setTimeout(() => {
        setLoadingActiveTab(false);
      }, 1000); 
    } else if (key === "completed" && !loadingCompletedTab) {
      setLoadingCompletedTab(true);
      setTimeout(() => {
        setLoadingCompletedTab(false);
      }, 1000);
    }
  };

  return (
    <div className="drift-car-tabs-container">
      <Tabs defaultActiveKey="active" id="drift-car-tabs" className="mb-3" onSelect={handleTabChange}>
        <Tab eventKey="active" title="Active" className="mt-3">
          <DriftCarForm onSubmit={onCreate} />
          {activeCars.length === 0 ? (
            <p>No Active tasks.</p>
          ) : (
            loadingActiveTab ? <Spinner /> : <DriftCarList cars={activeCars} onDelete={onDelete} onToggleCompletion={onToggleCompletion} />
          )}
        </Tab>
        <Tab eventKey="completed" title="Completed" className="mt-3">
          {completedCars.length === 0 ? (
            <p>No Completed Tasks.</p>
          ) : (
            loadingCompletedTab ? <Spinner /> : 
            <div>
              {completedCars.map((car) => (
                <DriftCarItem key={car.id} id={car.id} title={car.title} description={car.description} completed={car.completed} onDelete={onDelete} onToggleCompletion={onToggleCompletion} />
              ))}
            </div>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default DriftCarTabs;
