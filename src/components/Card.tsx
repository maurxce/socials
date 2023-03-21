import { IonIcon } from "@ionic/react";

interface Props {
  title: string;
  src: string;
  icon?: string;
}

export default function Card(props: Props) {
  return (
    <a href={props.src}>
      <IonIcon icon={props.icon}></IonIcon>
      <span>{props.title}</span>
    </a>
  );
}
