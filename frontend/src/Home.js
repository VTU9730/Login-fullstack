function Home(){
    const username=localStorage.getItem("email")
    return(
        <div>
            <h1>Hello {username.split("@")[0]}</h1>
        </div>
    )
}
export default Home;