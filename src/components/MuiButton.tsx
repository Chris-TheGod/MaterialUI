import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {
  const [formats, setFormat] = useState<string | null>(null);
  console.log({ formats });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string | null
  ) => {
    setFormat(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>

      <Stack spacing={2} direction='row'>
        <Button variant='contained' color='primary'>
          Primary
        </Button>
        <Button variant='contained' color='secondary'>
          secondary
        </Button>
        <Button variant='contained' color='error'>
          error
        </Button>
        <Button variant='contained' color='warning'>
          warning
        </Button>
        <Button variant='contained' color='info'>
          info
        </Button>
        <Button variant='contained' color='success'>
          success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant='contained' size='small'>
          Small
        </Button>
        <Button variant='contained' size='medium'>
          medium
        </Button>
        <Button variant='contained' size='large'>
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction='row'>
        <Button
          variant='contained'
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Clicked!')}
        >
          Send
        </Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        <IconButton aria-label='send' color='success' size='small'>
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          orientation='vertical'
          size='small'
          color='secondary'
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'
          value={formats}
          onChange={handleFormatChange}
          size='small'
          color='success'
          orientation='vertical'
          exclusive
        >
          <ToggleButton value='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
