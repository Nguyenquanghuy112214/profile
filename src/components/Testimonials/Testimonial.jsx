import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/tt.jpg";
import profilePic2 from "../../img/th.jpg";
import profilePic3 from "../../img/dt.jpg";
import profilePic4 from "../../img/dh.jpg";

const Testimonial = () => {
	const clients = [
		{
			img: profilePic1,
			review: "Người yêu tôi không đi, tôi hủy kèo nhé!",
		},
		{
			img: profilePic2,
			review: "Người yêu tao bên Tây bị dịch chết rồi",
		},
		{
			img: profilePic3,
			review: "Tao sẽ cưới muộn cho ổn định, cưới sớm khổ lắm!",
		},
		{
			img: profilePic4,
			review: "Lâu không gặp, không nhớ gì ạ!",
		},
	];

	return (
		<div className="t-wrapper" id="testimonial">
			<div className="t-heading">
				<span>Những câu nói bất hủ của</span>
				<span>Thanh Tâm, Thu Hà, Đào Thu, Đào Hồng </span>
				{/* <span>from me...</span> */}
				<div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
				<div className="blur t-blur2" style={{ background: "skyblue" }}></div>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Pagination]}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{clients.map((client, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="testimonial">
								<img src={client.img} alt="" />
								<span>{client.review}</span>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default Testimonial;
