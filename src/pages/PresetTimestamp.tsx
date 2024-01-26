import { DateTime } from "luxon";
import useGetNow from "../hooks/useGetNow";


const TimestampWithFormat = ({
  date,
  format,
  description,
}: {
  date: DateTime,
  format: string,
  description?: string
}) => (
  <div>
    <div>{format}</div>
    {description && <div>{description}</div>}
    <div>{date.toFormat(format)}</div>
  </div>
);

const PresetTimestamps = () => {
  const { now } = useGetNow();

  return (
    <div>
      <div>
        {now.toFormat('yyyy-MM-dd HH:mm:ss')}
      </div>

      <TimestampWithFormat date={now} format={"yyyy-MM-dd hh:mm:ss"} />
    </div>
  )
};

export default PresetTimestamps;
