import { Title } from "solid-start";
// import Counter from "~/components/Counter";
import authCounter from "auth"

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <authCounter />
    </main>
  );
}
