import Countdown from "../islands/Countdown.tsx";

export default function Page() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 1);
  return (
    <p>
      The big event is happening <Countdown target={targetDate.toISOString()} />
    </p>
  );
}
