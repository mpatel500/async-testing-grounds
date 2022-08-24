import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Timer = () => {
  const [isRunning, setIsRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => isRunning && setTime(time + 1), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Stack alignItems={'center'}>
      <Button onClick={() => setIsRunning(!isRunning)}>Start Timer</Button>
      <Typography variant="h6" gutterBottom>
        {time}
      </Typography>
    </Stack>
  );
};

export default Timer;
