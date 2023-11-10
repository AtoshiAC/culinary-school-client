import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404-page.png';
const Error = () => {
    return (
        <div>
            <img className='px-80 mt-64' src={ErrorImg} alt="" />
            <Link className='ml-96 mb-5' to='/'><button className='bg-slate-500 rounded-md'>Go Back</button></Link>
        </div>
    );
};

export default Error;