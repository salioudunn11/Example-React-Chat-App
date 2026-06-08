//import
import { useState } from "react";

const Message = ({text}) => {
// All components have to start with a capital
    return <>
    <p>
        {text}
    </p>
   
    </>;
    
}

const App = () => {
    //
    // business logic
    //


    //  <p> Hello World</p>
    //  <p>This is a test message</p>



    /*
    const message = [
        "Argentina",
        "Brasil",
        "Cambodia"
    ];
    */

    const [messages, setMessages] = useState([])

    return <>
    <h1>
        Chat Room
    </h1>
   {
    message.map((text) => <Message text={text}/>  )
   }
   
    <input />
    <button>
        Send
    </button>

    </>;
}

export default App;