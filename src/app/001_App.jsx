import React from 'react'
import { useState } from 'react';
import { Menu,MenuButton,MenuList,MenuItem,Button,Flex } from '@chakra-ui/react';
import { useMediaQuery } from 'react-responsive';
import { ChevronDownIcon } from '@chakra-ui/icons'
import DesktopMenu from './002-1_DesktopMenu';
import MobileMenu from './002-2_MobileMenu';


const MenuComponent = ({setMenu}) => {
  return (
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
  )
}
const App = () => {

  const [menu,setMenu] = useState('')
  const isDesktop = useMediaQuery({minWidth:768});

  return (

      <Flex w="100vw" h="100vh" flexDirection="column" alignContent="flex-start" alignItems="center" flexWrap="nowrap" backgroundColor="#FFFFE0">
        {isDesktop &&
          <>
            <Flex w="60%" h="5%" alignItems="center"  justifyContent="space-between" flexWrap="nowrap" backgroundColor="lightcyan">
              <MenuComponent setMenu={setMenu}/>    
            </Flex>
            <DesktopMenu selectedmenu={menu} />        
          </>

        }
        {!isDesktop &&
          <>
            <Flex w="100%" h="5%" alignItems="center"  justifyContent="space-between" flexWrap="nowrap" backgroundColor="lightcyan">
              <MenuComponent setMenu={setMenu}/>    
            </Flex>
            <MobileMenu selectedmenu={menu} />   
          </>

        }
 
      </Flex>

  );
}

export default App;