const calculateFees = (startTimeParam, endTimeParam, hourlyFeeParam) => {
  const convertTo24Hour = (time) => {
    const [main, period] = time.split(' ');
    const [hours, minutes] = main.split(':');
    let hours24 = hours === '12' ? '00' : hours;
    if (period === 'PM') {
      hours24 = parseInt(hours % 12, 10) + 12;
    }
    return `${hours24}:${minutes}`;
  };

  const startTime = new Date(
    `1970-01-01T${convertTo24Hour(startTimeParam)}:00Z`,
  );
  const endTime = new Date(`1970-01-01T${convertTo24Hour(endTimeParam)}:00Z`);
  const hours = (endTime - startTime) / (1000 * 60 * 60);
  return (hourlyFeeParam * hours).toFixed(2);
};

export default calculateFees;
