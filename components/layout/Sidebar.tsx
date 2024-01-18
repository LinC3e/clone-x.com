// Icons
import { BsHouseFill , BsBellFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa'

const Sidebar = () => {
    
    const items = [
        {
            icon: BsHouseFill,
            label: 'Home',
            href: '/',
        },
        {
            icon: BsBellFill,
            lable: 'Notifications',
            href: '/notifications',
            auth: true,
        },
        {
            icon: FaUser,
            label: 'Profile',
            href: '/users/123'
        }
    ];
    
    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">

                </div>
            </div>
        </div>
    )
}

export default Sidebar