import { createContext, useContext } from "react";


const CommentContext = createContext();

const CommentProvider = ({ children, data }) => {
    
    return (<CommentContext.Provider value={data}>{children}</CommentContext.Provider>)
}

const useComment = () => useContext(CommentContext);

export { CommentProvider, useComment }