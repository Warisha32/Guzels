import React from 'react';
import LogIn from '../../Components/LogIn';
import SignUp from '../../Components/SignUp';

const Landing = () => {
    return(
        <div>
<div>if u have account:
    <div><LogIn/></div>
</div>
<div>
    New user:
    <div><SignUp/></div>
</div>
        </div>

    );
}
export default Landing;