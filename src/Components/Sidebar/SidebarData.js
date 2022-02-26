import React from 'react'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import MapsHomeWorkRoundedIcon from '@mui/icons-material/MapsHomeWorkRounded';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import SwapHorizRoundedIcon from '@mui/icons-material/SwapHorizRounded';
import LocalActivityRoundedIcon from '@mui/icons-material/LocalActivityRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';

export const SidebarData = [
    {
        title: "หน้าหลัก",
        icon: <DashboardRoundedIcon />,
        link: "/dashboard"
    },
    {
        title: "ผู้ใช้ & พาร์ทเนอร์",
        icon: <PersonRoundedIcon />,
        link: "/user"
    },
    {
        title: "อนุมัติพาร์ทเนอร์",
        icon: <CheckBoxRoundedIcon />,
        link: "/confirm-partner"
    },
    {
        title: "พาร์ทเนอร์ที่พัก",
        icon: <MapsHomeWorkRoundedIcon />,
        link: "/accommodation-partner"
    },
    {
        title: "พาร์ทเนอร์เช่ารถ",
        icon: <DirectionsCarRoundedIcon />,
        link: "/rentcar-partner"
    },
    {
        title: "พาร์ทเนอร์รถ รับ - ส่ง",
        icon: <SwapHorizRoundedIcon />,
        link: "/shuttle-partner"
    },
    {
        title: "พาร์ทเนอร์กิจกรรม",
        icon: <LocalActivityRoundedIcon />,
        link: "/activity-partner"
    },
    {
        title: "ข้อมูลการซื้อขาย",
        icon: <AssignmentRoundedIcon />,
        link: "/receipt-information"
    },
    {
        title: "การจัดการข้อมูล",
        icon: <InsertChartRoundedIcon />,
        link: "/manage-information"
    }
]