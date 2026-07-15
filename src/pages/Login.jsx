import styles from "./Login.module.css";
import useHello from "../hooks/useHello";

function Login() {
  const message = useHello();

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
        />

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />

        <button className={styles.button}>
          Login
        </button>

        <a href="#">Forgot password?</a>
        <a href="#">Don't have an account?</a>
        <a href="#">Register</a>

        <p className={styles.message}>
          Backenddan kelgan xabar: {message}
        </p>
      </form>
    </div>
  );
}

export default Login;