import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import DriftCarTabs from './components/Tabs';
import { DriftCar, initialCars } from './data/driftCarData';

const App: React.FC = () => {
  const [activeCars, setActiveCars] = useState<DriftCar[]>(initialCars.filter(car => !car.completed));
  const [completedCars, setCompletedCars] = useState<DriftCar[]>(initialCars.filter(car => car.completed));

  const handleCreate = (title: string, description: string) => {
    const newCar: DriftCar = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false
    };
    setActiveCars([...activeCars, newCar]);
  };

  const handleDelete = (id: number) => {
    setActiveCars(activeCars.filter(car => car.id !== id));
    setCompletedCars(completedCars.filter(car => car.id !== id));
  };

  const handleToggleCompletion = (id: number) => {
    // Find the car to toggle
    const carToToggle = activeCars.find(car => car.id === id) || completedCars.find(car => car.id === id);
    if (!carToToggle) return; // Car not found
  
    // Update the completion status of the car
    const updatedCar = { ...carToToggle, completed: !carToToggle.completed };
  
    // Move the car to the appropriate array based on its completion status
    if (updatedCar.completed) {
      setCompletedCars([...completedCars, updatedCar]);
      setActiveCars(activeCars.filter(car => car.id !== id));
    } else {
      setActiveCars([...activeCars.filter(car => car.id !== id), updatedCar]);
      setCompletedCars(completedCars.filter(car => car.id !== id));
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center mb-4">Drift Cars</h1>
      </header>
      <main className="container">
        <DriftCarTabs
          activeCars={activeCars}
          completedCars={completedCars}
          onCreate={handleCreate}
          onDelete={handleDelete}
          onToggleCompletion={handleToggleCompletion}
        />
      </main>
    </div>
  );
};

export default App;
