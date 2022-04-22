
export const emailChecks=(ids_,email)=>{

    const res = ids_.filter(eml=> eml===email);
    if(res.length===0){
        return false
    }
    return true;

}