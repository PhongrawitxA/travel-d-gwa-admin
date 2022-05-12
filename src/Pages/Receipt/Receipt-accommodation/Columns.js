export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'usernameId.realname',
        IdName: 'Realname'
    },
    {
        Header: 'นามสกุล',
        accessor: 'usernameId.surname',
        IdName: 'Surname'
    },
    {
        Header: 'อีเมล',
        accessor: 'usernameId.email',
        IdName: 'Email'
    },
    {
        Header: 'วันที่ชำระเงิน',
        accessor: 'payDateTime',
        IdName: 'Date-time'
    },
    {
        Header: 'สรุปยอดเงิน',
        accessor: 'totalPrice',
        IdName: 'Total'
    },
]