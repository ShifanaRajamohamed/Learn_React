import User from "./assets/user";

function Hello(){
  return <h1>Hello World</h1>;
}
function App(){
  const userData={
    name:"riyal",
    age: 25,
    phone:"9087654321",
    email:"priya@gmail.com",
  };
  // const {age} = userData;

  return (
    <div>
      <h1>hey</h1>
      <User 
      data={userData}
      />

    </div>
  );
}

export {App,Hello};