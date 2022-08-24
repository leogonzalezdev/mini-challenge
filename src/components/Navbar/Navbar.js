import React from 'react';
import { Grid, Text, Button } from '@nextui-org/react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import AddUserModal from '../../pages/AddUserModal/AddUserModal';

const Navbar = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  return (
    <>
      <Grid.Container css={{ p: '$8 $10', bg: 'linear-gradient(45deg, $accents1 0%, $accents4 80%)' }} justify='space-between' >
        <Grid>
          <Text
            h1
            size={30}
            css={{
              textGradient: "45deg, $gray900 -20%, $gray700 80%",
            }}
            weight="bold"
          >
            Mini Challenge
          </Text>
        </Grid>
        <Grid>
          <Button onClick={handler} color="secondary" auto iconRight={<AiOutlineUserAdd />}>
            Añadir Usuario
          </Button>
        </Grid>
      </Grid.Container>
      <AddUserModal visible={visible} setVisible={setVisible}/>
    </>
  )
}

export default Navbar