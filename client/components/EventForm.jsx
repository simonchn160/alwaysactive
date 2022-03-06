import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';

function EventForm(props) {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  // <input type="date" onChange={(e) => setDate(e.target.value)} />

  return (
    <div>
      <input
        type="text"
        placeholder="What is the name of your event?"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="What city will your event be held in?"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <input
        type="text"
        placeholder="What state will your event be held in?"
        onChange={(e) => setState(e.target.value)}
        value={state}
      />
      <input
        type="text"
        placeholder="Please provide a brief description of your event"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <h6>When will your event be held?</h6>
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
      <h6>What time will your event start?</h6>
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={() => props.setForm(false)}>
        Cancel
      </button>
      {/* <button onClick={() => }>
        Share Event
      </button> */}
    </div>
  );
}

export default EventForm;