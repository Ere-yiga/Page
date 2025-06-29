function Hero(){
    return(
        <div style={{
            backgroundColor: "grey",
            height: "100vh",
            maxHeight:"50vh",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
        <p style={{
            fontSize: "3rem",
            background: "linear-gradient(90deg, green, yellow)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "bold"
            }}>Mind & Body Balance</p>

            <button style={{
                marginTop: "1rem",
                width: "10rem",
                padding: ".5rem",
                fontSize: "1.3rem",
                border: "none",
                borderRadius: "2rem",
                background: "linear-gradient(90deg, green, yellow)",
                color: "black",
                opacity: ".4"
                
            }}>Know more</button>
        </div>
    )
}
export default Hero;