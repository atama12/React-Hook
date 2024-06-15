import React from 'react'
import State from './003_State';
import Effect from './004_Effect';
import Context from './005_Context';
import Ref from './006_Ref';
import Callback from './007_Callback';
import Memo from './008_Memo';
import Sound from './009_Sound';

const DesktopMenu = ({selectedmenu}) => {

  return (

    <>
        {selectedmenu === 'state' && <State /> }
        {selectedmenu === 'effect' && <Effect /> }
        {selectedmenu === 'context' && <Context /> }
        {selectedmenu === 'ref' && <Ref /> }
        {selectedmenu === 'callback' && <Callback /> }
        {selectedmenu === 'memo' && <Memo /> }
        {selectedmenu === 'sound' && <Sound /> }        
    </>

  );
}

export default DesktopMenu;