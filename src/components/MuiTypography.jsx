import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' component='h1' gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>subtitle1 Heading</Typography>
      <Typography variant='subtitle2'>subtitle2 Heading</Typography>

      <Typography variant='body1'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae odit
        ratione numquam voluptate magnam, aut ipsa laudantium ea dolorum harum
        repellat distinctio quis laboriosam veniam deleniti molestias maiores
        illum dignissimos! Heading
      </Typography>
      <Typography variant='body2'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae rerum
        expedita possimus minima in nobis non ratione delectus ipsam eaque quasi
        consectetur, asperiores unde aut dolorem esse. Atque, recusandae dolore.
        Heading
      </Typography>
    </div>
  );
};
