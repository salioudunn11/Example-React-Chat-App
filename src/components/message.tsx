

const Message = ({ text, name }) => {

    return (
        <p className="message">
            {text} - {name}
        </p>
    );
};

export default Message;