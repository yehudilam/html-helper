import {TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {DateTime} from "luxon";

interface TimezoneRowProps{
  format: string;
  columns: string[],
  convert: number,
}

const TimezoneRow = ({
  format,
  columns,
  convert,
                     }: TimezoneRowProps): JSX.Element => {

  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    if(convert !== 0){
      setOutput(
        columns.map(col => {
          if(input && format){
            const local = DateTime.fromFormat(input, format);
            const rezoned = local.setZone(col);

            return rezoned.toFormat(format);
          }

          return '';
        })
      );
    }
  }, [convert]);

  return (
    <tr>
      <td>
        <TextField
          placeholder="Input"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </td>

      {columns.map((col: string, index: number) => (
        <td><p>{output[index]}</p></td>
      ))}

      <td></td>
    </tr>
  )
};

export default TimezoneRow;
