import React from 'react'

import { MdDashboard, MdMapsHomeWork, MdAirportShuttle, MdLocalActivity, MdAssignment, MdInsertChart } from 'react-icons/md'
import { FaUser, FaCarSide } from 'react-icons/fa'
import { IoCheckbox } from 'react-icons/io5'

export const SideMenuData = [
    {
        title: "หน้าหลัก",
        icon: <MdDashboard />,
        link: "/dashboard",
        checkActive: "dashboard"
    },
    {
        title: "ผู้ใช้ & พาร์ทเนอร์",
        icon: <FaUser />,
        link: "/customer",
        checkActive: "customer"
    },
    {
        title: "อนุมัติพาร์ทเนอร์",
        icon: <IoCheckbox />,
        link: "#",
        checkActive: "confirm-partner",
        subMenu: [
            {
                title: "พาร์ทเนอร์ที่พัก",
                link: "/confirm-partner/accommodation",
                checkActive:"accommodation",
            },
            {
                title: "พาร์ทเนอร์เช่ารถ",
                link: "/confirm-partner/rentcar",
                checkActive:"rentcar",
            },
            {
                title: "พาร์ทเนอร์รถ รับ - ส่ง",
                link: "/confirm-partner/shuttle",
                checkActive:"shuttle",
            },
            {
                title: "พาร์ทเนอร์กิจกรรม",
                link: "/confirm-partner/activity",
                checkActive:"activity",
            }
        ]
    },
    {
        title: "พาร์ทเนอร์ที่พัก",
        icon: <MdMapsHomeWork />,
        link: "/accommodation-partner",
        checkActive: "accommodation-partner"
    },
    {
        title: "พาร์ทเนอร์เช่ารถ",
        icon: <FaCarSide />,
        link: "/rentcar-partner",
        checkActive: "rentcar-partner"
    },
    {
        title: "พาร์ทเนอร์รถ รับ - ส่ง",
        icon: <MdAirportShuttle />,
        link: "/shuttle-partner",
        checkActive: "shuttle-partner"
    },
    {
        title: "พาร์ทเนอร์กิจกรรม",
        icon: <MdLocalActivity />,
        link: "/activity-partner",
        checkActive: "activity-partner"
    },
    {
        title: "ข้อมูลการซื้อขาย",
        icon: <MdAssignment />,
        link: "#",
        checkActive: "receipt-information",
        subMenu: [
            {
                title: "พาร์ทเนอร์ที่พัก",
                link: "/receipt-information/accommodation",
                checkActive:"accommodation",
            },
            {
                title: "พาร์ทเนอร์เช่ารถ",
                link: "/receipt-information/rentcar",
                checkActive:"rentcar",
            },
            {
                title: "พาร์ทเนอร์รถ รับ - ส่ง",
                link: "/receipt-information/shuttle",
                checkActive:"shuttle",
            },
            {
                title: "พาร์ทเนอร์กิจกรรม",
                link: "/receipt-information/activity",
                checkActive:"activity",
            }
        ]
    },
    {
        title: "การจัดการข้อมูล",
        icon: <MdInsertChart />,
        link: "/manage-information",
        checkActive: "manage-information"
    }
]