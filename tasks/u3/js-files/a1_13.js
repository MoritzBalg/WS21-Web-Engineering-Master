function revocable(func){
    let revoked = false;
    return{
        invoke: (a)=>{
            if(!revoked){
                func(a);
            }else{
                throw new Error("This function was revoked!")
            }
        },
        revoke: _=>{revoked = true;}
    }
}