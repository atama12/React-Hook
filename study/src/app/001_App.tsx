import React from 'react'
import { useState } from 'react';
import { Menu,MenuButton,MenuList,MenuItem,Button,Flex, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import State from './003_State.tsx';
import Effect from './004_Effect.tsx';
import Context from './005_Context.tsx';
import Ref from './006_Ref.tsx';
import Callback from './007_Callback.tsx';
import Memo from './008_Memo.tsx';
import Sound from './009_Sound.tsx';

const App = () => {

  const [menu,setMenu] = useState('')

  return (
    <>
      <Flex w="100vw" h="100vh" flexDirection="column" alignContent="flex-start" flexWrap="wrap" backgroundColor="#FFFFE0">
        <Flex w="100%" h="5%" alignItems="center" justifyContent="space-between" backgroundColor="lightcyan">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Hooks選択
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setMenu('state')}>State</MenuItem>
              <MenuItem onClick={() => setMenu('effect')}>Effect</MenuItem>
              <MenuItem onClick={() => setMenu('context')}>Context</MenuItem>
              <MenuItem onClick={() => setMenu('ref')}>Ref</MenuItem>
              <MenuItem onClick={() => setMenu('callback')}>Callback</MenuItem>
              <MenuItem onClick={() => setMenu('memo')}>Memo</MenuItem>
              <MenuItem onClick={() => setMenu('sound')}>Sound</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        {menu === 'state' && <State /> }
        {menu === 'effect' && <Effect /> }
        {menu === 'context' && <Context /> }
        {menu === 'ref' && <Ref /> }
        {menu === 'callback' && <Callback /> }
        {menu === 'memo' && <Memo /> }
        {menu === 'sound' && <Sound /> }    
      </Flex>
    </>




  );
}

export default App;