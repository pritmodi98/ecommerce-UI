import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import imgSrcArr from "../../../../common/assets/images/image-slider";

const ImageSlider = () => {
	const [index, setIndex] = useState(0);
	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
			<Carousel.Item>
				<img className="d-block w-100" src={imgSrcArr[0]} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgSrcArr[1]} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgSrcArr[2]} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgSrcArr[3]} alt="Fourth slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={imgSrcArr[4]} alt="Fifth slide" />
			</Carousel.Item>
		</Carousel>
	);
};

export default ImageSlider;
