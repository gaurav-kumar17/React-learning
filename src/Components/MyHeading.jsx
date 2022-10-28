import React from "react";
const a = 32;
const Myheading = () => {
  return (
    <>
      <p>Myheading {a}</p>
    </>
  );
};

const Myheading2 = () => {return <h3>My Heading little2</h3>};
const Myheading3 = () => {return <h3>My Heading little3</h3>};
const Myheading4 = () => {return <h3>My Heading little4</h3>};

export default Myheading;
export { Myheading2,Myheading3,Myheading4 };
