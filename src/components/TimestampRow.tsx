import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { DateTime } from "luxon";

interface TimestampRowProps {
  convert: number;
}

const TimestampRow = ({
  convert
}: TimestampRowProps): JSX.Element => {
  const [input, setInput] = useState<string>('');
  const [inputFormat, setInputFormat] = useState<string>('yyyy-MM-dd');
  const [outputFormat, setOutputFormat] = useState<string>('yyyy-MM-dd');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (input && inputFormat && outputFormat && convert !== 0) {

      // todo: catch errors:
      try {
        setOutput(DateTime.fromFormat(input.trim(), inputFormat.trim()).toFormat(outputFormat.trim()));
      } catch (e) {
        console.log(e);
      }
    }
  }, [convert, input, inputFormat, output, outputFormat]);

  return (
    <tr>
      <td>
        <TextField
          className="w-full"
          placeholder="Input"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </td>
      <td>
        <TextField
          className="w-full"
          placeholder="Input Format"
          value={inputFormat}
          onChange={e => setInputFormat(e.target.value)}
        />
      </td>

      <td>
        <TextField
          className="w-full"
          placeholder="Output Format"
          value={outputFormat}
          onChange={e => setOutputFormat(e.target.value)}
        />
      </td>
      <td>
        <TextField
          className="w-full"
          placeholder="Output"
          value={output}
          onChange={e => setOutput(e.target.value)}
        />
      </td>
    </tr>
  )
};

export default TimestampRow;
