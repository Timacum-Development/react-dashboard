import styled from 'styled-components';

export const HeaderWrap = styled.div`
	width: 25%;
	padding-bottom: 18px;
`;

export const Navigation = styled.section`
	height: 100%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	justify-content: space-between;
`;
export const LogoWrap = styled.div`
	margin: 47px 0 0 40px;
`;

export const AdminLink = styled.a`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	font-size: 1.375rem;
	line-height: 1.65rem;
	color: #10121a;
`;

export const Admin = styled.span`
	font-size: 1.375rem;
	line-height: 1.65rem;
	color: #10121a;
	font-weight: 500;
`;

export const LogoMain = styled.img`
	display: inline-block;
	width: 43px;
	height: 42px;
	margin-right: 28px;
`;

export const User = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
`;

export const UserImg = styled.img`
	display: block;
	width: 50px;
	height: 50px;
	margin: 0 20px 0 40px;
`;

export const UserName = styled.p`
	font-size: 1.375rem;
	line-height: 2.00125rem;
	margin-right: 30px;
`;
