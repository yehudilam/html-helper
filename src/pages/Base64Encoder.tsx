import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@mui/material";

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
      <div className="mb-2">
        <TextField
          fullWidth
          value={input}
          onChange={e => setInput(e.target.value)}
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
