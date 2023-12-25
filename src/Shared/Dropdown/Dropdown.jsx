import './Dropdown.css'
const Dropdown = () => {
    return (
        <div className="dropdown">
             <ul className='text-sm space-y-2'>
                <li className='hover:text-[#0A2258] duration-300'><a href="">Journals by Subjects</a></li>
                <li className='hover:text-[#0A2258] duration-300'><a href="">Complete List of Journals</a></li>
             </ul>
        </div>
    );
};

export default Dropdown;