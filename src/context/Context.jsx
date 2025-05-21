import { createContext, useState } from "react";

export const CurrentOpenChat = createContext();

export const CurrentChatProvider = ({children}) => {
    const [currentChat, setCurrentChat] = useState({
      name:"Ram ji",
      lastMessage:"hello",
      timeStamp:"Today"
    });

    return (
        <CurrentOpenChat.Provider value={{currentChat, setCurrentChat}}>
        {children}
        </CurrentOpenChat.Provider>
    );
};