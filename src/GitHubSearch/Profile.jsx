import React from 'react'

const Profile = ({data}) => {
  console.log(data);
  const{followers,following,login, name,repos_url,created_at, url, avatar_url}=data;
  const createdDate = new Date(created_at);
  return (
    <div>
      <h1>Profile</h1>
      {name ? <h2>{name}</h2> : <h2>{login}</h2>}
      <img src={avatar_url} alt="" />
      <div className="details">
        <div>
          <span>followers {followers}</span>
        </div>
        <div>
          <span>following {following}</span>
        </div>
      </div>
      <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleDateString(`en-us`,{
        month:"short",
      })} ${createdDate.getFullYear()}`} </p>
      <a href={repos_url}>Repo Link:{repos_url}</a>
      <br />
      <a href={url}>Profile Link:{url} </a>

    </div>
  );
}

export default Profile