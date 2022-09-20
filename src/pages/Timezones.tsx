import React, {useCallback, useState} from 'react';
import {Button, IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";
import {DateTime} from "luxon";
import TimezoneRow from "../components/timezones/TimezoneRow";
import TimezoneHeaderZoneField from "../components/timezones/TimezoneHeaderZoneField";
import {DATETIME} from "../utils/TimestampFormat";

const Timezones = (): JSX.Element => {
  const [inputFormat, setInputFormat] = useState(DATETIME);
  const [timezones, setTimezones] = useState<string[]>([]);
  const [rows, setRows] = useState(1);
  const [convert, setConvert] = useState(0);
  const [now] = useState(DateTime.now());

  const setTimezoneValue = ({
    value, index
                            }: {
    value: string, index: number
  }) => {
    setTimezones(prev => {
      const copy = [...prev];

      copy[index] = value;

      return copy;
    });
  }

  const addTimezone = () => {
    setTimezones(timezones => [
      ...timezones,
      '',
    ]);
  };

  const convertTimes = useCallback((): void => {
    setConvert(DateTime.now().toMillis())
  }, []);

  return (
    <div>
      <div className="mb-2">
        <p>
          Luxon timezones:
          <a
            href="https://moment.github.io/luxon/#/zones"
            target="_blank"
            rel="noreferrer"
          >
            timezones
          </a>
        </p>
      </div>

      <div className="flex items-center mb-2">
        <p className="mr-2">Format: </p>

        <div className="mr-2">
          <TextField
            placeholder="Input Format"
            value={inputFormat}
            onChange={(e) => setInputFormat(e.target.value)}
          />
        </div>

        {/* todo: current zone: */}
      </div>

      <div className="mb-2">
        <p>Time now: {now.toFormat(DATETIME)}</p>
        <p>Your timezone: {now.zoneName}</p>
      </div>

      <table className="mb-2">
        <thead>
        <tr>
          <th>Input</th>
          {
            timezones.map((timezone: string, index: number) => (
              <TimezoneHeaderZoneField
                key={`header-zone-${index}`}
                timezone={timezone}
                setTimezone={newValue => setTimezoneValue({
                  value: newValue,
                  index,
                })}
              />
            ))
          }
          <th>
            <IconButton onClick={addTimezone}>
              <Add />
            </IconButton>
          </th>
        </tr>
        </thead>
        <tbody>
        {
          Array(rows).fill('').map((el, index: number) => (
            <TimezoneRow
              key={`timezone-${index}`}
              format={inputFormat}
              columns={timezones}
              convert={convert}
            />
          ))
        }
          <tr>
            <td colSpan={timezones.length + 2}>
              <div className="flex items-center">
                <IconButton
                  onClick={() => setRows(row => row + 1)}>
                  <Add />
                </IconButton>

                <Button
                  variant="contained"
                  onClick={convertTimes}>Convert
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>


    </div>
  )
};

export default Timezones;
