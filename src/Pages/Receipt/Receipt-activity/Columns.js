export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    // {
    //     Header: 'ชื่อผู้ใช้',
    //     accessor: 'usernameID.realname',
    //     IdName: 'Realname'
    // },
    // {
    //     Header: 'นามสกุล',
    //     accessor: 'usernameID.surname',
    //     IdName: 'Surname'
    // },
    {
        Header: 'อีเมล',
        accessor: 'usernameID.email',
        IdName: 'Email'
    },
    {
        Header: 'ชื่อสถานที่',
        accessor: 'name',
        IdName: 'NamePlace'
    },
    {
        Header: 'วันที่ชำระเงิน',
        accessor: 'payDateTime',
        IdName: 'Date-time'
    },
    {
        Header: 'สรุปยอดเงิน',
        accessor: 'sum_price',
        IdName: 'Total'
    },
]