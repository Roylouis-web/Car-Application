import { Form } from "react-router-dom";

export async function action() {
  console.log("I am the action function");
  return null;
};

export default function Login() {
    return (
      <div className="form">
        <Form 
          className="login-container"
          method="post"
        >
            <h1>Sign in to your account</h1>
            <input type="email"
            name="email"
            id="email"  
            placeholder="Enter your email"
            />
            <br />
            <br />
            <input type="password" name="password" id="password" placeholder="Enter password"
            />
            <br />
            <br />
            <button>Log in</button>
        </Form>
      </div>
    );
};