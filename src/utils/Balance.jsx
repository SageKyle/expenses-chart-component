// styles/ images
import Logo from '../assets/images/logo.svg';
import './Balance.scss';

export const Balance = ({ balance }) => {
	return (
		<section className="balance">
			<div className="balance__content">
				<h1 className="balance__content--title">My balance</h1>
				<h2 className="balance__content--number">${balance}</h2>
			</div>
			<img src={Logo} alt="logo" className="balance__logo" />
		</section>
	);
};
