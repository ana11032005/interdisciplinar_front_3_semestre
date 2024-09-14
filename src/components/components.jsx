
import React from 'react';
import './components.css'; 

export const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button className="Button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export const ButtonDenied = ({ children, onClick, type = 'button' }) => {
    return (
      <button className="Button-Denied" onClick={onClick} type={type}>
        {children}
      </button>
    );
  };

  export const ButtonForm = ({ children, onClick, type = 'button' }) => {
    return (
      <button className="Button-Form" onClick={onClick} type={type}>
        {children}
      </button>
    );
  };

export const InputFilter = ({ placeholder, onChange }) => {
    return (
      <input 
        className="Input-Filter"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }

export const InputForm = ({ placeholder, onChange }) => {
    return (
      <input 
        className="Input-Form"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    );  
  };

export const InputDropBox = ({ options, placeholder, onChange }) => {
  return (
    <select 
      className="Input-DropBox"
      onChange={onChange}
      defaultValue=""
    >
      <option value="" disabled>{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export const DataBox = ({ fields }) => {
    return (
      <div className="Data-Box">
        {fields.map((field, index) => (
          <div key={index} className="Data-Field">
            <label>{field.label}: </label> {field.value}
          </div>
        ))}
      </div>
    );
  };


export const Modal = ({ show, onClose, onConfirm, title, children }) => {
    if (!show) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <h2>{title}</h2>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <Button onClick={onClose}>Confirmar</Button>
            <ButtonDenied onClick={onClose}>Cancelar</ButtonDenied>
          </div>
        </div>
      </div>
    );
  };

  export const Card = ({ data, legend }) => {
    return (
      <div className="card">
        <div className="card-data">
          {data}
        </div>
        <div className="card-legend">
          {legend}
        </div>
      </div>
    );
  };
  