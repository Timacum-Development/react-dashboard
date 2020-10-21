import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 75%;
	position: relative;
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 0;
	padding-bottom: 734px;
	background: transparent linear-gradient(217deg, #1d2339 0%, #10121a 100%) 0%
		0% no-repeat padding-box;
	opacity: 1;
	border-bottom-left-radius: 200px;
	position: absolute;
	z-index: -1;
`;

export const MainHeading = styled.h1`
	font-size: 3.125rem;
	line-height: 3.75rem;
	color: #ffffff;
	font-weight: 300;
	margin-bottom: 22px;
`;

export const BoldHeading = styled.span`
	display: inline-block;
	line-height: 3.75rem;
	font-weight: 500;
`;

export const SmallerHeading = styled.h2`
	font-size: 1.625rem;
	line-height: 2.25rem;
	font-weight: 400;
	color: #ffffff;
`;

export const HeadingWrap = styled.div`
	padding: 102px 0 0 133px;
	position: relative;
`;

export const Burger = styled.div`
	width: 60px;
	height: 60px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 10px 20px #0000004d;
	border-radius: 23px;
	opacity: 1;
	position: absolute;
	right: 179px;
	top: 50%;
	transform: translateY(50%);display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

`;

export const Line = styled.img`
	display: block;
	width: 32px;
	height: 32px;
	opacity: 1;
`;

export const CardWrapper = styled.div`
	max-width: 1340px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	position: relative;
  top: 117px;
  left: 133px;
}
`;

export const SmallCardWrap = styled.div`
	width: 494px;
	max-width: 494px;
	box-sizing: border-box;
`;

export const SmallCard = styled.div`
	padding: 38px 40px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 10px 30px #13171f33;
	border-radius: 20px;
	opacity: 1;
	margin-bottom: 39px;

	&:last-child {
		margin-bottom: 0;
	}
`;

export const LargeCard = styled.div`
	width: 494px;
	max-width: 494px;
	padding: 38px 40px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 10px 30px #13171f33;
	border-radius: 20px;
	opacity: 1;
	position: relative;
	box-sizing: border-box;

	&:last-child {
		width: 272px;
		max-width: 272px;
	}
`;

export const CardHeading = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 40px;
`;

export const Dots = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const Dot = styled.div`
	height: 5px;
	width: 5px;
	background: #c3c6d1 0% 0% no-repeat padding-box;
	border-radius: 50%;
	margin-right: 3px;
`;

export const SmallestHeading = styled.p`
	font-size: 1.375rem;
	line-height: 2.00125rem;
	color: #858997;
`;

export const ArrowWrap = styled.div`
	display: flex;
  flex-wrap: wrap;
  align-items: center;
	margin-bottom: 25px;
}
`;

export const ArrowIcon = styled.img`
	display: block;
	width: 32px;
	height: 32px;
	margin-right: 7px;
`;

export const SmallText = styled.p`
	font-size: 1.25rem;
	line-height: 1.75125rem;
	color: #00cd98;

	&.red-text {
		color: #f64000;
	}
`;

export const LargeNumbers = styled.p`
	font-size: 2.625rem;
	font-weight: 700;
	line-height: 3.335625rem;
	color: #15181a;
`;

export const Wrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const NumbersWrap = styled.div`
	margin: 0;
`;

export const Graph = styled.img`
	display: block;
	width: 187px;
	height: 93px;
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 37px 45px 0;
`;

export const Info = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 32%;
`;

export const InfoTxt = styled.p`
	font-size: 1.125rem;
	line-height: 1.75125rem;
	color: #858997;
`;

export const InfoDot = styled.div`
	width: 13px;
	height: 13px;
	background: #6545ba 0% 0% no-repeat padding-box;
	border-radius: 5px;
	margin-right: 20px;

	&.blue {
		background-color: #80c9ff;
	}
	&.orange {
		background-color: #ff8886;
	}
`;

export const CircleGraph = styled.img`
	display: block;
	width: 306px;
	height: 305px;
	position: absolute;
	left: 50%;
	transform: translate(-50%) rotate(270deg);
`;

export const LineGraph = styled.img`
	display: block;
	height: 229px;
	position: relative;
	top: 40px;
	left: -40px;
`;

export const DateWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Date = styled.p`
	font-size: 1.125rem;
	line-height: 1.75125rem;
	color: #858997;
	text-align: center;
`;

export const Slider = styled.div`
	width: 1160px;
	height: 8px;
	background: #eeeff3 0% 0% no-repeat padding-box;
	border-radius: 3px;
	position: absolute;
	bottom: 69px;
	left: 133px;
`;

export const InsideSlider = styled.div`
	width: 360px;
	height: 8px;
	background: #858997 0% 0% no-repeat padding-box;
	border-radius: 3px;
`;
