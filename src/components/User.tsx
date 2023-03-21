interface Props {
  picture: string;
  name: string;
  username: string;
  bio: string;
}

export default function User(props: Props) {
  return (
    <div className="user-card">
      <img src={props.picture} alt={`@${props.username}'s profile picture`} />

      <h2>{props.name}</h2>
      <small>@{props.username}</small>
      <p>{props.bio}</p>
    </div>
  );
}
