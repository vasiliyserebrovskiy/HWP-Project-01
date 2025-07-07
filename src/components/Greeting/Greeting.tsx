interface Props {
  name: string;
  age?: number;
}

export default function Greeting(props: Props) {
  const { name, age } = props;
  //const name = "Vasilii";
  return (
    <p>
      Hello, {name}! {age}
    </p>
  );
}
