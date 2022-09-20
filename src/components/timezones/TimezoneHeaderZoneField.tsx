import React, {useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
import {TIMEZONES} from "../../utils/Timezones";

interface TimezoneHeaderZoneFieldProps{
  timezone: string;
  setTimezone: (val: string) => void;
}

const TimezoneHeaderZoneField = ({timezone, setTimezone}: TimezoneHeaderZoneFieldProps): JSX.Element => {
  const [timezones] = useState(TIMEZONES);

  return (
    <th>
      <Autocomplete
        sx={{
          width: 200
        }}
        freeSolo
        options={timezones}
        value={timezone}
        onChange={(_, newValue) => setTimezone(newValue ?? '')}
        renderInput={(params) => <TextField {...params} label="Timezone" />}
      />
    </th>
  )
};

export default TimezoneHeaderZoneField;
