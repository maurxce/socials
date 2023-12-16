import User from "./components/User";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./styles.css";

function getAge() {
  const difference = new Date().getTime() - new Date("2004-01-20").getTime();
  const YEAR_IN_MS = 365 * 24 * 60 * 60 * 1000;
  return ~~(difference / YEAR_IN_MS);
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

      <div className="card-container">
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
      </div>

      <Footer />
    </main>
  );
}
