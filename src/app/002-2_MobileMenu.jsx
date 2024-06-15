import React from 'react'
import { MobileState }  from './003_State';
import { MobileEffect} from './004_Effect';
import { MobileContext } from './005_Context';
import { MobileRef } from './006_Ref';
import { MobileCallback } from './007_Callback';
import { MobileMemo } from './008_Memo';
import { MobileSound } from './009_Sound';


const MobileMenu = ({selectedmenu}) => {

  return (

    <>
        {selectedmenu === 'state' && <MobileState /> }
        {selectedmenu === 'effect' && <MobileEffect /> }
        {selectedmenu === 'context' && <MobileContext /> }
        {selectedmenu === 'ref' && <MobileRef /> }
        {selectedmenu === 'callback' && <MobileCallback /> }
        {selectedmenu === 'memo' && <MobileMemo /> }
        {selectedmenu === 'sound' && <MobileSound /> }        
    </>

  );
}

export default MobileMenu;