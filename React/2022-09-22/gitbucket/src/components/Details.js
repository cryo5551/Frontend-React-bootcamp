const Details = props =>{
    return (
        <div>
            <img src="#" alt="pfp"/>
            <h3>{props.details.name}</h3>
            <h4>{props.details.login}</h4>
            <p> {props.details.created_at} </p>
            <button>Followers {props.followers.length}</button>
            <button>Repositories {props.repolist.length}</button>
            <button>Following {props.following.length}</button>
        </div>
    );
}

export default Details;