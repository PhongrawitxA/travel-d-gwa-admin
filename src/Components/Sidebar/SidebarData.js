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
        icon: <DashboardRoundedIcon style={{fontSize:32}} />,
        link: "/dashboard"
    },
    {
        title: "ผู้ใช้ & พาร์ทเนอร์",
        icon: <PersonRoundedIcon style={{fontSize:32}} />,
        link: "/customer"
    },
    {
        title: "อนุมัติพาร์ทเนอร์",
        icon: <CheckBoxRoundedIcon style={{fontSize:32}} />,
        link: "/confirm-partner"
    },
    {
        title: "พาร์ทเนอร์ที่พัก",
        icon: <MapsHomeWorkRoundedIcon style={{fontSize:32}} />,
        link: "/accommodation-partner"
    },
    {
        title: "พาร์ทเนอร์เช่ารถ",
        icon: <DirectionsCarRoundedIcon style={{fontSize:32}} />,
        link: "/rentcar-partner"
    },
    {
        title: "พาร์ทเนอร์รถ รับ - ส่ง",
        icon: <SwapHorizRoundedIcon style={{fontSize:32}} />,
        link: "/shuttle-partner"
    },
    {
        title: "พาร์ทเนอร์กิจกรรม",
        icon: <LocalActivityRoundedIcon style={{fontSize:32}} />,
        link: "/activity-partner"
    },
    {
        title: "ข้อมูลการซื้อขาย",
        icon: <AssignmentRoundedIcon style={{fontSize:32}} />,
        link: "/receipt-information"
    },
    {
        title: "การจัดการข้อมูล",
        icon: <InsertChartRoundedIcon style={{fontSize:32}} />,
        link: "/manage-information"
    }
]