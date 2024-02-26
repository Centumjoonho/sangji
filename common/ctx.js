import React from 'react';
import { useStorageState } from './useStorageState';
import { LoginAPI } from './api/ApiBase';

const AuthContext = React.createContext();

export function useSession(){
    const value = React.useContext(AuthContext);
    
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
          throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }

    return value;
}

export function SessionProvider(props){
    const [[isLoading, session], setSession] = useStorageState('session');

    return (
        <AuthContext.Provider
          value={{
            signIn: async ({id, password}) => {
              const fd = new URLSearchParams();
              fd.append("id", id);
              fd.append("password", password);
              
              // Perform sign-in logic here
              try{
                const req = await LoginAPI.post(fd.toString(), {
                  "Content-Type": "application/x-www-form-urlencoded",
                });
                const result = await req.json();

                if (result.success){
                  console.log(result);
                  setSession(result.user);
                  return true;
                }
              }catch(err){
                console.error(err);
              }

              return false;

            },
            signOut: () => {
              setSession(null);
            },
            session,
            isLoading,
          }}>
          {props.children}
        </AuthContext.Provider>
      );
}