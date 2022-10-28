import React from "react";
const Myheading = (props) => {
    const a = props.text;
  return (
    <>
      <h1>{props.name} {props.text}</h1>
      <h2> {a}</h2>
      <main>This is main tag.</main>
      <footer>This is footer.</footer>
    </>
  );
};

export const Myheading2 = () => {
  return <h3>My Heading little2</h3>;
};
export const Myheading3 = (props) => {
  return <h3>{props.name}</h3>;
};
export const Myheading4 = () => {
  return <h3>My Heading little4</h3>;
};

export default Myheading;
// export { Myheading2,Myheading3,Myheading4 };
