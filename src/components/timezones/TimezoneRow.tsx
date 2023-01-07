import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";

interface TimezoneRowProps {
  format: string;
  columns: string[];
  convert: number;
  defaultTimestamp?: string;
}

const ConvertedTimestamp = styled.div`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
`;

const TimezoneRow = ({
  format,
  columns,
  convert,
  defaultTimestamp,
}: TimezoneRowProps): JSX.Element => {

  const [input, setInput] = useState(defaultTimestamp ?? '');
  const [output, setOutput] = useState<string[]>([]);

  useEffect(() => {
    if (convert !== 0) {
      setOutput(
        columns.map(col => {
          if (input && format && col !== "") {
            const local = DateTime.fromFormat(input, format);
            const rezoned = local.setZone(col);

            return rezoned.toFormat(format);
          }

          return '';
        })
      );
    }
  }, [convert, input, format, columns]);

  return (
    <tr>
      <td>
        <TextField
          placeholder="Input timestamp"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </td>

      {columns.map((col: string, index: number) => (
        <td key={`col-${col}-i-${index}`}>
          {output[index] && <ConvertedTimestamp>{output[index]}</ConvertedTimestamp>}
        </td>
      ))}

      <td></td>
    </tr>
  )
};

export default TimezoneRow;
