import styles from "./Login1.module.css"
function Login1(){
	return(
        <div className={styles.container}>
	        <form className={styles.form} action="">
				<input className={styles.input} type="email" />
				<input className={styles.input}  type="password" />
				<button className={styles.button} >Login</button>
			</form>
		</div>
	);
}
export default Login1