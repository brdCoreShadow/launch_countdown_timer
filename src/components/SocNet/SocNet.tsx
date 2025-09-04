import * as SC from "./SocNetStyled"

import fbIcon from "../../assets/images/icon-facebook.svg"
import pinterestIcon from "../../assets/images/icon-pinterest.svg"
import instagramIcon from "../../assets/images/icon-instagram.svg"

const SocNet:React.FC = () => {
    return ( 
        <SC.SocNetList>
            <li>
                <a href="https://www.facebook.com/sasha.berdichevsky">
                    <img src={fbIcon} alt="facebook" />
                </a>
            </li>
            <li>
                <a href="https://ru.pinterest.com/brdcore/">
                    <img src={pinterestIcon} alt="pinterest" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/berd__man/">
                    <img src={instagramIcon} alt="instagram" />
                </a>
            </li>
        </SC.SocNetList>
     );
}
 
export default SocNet;