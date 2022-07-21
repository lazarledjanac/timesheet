import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

export default function Weekday({ date, onClick, i, className }) {
  let navigate = useNavigate();
  return (
    <li className={className} onClick={onClick} key={i}>
      <a
        onClick={() => {
          navigate(
            `/days/${DateTime.fromISO(
              `${date.toFormat("kkkk")}-W${date.toFormat("WW")}-${i}`
            )}`
          );
        }}
      >
        <b>
          {DateTime.fromISO(
            `${date.toFormat("kkkk")}-W${date.toFormat("WW")}-${i}`
          ).toFormat("LLLL") +
            " " +
            DateTime.fromISO(
              `${date.toFormat("kkkk")}-W${date.toFormat("WW")}-${i}`
            ).toFormat("d")}
        </b>
        <i>0</i>
        <span>
          {DateTime.fromISO(
            `${date.toFormat("kkkk")}-W${date.toFormat("WW")}-${i}`
          ).toFormat("cccc")}
        </span>
      </a>
    </li>
  );
}
