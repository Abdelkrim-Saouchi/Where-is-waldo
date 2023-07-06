const Timer = ({ hours, minutes, seconds, milliseconds }) => {
  return (
    <div>
      Time: {hours}:{minutes.toString().padStart(2, '0')}:
      {seconds.toString().padStart(2, '0')}:
      {milliseconds.toString().padStart(2, '0')}
    </div>
  );
};

export default Timer;
