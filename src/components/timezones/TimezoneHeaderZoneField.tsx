import React, {ChangeEvent, useState} from 'react';
import {Autocomplete, TextField} from "@mui/material";
// import {DateTime, IANAZone, Zone} from "luxon";
import {TIMEZONES} from "../../utils/Timezones";

interface TimezoneHeaderZoneFieldProps{
  timezone: string;
  setTimezone: (val: string) => void;
}

const TimezoneHeaderZoneField = ({timezone, setTimezone}: TimezoneHeaderZoneFieldProps): JSX.Element => {
  // DateTime.

  const [timezones] = useState(TIMEZONES);

  // console.log(Zone, IANAZone);
  // console.log(Intl.supportedValuesOf('timeZone'));

  return (
    <th>
      {/*<TextField
        value={timezone}
        onChange={setTimezone}
        placeholder={}
      />*/}

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
