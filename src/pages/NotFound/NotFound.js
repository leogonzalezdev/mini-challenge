import './NotFound.css';
import React from 'react';
import { Link, Grid, Spacer, Text } from '@nextui-org/react';


const NotFound = () => {
  return (
    <>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Grid.Container justify='center'>
        <Grid xs={12} justify='center'>
          <Text 
          h1
          color='error'
            size={60} 
            css={{
              textAlign: 'center',
            }}>Ups!<br /> Este recurso no existe </Text>
        </Grid>
        <Grid xs={12} justify='center'>
          <section class="page_404">
            <div class="four_zero_four_bg"></div>
          </section>
        </Grid>
        <Spacer y={1} />
        <Grid xs={12} justify='center'>
          <Link css={{ zIndex: 1000 }} href="/" >Regresar</Link>
        </Grid>
      </Grid.Container>
    </>
  );

}

export default NotFound