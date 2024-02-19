import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

export const MuiBottomNav = () => {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'absolute', bottom: 0 }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label='Home' icon={<HomeIcon />} showLabel />
      <BottomNavigationAction
        label='Favorite'
        icon={<FavoriteIcon />}
        showLabel
      />
      <BottomNavigationAction label='Profile' icon={<PersonIcon />} showLabel />
    </BottomNavigation>
  );
};
