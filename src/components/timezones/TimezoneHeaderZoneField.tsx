import React, {ChangeEvent} from 'react';
import {TextField} from "@mui/material";

interface TimezoneHeaderZoneFieldProps{
  timezone: string;
  setTimezone: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const TimezoneHeaderZoneField = ({timezone, setTimezone}: TimezoneHeaderZoneFieldProps): JSX.Element => {
  return (
    <th>
      <TextField
        value={timezone}
        onChange={setTimezone}
      />
    </th>
  )
};

export default TimezoneHeaderZoneField;
