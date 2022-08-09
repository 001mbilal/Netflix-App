import React from 'react';
import Card from './card';
import Sdata from './Sdata';

function App() {
    return ( <
        >
        <
        h1 className = 'heading_style' > List Of Top Netflix Series < /h1>

        {
            Sdata.map((value) => {
                return ( <
                    Card sname = { value.sname }
                    imgsrc = { value.imgsrc }
                    title = { value.title }
                    links = { value.links }
                    />
                );
            })
        } <
        />
    )
}
export default App;