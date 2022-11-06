const Details = props =>{
    return (
        <div>
            <img src="#" alt="pfp"/>
            <h3>{props.details.name} Name</h3>
            <h4>Username</h4>
            <p> Created On </p>
            <button>Followers</button>
            <button>Repository</button>
            <button>Following</button>
        </div>
    );
}

export default Details;