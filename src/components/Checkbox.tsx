import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label className="form-check-label">{label}</label>
    </div>
  );
};

export default Checkbox;
