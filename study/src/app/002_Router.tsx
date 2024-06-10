import React from 'react';
import App from './001_App.tsx'
import State from './003_State.tsx'
import Effect from './004_Effect.tsx'
import Context from './005_Context.tsx'
import Ref from './006_Ref.tsx'
import Callback from './007_Callback.tsx'
import Memo from './008_Memo.tsx'
import Sound from './009_Sound.tsx'

const Router = [
    {
        path: '/',
        element: <App />,
        children: [
          {path: "state",    element: <State />},
          {path: "effect",   element: <Effect />},
          {path: "context",  element: <Context />},
          {path: "ref",      element: <Ref />},
          {path: "callback", element: <Callback />},
          {path: "memo",     element: <Memo />},
          {path: "sound",    element: <Sound />},
        ],
      },


]

export default Router;