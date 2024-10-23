import "../public/App.css";
import Form from "./component/Form";
import SubmitButton from "./component/SubmitButton";
import Signup from "./component/SignUp";
import Horizontalline from "./component/Horizontalline";
import FacebookIcon from "./component/FacebookIcon";
import GoogleIcon from "./component/GoogleIcon";
import Registered from "./component/Registered";

function App() {

  const isLoggedIn = false;
  
  return (
    <div>{isLoggedIn ? <Registered/> :
    <div className="container">
      <h1 className="heading-form">Signup</h1>
     <div className="form">
        <Form />
        <SubmitButton />
        <Signup title="Already have an account?" name="Login"/>
        <Horizontalline />
        <FacebookIcon />
        <GoogleIcon />
      </div> 
    </div>}
    </div>
  );
}

export default App;
