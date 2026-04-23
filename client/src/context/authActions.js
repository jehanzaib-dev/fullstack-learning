const loginStart=(userCredentials)=>({
    type:"LOGIN_START",
});

const loginSuccess=(user)=>({
    type:"LOGIN_SUCCESS",
    payload:user
});

const loginFailure=(error)=>({
    type:"LOGIN_FAILURE",
    payload:error
});

const follow=(userId)=>({
    type:"FOLLOW",
    payload:userId
});

const unFollow=(userId)=>({
    type:"UNFOLLOW",
    payload:userId
});

const logout=()=>({
    type:"LOGOUT"
});