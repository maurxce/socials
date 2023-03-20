export default function Card(props) {
  return (
    <a href={props.src}>
      <ion-icon name={props.icon}></ion-icon>
      <span>{props.title}</span>
    </a>
  );
}
