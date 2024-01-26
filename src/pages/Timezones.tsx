import React, { useCallback, useState } from 'react';
import { Button, IconButton, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import { DateTime } from "luxon";
import TimezoneRow from "../components/timezones/TimezoneRow";
import TimezoneHeaderZoneField from "../components/timezones/TimezoneHeaderZoneField";
import { DATETIME } from "../utils/TimestampFormat";
import PageHeader from '../components/PageHeader';
import TimezoneTable from '../components/timezones/TimezoneTable';
import EasyTimezone from '../components/easyTimezone/EasyTimezone';

const Timezones = (): JSX.Element => {
  const [isEasyTimezone, setEasyTimezone] = useState(true);
  return (
    <>
      <Button>{isEasyTimezone ? 'Table view' : 'Simple view'}</Button>

      {isEasyTimezone ? <EasyTimezone /> : <TimezoneTable />}
    </>
  )
};

export default Timezones;
