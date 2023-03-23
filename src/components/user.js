

const User =({user})=>{
    return(
        <>
        <h2>id usuario:{user._id}</h2>
        <h2>nombre usuario:{user.name}</h2>
        <h2>email usuario:{user.email}</h2>
        </>
    )
}  

export default User;