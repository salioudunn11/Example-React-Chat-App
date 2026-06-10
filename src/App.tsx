import {useState} from 'react';
import Message from './components/Message';
import './App.css';
import { faker } from "@faker-js/faker";



const App = () => {
    //
    // business logic
    //

    /*
    const messages = [
        "Argentina",
        "Bolivia",
        "Cambodia",
    ];
    */
   

    const [messages, setMessages ] = useState([]);
    // Found out using AI that useState only allows two things at once.
    
    const [incomingText, setIncomingText ] = useState('');


    return <>
        <h1>
            Chat Room
        </h1>
        <p>
            Messages: {messages.length}
        </p>

        {
           messages.map(
            (message, index) =>
            <Message
            key={index}
            text={message.text}
            name={message.name}
        />
)
        }

        <form onSubmit={(event) => {
            event.preventDefault();

            // determine what the new message is
            const new_message = {
                text: incomingText,
                name: faker.person.fullName()
                                };

            // add the new message to the message state
            setMessages([...messages, new_message]);

            // note: this is not best practice in react but it works for now
            
            // document.getElementById('incoming_text').value = '';
            setIncomingText ('');
        }}>
        <input name='incoming_text' 
               id='incoming_text' 
               value={incomingText}
               onChange={(event) => setIncomingText(event.target.value)

               }
        />
        <p> 
            characters:{incomingText.length}
        </p>
        <button type='submit'>
            send
        </button>
        </form>
    </>;
}

export default App;