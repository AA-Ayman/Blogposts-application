//optional file to make things easier to be more generic

import React,{useReducer} from 'react';


export default (reducer,actions, initialstate) =>{

    const Context = React.createContext ();

    const Provider = ({children}) => {

        const [state,dispatch] = useReducer (reducer,initialstate);

        //actions === {addBlogPost : {dispatch } => {return ()=>{} } }

        const boundActions = {};

        for (let key in actions){
            //key = 'addBlogPost     TAKE CARE OF THIS (DISPATCH)!! don't forget it
            boundActions[key] =actions[key] (dispatch);
        }

        return (<Context.Provider value={{state,...boundActions}}>
            {children}
        </Context.Provider>
        )
    }

    return {Context,Provider};

};
