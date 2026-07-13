import styles from "./Login.module.css"
function Login() {
  return (
    <div className={styles.container}>
<form className={styles.form} action="">
<input className={styles.input} type="email" name="email" id="email" />
<input className={styles.input} type="password" name="password" id="password" />
<button className={styles.button}>Login</button>
<a href="">Forgot password?</a>
<a href="">Don't have an account?</a>
<a href="">registr</a>
      </form>
    </div>
  );
}
export default Login