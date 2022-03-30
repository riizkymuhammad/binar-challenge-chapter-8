import { Grid, GridItem } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Grid display={'flex'}>
        <ColorModeSwitcher justifyContent={"flex-end"} mr={'5'} />
        <Grid display={'flex'} flexDirection={'row'} mt={'1'} >
          <GridItem mr={'5'}>
            <Link to="/">Home</Link>
          </GridItem>
          {location.pathname !== '/register' && (
            <GridItem mr={'5'}>
              <Link to="/register">Register</Link>
            </GridItem>
          )}
          {location.pathname !== '/player/edit' && (
            <GridItem mr={'5'}>
              <Link to="/player/edit">Edit Player</Link>
            </GridItem>
          )}
          {location.pathname !== '/player/cari' && (
            <GridItem mr={'5'}>
              <Link to="/player/cari">Cari Player</Link>
            </GridItem>
          )}
        </Grid>
      </Grid>
    </>
  );
}
