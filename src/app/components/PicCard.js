import React from 'react';

const PicCard = (props) => {

	const {
		date,
		explanation,
		hdurl,
		media_type,
		title,
		url,
		copyright,
	} = props.data;

	function renderAPOD() {
		switch(media_type) {
			case('video'):
				return (
					<iframe
						allowFullScreen
						height="520"
						width="720"
						src={url}
						frameborder="0"
					>
					</iframe>
				)
			case('image'):
				return (
					<a href={hdurl} className="picture__img_wrapper">
						<img src={url} alt={title} />
					</a>
				)
			default:
				return null
		}
	}

	return (
		<div className="picture__card">
			<h6 className="picture__title">{title}</h6>

			{renderAPOD()}

			<p>{explanation}</p>

			<span>{date}, {copyright}</span>
		</div>
	)
}

export default PicCard;