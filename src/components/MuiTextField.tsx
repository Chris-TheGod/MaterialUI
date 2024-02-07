import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

export const MuiTextField = () => {
  const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='standard' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='Small secondary' color='secondary' size='small' />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='password'
          type='password'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share pw'}
        />
        <TextField label='Form Input' helperText='Do not share your pw' />
        <TextField label='Read only' inputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
