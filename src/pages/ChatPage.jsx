import React, { useState, useRef, useEffect } from 'react';
const ChatPage = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([]);
    const [image, setImage] = useState(null);
    const [nextReplyIndex, setNextReplyIndex] = useState(0);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    //dummy replies
    const defaultReplies = ['hajur', 'pet dhukyo , aaiya dhukyo', 'ja', 'hmm ', 'umm', 'la vandina aba'];


    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = () => {
        // Check if there's any input text or image to send
        if (inputText.trim() !== '' || image) {
            const newMessages = [...messages];

            // If there's input text, add it as a text message
            if (inputText.trim() !== '') {
                newMessages.push({
                    type: 'text',
                    content: inputText,
                    sentByCurrentUser: true
                });
            }

            // If there's an image, add it as an image message
            if (image) {
                newMessages.push({
                    type: 'image',
                    image: image,
                    sentByCurrentUser: true
                });
                // Clear the image state after sending
                setImage(null);
            }

            // Add automatic replies if available
            if (nextReplyIndex < defaultReplies.length) {
                newMessages.push({
                    type: 'text',
                    content: defaultReplies[nextReplyIndex],
                    sentByCurrentUser: false
                });
                setNextReplyIndex(nextReplyIndex + 1);
            }

            // Update the state with the new messages
            setMessages(newMessages);
            // Clear the input text after sending
            setInputText('');
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const newImages = [];

        // Check if a file is selected
        if (file) {
            // Check if the selected file type is an image
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();

                // Set up onloadend event handler
                reader.onloadend = () => {
                    // Set the image state with the data URL of the selected image
                    setImage(reader.result);
                };

                // Read the selected file as a data URL
                reader.readAsDataURL(file);
            } else {
                // Provide feedback to the user if an unsupported file type is selected
                alert('Please select an image file.');
                // Reset the file input to clear the selection
                event.target.value = null;
                // Reset the image state
                setImage(null);
            }
        } else {
            // Reset the image state if no file is selected
            setImage(null);
        }
    };



    return (
        <>
            <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
                {/* Header */}
                {/* Messages */}
                <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.sentByCurrentUser ? 'justify-end' : 'justify-start'}`}>
                            {/* <div key={index} className="chat-message justify-end"> */}

                            <div className={`flex items-end ${message.sentByCurrentUser ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 ${message.sentByCurrentUser ? 'order-2' : 'order-1'} items-start`}>
                                    {message.type === 'text' && (
                                        <div>
                                            <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                {message.content}
                                            </span>
                                        </div>
                                    )}
                                    {/* Render image if the message type is 'image' */}
                                    {message.type === 'image' && (
                                        <div>
                                            <img src={message.image} alt="Image" className="rounded-lg" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                {/* Input field and send button */}
                <div className="border-t-2 border-gray-200 px-4 pt-4 mb-20 sm:mb-0">
                    <div className="relative flex">
                        {/* Camera button */}
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                            onClick={() => document.getElementById('fileInput').click()}
                        >
<svg fill="#000000" height="20px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 487 487" xml:space="preserve">
<g>
	<g>
		<path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z
			 M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9
			v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z
			 M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z
			 M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z"/>
	</g>
</g>
</svg>                        </button>
                        <input
                            type='file'
                            id='fileInput'
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                            multiple
                        />
                        {/* preview Images */}
                                               {image && (
                            <div style={{ maxWidth: '40px', maxHeight: '40px', overflow: 'hidden' }}>
                                <img src={image} alt="Preview" className="w-auto h-auto max-w-full max-h-full object-cover rounded-lg " />
                            </div>

                        )}
                        

                            <input
                                type="text"
                                placeholder="Ask me about recipes"
                                value={inputText}
                                onChange={handleInputChange}
                                className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
                            />
                            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
                                <button
                                    type="button"
                                    onClick={handleSendMessage}
                                    className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                                >
                                    <span className="font-bold">Send</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="h-6 w-6 ml-2 transform rotate-90"
                                    >
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            );
};

            export default ChatPage;
