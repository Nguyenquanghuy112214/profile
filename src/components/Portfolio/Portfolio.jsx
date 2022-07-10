import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

import MusicApp from "../../img/musicapp.png";
import anh1 from "../../img/anhd1.jpg";
import anh2 from "../../img/anhd2.jpg";
import anh3 from "../../img/anhd3.jpg";
import anh4 from "../../img/anhd4.jpg";
import anh5 from "../../img/anhd5.jpg";
import { themeContext } from "../../Context";
const Portfolio = () => {
	const theme = useContext(themeContext);
	const darkMode = theme.state.darkMode;
	return (
		<div className="portfolio" id="portfolio">
			{/* heading */}
			<span style={{ color: darkMode ? "white" : "" }}>Tiếp theo nhé</span>
			<span>Ảnh xinh đẹp</span>

			{/* slider */}
			<Swiper
				modules={[Autoplay]}
				loop={true}
				autoplay={{ delay: 2000 }}
				spaceBetween={10}
				slidesPerView={"auto"}
				grabCursor={true}
				className="portfolio-slider"
			>
				<SwiperSlide>
					<img src={anh1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={anh2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={anh3} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={anh4} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src={anh5} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Portfolio;
