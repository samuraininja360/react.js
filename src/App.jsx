import React from 'react';
import './App.css';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup'
import { withStyles } from '@material-ui/core/styles';

function App() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <React.Fragment>
      <nav>
        <h1>
          Ninja Spect Classes
        </h1>
      </nav>
      <section>
        <div class="content">
          <h2>About</h2>
          <p>
            Welcome to ReactJS. React is a JavaScript framework to build User Interfaces and custom components. This repository is a .jsx template users can download to make their own Material UI React Apps. This repo works well on replit!
          </p>
          <Button color="primary" variant="contained" disableElevation>
            Primary
          </Button>
          <Button color="text" variant="text" disableElevation>
            Text
          </Button>
        </div>
        <div class="image">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="" class="img"></img>
        </div>
      </section>
      
      <div>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'A' }}
        />
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
          inputProps={{ 'aria-label': 'B' }}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
