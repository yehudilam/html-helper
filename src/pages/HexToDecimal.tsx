import React, {useState} from 'react';
import CachedIcon from '@mui/icons-material/Cached';
import {Button, IconButton, TextField} from "@mui/material";

interface HexFieldProps {
  hex: string;
  setHex: (val: string) => void;
}

const HexField = ({
                    hex, setHex
                  }: HexFieldProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <p className="mr-2">Hex: </p>
      <TextField
        placeholder="Enter hex value here"
        value={hex}
        onChange={e => setHex(e.target.value)}
      />
    </div>
  )
}

interface DecFieldProps {
  dec: string;
  setDec: (val: string) => void;
}

const DecField = ({
                    dec, setDec
                  }: DecFieldProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <p className="mr-2">Dec: </p>
      <TextField
        placeholder="Enter decimal value here"
        value={dec}
        onChange={e => setDec(e.target.value)}
      />
    </div>
  )
}

enum HexDecOrder {
  HexFirst, DecFirst
}

const HexToDecimal = (): JSX.Element => {
  const [hex, setHex] = useState('');
  const [dec, setDec] = useState('');
  const [order, setOrder] = useState<HexDecOrder>(HexDecOrder.HexFirst);

  const reverseOrder = (): void => {
    setOrder(ord => ord === HexDecOrder.HexFirst ? HexDecOrder.DecFirst : HexDecOrder.HexFirst);
  };

  const convert = (): void => {
    if(order === HexDecOrder.HexFirst){
      setDec(`${parseInt(hex, 16)}`);
    }else{

      setHex(parseInt(dec, 10).toString(16));
    }
  }

  return (
    <div>
      <div className="mb-2">
        {order === HexDecOrder.HexFirst ? (
          <HexField
            hex={hex}
            setHex={setHex}
          />
        ) : (
          <DecField
            dec={dec}
            setDec={setDec}
          />
        )}
      </div>

      <div className="mb-2">
        <IconButton onClick={reverseOrder}>
          <CachedIcon/>
        </IconButton>
      </div>

      <div className="mb-2">
        {order === HexDecOrder.HexFirst ? (
          <DecField
            dec={dec}
            setDec={setDec}
          />
        ) : (
          <HexField
            hex={hex}
            setHex={setHex}
          />
        )}
      </div>

      <div>
        <Button
          variant="contained"
          onClick={convert}
        >Convert</Button>
      </div>
    </div>
  )
};

export default HexToDecimal;
