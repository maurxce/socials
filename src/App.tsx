import User from "./components/User";
import Card from "./components/Card";
import Footer from "./components/Footer";
import moment from "moment";
import "./styles.css";

function getAge() {
  moment.updateLocale("en", {
    relativeTime: {
      yy: "%d",
    },
  });

  return moment("2004-01-20").fromNow(true);
}

export default function App() {
  return (
    <main>
      <User
        picture="https://avatars.githubusercontent.com/u/91284394?v=4"
        name="Maurice Schorn"
        username="maurxce"
        bio={`${getAge()} year old Developer from Germany.`}
      />

      <Card
        title="Portfolio"
        src="https://maurxce.dev/"
        icon="person-outline"
      />
      <Card
        title="GitHub"
        src="https://maurxce.dev/github"
        icon="logo-github"
      />
      <Card
        title="Discord"
        src="https://maurxce.dev/discord"
        icon="logo-discord"
      />

      <Footer />
    </main>
  );
}
