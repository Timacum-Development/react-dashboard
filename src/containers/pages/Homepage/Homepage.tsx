import React from 'react';
import {Wrapper, BackgroundImage, MainHeading, BoldHeading, SmallerHeading, HeadingWrap, Burger, Line} from '../Homepage/style'

const Homepage = () => {
	return (
		<Wrapper>
			<BackgroundImage/>
			<HeadingWrap>
				<MainHeading>Welcome back, <BoldHeading>Arjun Makwana.</BoldHeading> </MainHeading>
				<SmallerHeading>Hi Arjun, This is your dashboard.</SmallerHeading>
				<Burger></Burger>
			</HeadingWrap>
			<div>
				<p>Daily Visits</p>
				<p>+ 3.81%</p>
				<p>178,080</p>
			</div>
			<div>
				<p>Total Earnings</p>
				<p>- 0.42%</p>
				<p>$ 239.94</p>
			</div>
			<div>
				<p>Statistics</p>
				<p>Visits</p>
				<p>Sales</p>
				<p>Earnings</p>
			</div>
			<div>
				<p>Statistics</p>
				<p>+ 3.49%</p>
				<p>25,102</p>
				<p>01/03</p>
				<p>07/03</p>
				<p>14/03</p>
			</div>
		</Wrapper>
	);
};

export default Homepage;
