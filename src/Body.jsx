import "./Body.css";
const Body = () => {
    return(
        <div>
            <h1 style={{
                marginTop: "3rem",
                textAlign: "center",
                color: "green"
            }}>Sure Priority to Your Mind</h1>

            <div style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
            alignItems: "center",
            }}>
            
                <Card name="Child" className= "card"/>
                <Card name="Teen" className="card"/>
                <Card n ="n" name="Adult"className="card"/>
            </div>
            
        </div>
    )
};

function Card({name, n, className}){
    return(
       <div className = {className} >
            <h3> As a{n} {name}</h3> 
            <p>Daily renewal of the mind should be a priority</p>
       </div>
    )
}

export default Body;