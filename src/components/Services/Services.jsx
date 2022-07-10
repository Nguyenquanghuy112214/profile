import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";
import { Link } from "react-scroll";

const Services = () => {
	// context
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;

	// transition
	const transition = {
		duration: 1,
		type: "spring",
	};

	return (
		<div className="services" id="services">
			{/* left side */}
			<div className="awesome">
				{/* dark mode */}
				<span style={{ color: darkMode ? "white" : "" }}>Phần tiếp theo</span>
				<span>Sở thích của tôi</span>
				<spane>
					Thích dỗi Nguyễn Quang Huy
					<br />
					thích được chiềuuuuuuuuu.... zzz
				</spane>
				<Link to="Navbar" sky={true} smooth={true} download>
					<button className="button s-button">Xem sở thích</button>
				</Link>
				<div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
			</div>
			{/* right */}
			<div className="cards">
				{/* first card */}
				<motion.div
					initial={{ left: "25rem" }}
					whileInView={{ left: "14rem" }}
					transition={transition}
				>
					<Card
						emoji={HeartEmoji}
						heading={"Thích giận dỗi"}
						detail={"Chúa tể giận dỗi nhé."}
					/>
				</motion.div>
				{/* second card */}
				<motion.div
					initial={{ left: "-11rem", top: "12rem" }}
					whileInView={{ left: "-4rem" }}
					transition={transition}
				>
					<Card
						emoji={Glasses}
						heading={"Thích được chiều chuộng"}
						detail={"Cái này NQH đồng ý"}
					/>
				</motion.div>
				{/* 3rd */}
				<motion.div
					initial={{ top: "19rem", left: "25rem" }}
					whileInView={{ left: "12rem" }}
					transition={transition}
				>
					<Card
						emoji={Humble}
						heading={"Bị đáng yêu"}
						detail={"Chucamooooo"}
						color="rgba(252, 166, 31, 0.45)"
					/>
				</motion.div>
				<div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
			</div>
		</div>
	);
};

export default Services;
