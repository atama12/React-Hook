import React from 'react'
import { Outlet } from 'react-router-dom';


const App = () => {
    return (
        // <React.Fragment>は<>　</>と同じ
        // Path毎にkeyを決定するため、明示的に設定
        <React.Fragment >

          {/* ネストされた子ルート全てがレンダリングされる */}
          <Outlet />
        
        </React.Fragment>
    );
}

export default App;