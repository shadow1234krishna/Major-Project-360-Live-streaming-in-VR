import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import { useSpring, animated } from "react-spring";
import FImage from "./Forgot.png";
const ForgotPassword = () => {
	const [email, setEmail] = useState("");
	const [msg, setMsg] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = `http://127.0.0.1:8000/api/user/send-reset-password-email/`;
			const { data } = await axios.post(url, { email });
			setMsg(data.message);
			setError("");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
				setMsg("");
			}
		}
	};
	const imageAnimation = useSpring({
		from: { opacity: 0, transform: "translateX(100%)" },
		to: { opacity: 1, transform: "translateX(0%)" },
		config: { duration: 1000 },
		});
	  

	return (
		<>
		
		<div className={styles.container}>
		<animated.div style ={imageAnimation} className="image-conte">
        <img src={FImage} alt="football"  className="responed-image" />
      </animated.div>
			<form className={styles.form_container} onSubmit={handleSubmit}>
				<p>ForgotPassword</p>
				<input
					type="email"
					placeholder="Enter Registered Email Id"
					name="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
					className={styles.input}
				/>
				{error && <div className={styles.error_msg}>{error}</div>}
				{msg && <div className={styles.success_msg}>{msg}</div>}
				<button type="submit" className={styles.green_btn}>
					Submit
				</button>
			</form>
		</div></>
	);
};

export default ForgotPassword;