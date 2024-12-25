type GreetProps = {
  name?: string;
};

const Greet = (props: GreetProps) => {
  return props?.name ? <h1>Hello {props.name}</h1> : <h1>Hello</h1>;
};
export default Greet;
