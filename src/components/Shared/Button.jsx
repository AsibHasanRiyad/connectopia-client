/* eslint-disable react/prop-types */
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import './Button.css'


const Button = ({title, type}) => {
    return (
        <div>
            <AwesomeButton className="aws-btn" type={type} >{title}</AwesomeButton>
        </div>
    );
};

export default Button;