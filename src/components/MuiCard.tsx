import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';

export const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height='140px'
          image='https://unsplash.com/random'
          alt='image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            reiciendis explicabo, quod dignissimos voluptates alias minima,
            animi aperiam nemo eveniet.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
