

const ValidateSigninData = (email,password)=>{

    const isemailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordvalid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isemailValid) return "Email is not valid";
    if(!isPasswordvalid) return "Password is not valid";
    return null;

}

export default ValidateSigninData;