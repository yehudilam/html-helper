import React, { useCallback, useState } from 'react';
import TimestampRow from "../components/TimestampRow";
import AddIcon from '@mui/icons-material/Add';
import { Button } from "@mui/material";
import { DateTime } from "luxon";
import PageHeader from '../components/PageHeader';

const Timestamp = (): JSX.Element => {
  const [rows, setRows] = useState<number>(1);
  const [convert, setConvert] = useState(0);

  const convertTimes = useCallback((): void => {
    setConvert(DateTime.now().toMillis())
  }, []);

  return (
    <div>
      <div className="mb-2">
        <PageHeader title="Timestamp convertor" />

        <p>
          More on using Luxon:
          <a
            href="https://moment.github.io/luxon/#/parsing"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-blue-600"
          >Parsing tokens</a></p>
      </div>

      <table className="mb-2 w-full">
        <thead>
          <tr>
            <th className="text-left">Input</th>
            <th className="text-left">Input format</th>
            <th className="text-left">Output format</th>
            <th className="text-left">Output</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(rows).fill('')].map((el, index) => {
            if (index === 0) {
              return (
                <TimestampRow
                  key={index}
                  convert={convert}
                  defaultInput={DateTime.now().toFormat('yyyy-MM-dd')}
                  defaultInputFormat={'yyyy-MM-dd'}
                  defaultOutputFormat={'yyyy-MMM-dd'}
                />
              );
            }

            return (
              <TimestampRow
                key={index}
                convert={convert}
              />
            );
          })}
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
