import React from 'react';
import {
	Wrapper,
	BackgroundImage,
	MainHeading,
	BoldHeading,
	SmallerHeading,
	HeadingWrap,
	Burger,
	Line,
	CardWrapper,
	SmallCard,
	LargeCard,
	SmallCardWrap,
	CardHeading,
	Dots,
	Dot,
	SmallestHeading,
	ArrowWrap,
	ArrowIcon,
	SmallText,
	LargeNumbers,
	Wrap,
	NumbersWrap,
	Graph,
	InfoWrap,
	InfoTxt,
	InfoDot,
	Info,
	CircleGraph,
	LineGraph,
	DateWrap,
	Date,
	Slider,
	InsideSlider,
} from '../Homepage/style';

import LineBurger from '../../../assets/Menu Icon.svg';
import ArrowGreen from '../../../assets/Up Icon.svg';
import ArrowRed from '../../../assets/Down Icon.svg';
import Graph1 from '../../../assets/Graph copy.svg';
import Graph2 from '../../../assets/Graph.svg';
import Graph3 from '../../../assets/Graph circle.svg';
import Graph4 from '../../../assets/Graph line.svg';

const Homepage = () => {
	return (
		<Wrapper>
			<BackgroundImage />
			<HeadingWrap>
				<MainHeading>
					Welcome back, <BoldHeading>Arjun Makwana.</BoldHeading>{' '}
				</MainHeading>
				<SmallerHeading>Hi Arjun, This is your dashboard.</SmallerHeading>
				<Burger>
					<Line src={LineBurger} />
				</Burger>
			</HeadingWrap>
			<CardWrapper>
				<SmallCardWrap>
					<SmallCard>
						<CardHeading>
							<SmallestHeading>Daily Visits</SmallestHeading>
							<Dots>
								<Dot />
								<Dot />
								<Dot />
							</Dots>
						</CardHeading>
						<Wrap>
							<NumbersWrap>
								<ArrowWrap>
									<ArrowIcon src={ArrowGreen} />
									<SmallText>+ 3.81%</SmallText>
								</ArrowWrap>
								<LargeNumbers>178,080</LargeNumbers>
							</NumbersWrap>
							<Graph src={Graph1} />
						</Wrap>
					</SmallCard>
					<SmallCard>
						<CardHeading>
							<SmallestHeading>Total Earnings</SmallestHeading>
							<Dots>
								<Dot />
								<Dot />
								<Dot />
							</Dots>
						</CardHeading>
						<Wrap>
							<NumbersWrap>
								<ArrowWrap>
									<ArrowIcon src={ArrowRed} />
									<SmallText className='red-text'>- 0.42%</SmallText>
								</ArrowWrap>
								<LargeNumbers>$ 239.94</LargeNumbers>
							</NumbersWrap>
							<Graph src={Graph2} />
						</Wrap>
					</SmallCard>
				</SmallCardWrap>
				<LargeCard>
					<CardHeading>
						<SmallestHeading>Statistics</SmallestHeading>
						<Dots>
							<Dot />
							<Dot />
							<Dot />
						</Dots>
					</CardHeading>
					<InfoWrap>
						<Info>
							<InfoDot />
							<InfoTxt>Visits</InfoTxt>
						</Info>
						<Info>
							<InfoDot className='blue' />
							<InfoTxt>Sales</InfoTxt>
						</Info>
						<Info>
							<InfoDot className='orange' />
							<InfoTxt>Earnings</InfoTxt>
						</Info>
					</InfoWrap>
					<CircleGraph src={Graph3} />
				</LargeCard>
				<LargeCard>
					<CardHeading>
						<SmallestHeading>Statistics</SmallestHeading>
						<Dots>
							<Dot />
							<Dot />
							<Dot />
						</Dots>
					</CardHeading>
					<ArrowWrap>
						<ArrowIcon src={ArrowGreen} />
						<SmallText>+ 3.49%</SmallText>
					</ArrowWrap>
					<LargeNumbers>25, 102</LargeNumbers>
					<LineGraph src={Graph4} />
					<DateWrap>
						<Date>01/03</Date>
						<Date>07/03</Date>
						<Date>14/03</Date>
					</DateWrap>
				</LargeCard>
			</CardWrapper>
			<Slider>
				<InsideSlider />
			</Slider>
		</Wrapper>
	);
};

export default Homepage;
