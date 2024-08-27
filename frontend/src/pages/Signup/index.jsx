import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {useGoogleLogin} from '@react-oauth/google'

function Signup() {
	const signin = useGoogleLogin({
		onSuccess: async (response) => {
		  try {
			const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
			  headers: {
				Authorization: `Bearer ${response.access_token}`,
			  },
			});
		}
		catch(err){
			console.error('login failed', error);
		}

	  }
	
});
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Sign up Form</h1>
			<div className={styles.form_container}>
				<div className={styles.left}>
					<img className={styles.img} src="./images/signup.jpg" alt="signup" />
				</div>
				<div className={styles.right}>
					<h2 className={styles.from_heading}>Create Account</h2>
					<input type="text" className={styles.input} placeholder="Username" />
					<input type="text" className={styles.input} placeholder="Email" />
					<input
						type="password"
						className={styles.input}
						placeholder="Password"
					/>
					<button className={styles.btn}>Sign Up</button>
					<p className={styles.text}>or</p>
					<button className={styles.google_btn} onClick={signin}>
						<img src="./images/google.png" alt="google icon" />
						<span>Sign up with Google</span>
					</button>
					<p className={styles.text}>
						Already Have Account ? <Link to="/login">Log In</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Signup;