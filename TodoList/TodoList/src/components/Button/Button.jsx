import { Btn } from './ButtonStyle';

const Button = ({ confirm, text }) => (
    <Btn className={confirm ? 'confirm' : 'cancel'}>{ text }</Btn>
);

export default Button;