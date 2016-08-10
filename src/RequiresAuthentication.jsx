import React from 'react';

const RequiresAuthentication = ({ Authenticated, Unauthenticated }) => ({ authenticated, onLogin, ...props }) => {
    return authenticated ? <Authenticated {...props} /> : <Unauthenticated onLogin={onLogin} {...props} />;
};

export default RequiresAuthentication;