function Student(props){
    return (
        <div style={{backgroundColor : "skyblue", margin: 10}}>
            <h1>checking props data {props.name}</h1>
            <p>{props.email}</p>
        </div>
    )
}

export default Student