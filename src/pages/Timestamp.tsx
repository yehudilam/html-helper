import React, {useCallback, useState} from 'react';
import TimestampRow from "../components/TimestampRow";
import AddIcon from '@mui/icons-material/Add';
import {Button} from "@mui/material";
import {DateTime} from "luxon";

const Timestamp = (): JSX.Element => {
  const [rows, setRows] = useState<number>(1);
  const [convert, setConvert] = useState(0);

  // console.log('timestamp');

  const convertTimes = useCallback((): void => {
    setConvert(DateTime.now().toMillis())
  }, []);

  return (
    <div>
      <div className="mb-2">
        <p>
          Luxon:
          <a
            href="https://moment.github.io/luxon/#/parsing"
            target="_blank"
            rel="noreferrer"
          >Parsing tokens</a></p>
      </div>

      <table className="mb-2">
        <thead>
          <tr>
            <th>Input</th>
            <th>Input format</th>
            <th>Output format</th>
            <th>Output</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(rows).fill('')].map((el, index) => (
            <TimestampRow
              key={index}
              convert={convert}
            />
          ))}
        </tbody>
      </table>

      <div className="flex items-center">
        <Button
          variant="contained"
          sx={{
            marginRight: 1
          }}
          onClick={() => setRows(row => row + 1)}
        >
          <AddIcon />
        </Button>
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            convertTimes();
          }}
        >Convert</Button>
      </div>
    </div>
  )
};

export default Timestamp;
