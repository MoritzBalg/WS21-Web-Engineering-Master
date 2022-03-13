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

//Test
const temp = revocable(alert);
temp.invoke(7); // führt zu alert(7);
temp.revoke();
temp.invoke(8); // Fehlerabbruch!