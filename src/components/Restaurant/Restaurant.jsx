import {Menu} from "../Menu/Menu";
import {Reviews} from "../Reviews/Reviews";
import './Restaurant.css';

export const Restaurant = ({ name, menu, reviews }) => {
    return (
        <div>
            <h1>{name}</h1>
            <Menu menu={menu} />
            <Reviews reviews={reviews} />
        </div>
    )
}
