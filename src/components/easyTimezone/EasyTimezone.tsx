import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import TimezoneHeaderZoneField from "../timezones/TimezoneHeaderZoneField";
import { DateTime } from "luxon";
import { TIMEZONES } from "../../utils/Timezones";

const ConvertedTimezone = ({
  date,
  format,
  // sourceTz
}: {
  date: DateTime,
  format: string,
  // sourceTz: string,
}) => {
  const [tz, setTz] = useState('');
  const [formatted, setFormatted] = useState('');

  useEffect(() => {
    const rezoned = date.setZone(tz);

    setFormatted(rezoned.toFormat(format));
  }, [tz]);

  return (
    <div>
        <p>to timestamp in timezone</p>
        <Autocomplete
        sx={{
          width: 200
        }}
        freeSolo
        options={TIMEZONES}
        value={tz}
        onChange={(_, newValue) => setTz(newValue ?? '')}
        renderInput={(params) => <TextField {...params} label="Timezone" />}
      />

        <p>{formatted}</p>
      </div>
  )
}

const EasyTimezone = () => {
  const [now] = useState(DateTime.now());
  const [format, setFormat] = useState('yyyy-MM-dd HH:mm:ss');
  const [source, setSource]= useState(now.toFormat(format));
  const [sourceTz, setSourceTz] = useState(now.zoneName);

  return (
    <div>
      <div>
      <p>From timestamp / timezone</p>
      <TextField
      placeholder="Input timestamp for conversion"
      value={source}
      onChange={e => setSource(e.target.value)}
      />
<Autocomplete
        sx={{
          width: 200
        }}
        freeSolo
        options={TIMEZONES}
        value={sourceTz}
        onChange={(_, newValue) => setSourceTz(newValue ?? '')}
        renderInput={(params) => <TextField {...params} label="Timezone" />}
      />
      <p>format</p>
      <TextField
       placeholder="Customize the timestamp format"
       value={format}
       onChange={e => setFormat(e.target.value)}
       />
      </div>

<ConvertedTimezone date={now} format={format}
// sourceTz={sourceTz}
/>
    </div>
  )
};

export default EasyTimezone;
