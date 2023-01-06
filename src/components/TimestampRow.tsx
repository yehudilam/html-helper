import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { DateTime } from "luxon";

interface TimestampRowProps {
  convert: number;
  defaultInput?: string;
  defaultInputFormat?: string;
  defaultOutputFormat?: string;
}

const TimestampRow = ({
  convert,
  defaultInput = '',
  defaultInputFormat = 'yyyy-MM-dd',
  defaultOutputFormat = 'yyyy-MMM-dd',
}: TimestampRowProps): JSX.Element => {
  const [input, setInput] = useState<string>(defaultInput);
  const [inputFormat, setInputFormat] = useState<string>(defaultInputFormat);
  const [outputFormat, setOutputFormat] = useState<string>(defaultOutputFormat);
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
