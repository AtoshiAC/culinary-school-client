import { Helmet } from 'react-helmet-async';
import useMenu from '../../../hooks/useMenu';


const Menu = () => {
    const [menu] = useMenu();
    return (
        <div>
            <Helmet>
                <title>Culinary School | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
        </div>
    );
};

export default Menu;