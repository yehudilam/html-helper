import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@mui/material";
import PageHeader from '../components/PageHeader';

const Base64Encoder = (): JSX.Element => {
  const [input, setInput] = useState('');
  const [display, setDisplay] = useState('');

  const decode = useCallback(() => {
    setDisplay(atob(input));
  }, [input]);

  const encode = useCallback(() => {
    setDisplay(btoa(input));
  }, [input]);

  return (
    <div className="w-4/5">

      <PageHeader title="Base 64 Encode Tool" />

      <div className="mb-2">
        <TextField
          fullWidth
          value={input}
          placeholder="Enter text here"
          multiline
          onChange={e => setInput(e.target.value)}
          rows={4}
        />
      </div>


      <div className="flex items-center mb-2">
        <Button
          variant="contained"
          sx={{
            marginRight: 1
          }} onClick={encode}>Encode</Button>
        <Button
          variant="contained"
          onClick={decode}>Decode</Button>
      </div>

      {display && (
        <div>
          <p>Result: </p>
          <p>{display}</p>
        </div>
      )}
    </div>
  )
};

export default Base64Encoder;
