import React from 'react'

import { MdDashboard, MdMapsHomeWork, MdAirportShuttle, MdLocalActivity, MdAssignment, MdInsertChart } from 'react-icons/md'
import { FaUser, FaCarSide } from 'react-icons/fa'
import { IoCheckbox } from 'react-icons/io5'

export const SideMenuData = [
    {
        title: "หน้าหลัก",
        icon: <MdDashboard />,
        link: "/dashboard"
    },
    {
        title: "ผู้ใช้ & พาร์ทเนอร์",
        icon: <FaUser />,
        link: "/customer"
    },
    {
        title: "อนุมัติพาร์ทเนอร์",
        icon: <IoCheckbox />,
        link: "#",
        subMenu: [
            {
                title: "พาร์ทเนอร์ที่พัก",
                link: "/confirm-partner/accommodation",
            },
            {
                title: "พาร์ทเนอร์เช่ารถ",
                link: "/confirm-partner/accommodation",
            },
            {
                title: "พาร์ทเนอร์รถ รับ - ส่ง",
                link: "/confirm-partner/accommodation",
            },
            {
                title: "พาร์ทเนอร์กิจกรรม",
                link: "/confirm-partner/accommodation",
            }
        ]
    },
    {
        title: "พาร์ทเนอร์ที่พัก",
        icon: <MdMapsHomeWork />,
        link: "/accommodation-partner"
    },
    {
        title: "พาร์ทเนอร์เช่ารถ",
        icon: <FaCarSide />,
        link: "/rentcar-partner"
    },
    {
        title: "พาร์ทเนอร์รถ รับ - ส่ง",
        icon: <MdAirportShuttle />,
        link: "/shuttle-partner"
    },
    {
        title: "พาร์ทเนอร์กิจกรรม",
        icon: <MdLocalActivity />,
        link: "/activity-partner"
    },
    {
        title: "ข้อมูลการซื้อขาย",
        icon: <MdAssignment />,
        link: "#",
        subMenu: [
            {
                title: "พาร์ทเนอร์ที่พัก",
                link: "/confirm-partner/accommodation",
            },
            {
                title: "พาร์ทเนอร์เช่ารถ",
                link: "/confirm-partner/accommodation",
            },
            {
                title: "พาร์ทเนอร์รถ รับ - ส่ง",
                link: "/confirm-partner/accommodation",
            },
            {
                title: "พาร์ทเนอร์กิจกรรม",
                link: "/confirm-partner/accommodation",
            }
        ]
    },
    {
        title: "การจัดการข้อมูล",
        icon: <MdInsertChart />,
        link: "/manage-information"
    }
]