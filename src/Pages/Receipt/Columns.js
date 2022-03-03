export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'realname',
        IdName: 'Realname'
    },
    {
        Header: 'พาร์ทเนอร์',
        accessor: 'partner',
        IdName: 'Partner'
    },
    {
        Header: 'รายละเอียด',
        accessor: 'detail',
        IdName: 'Detail'
    },
    {
        Header: 'วันที่ชำระเงิน',
        accessor: 'date-time',
        IdName: 'Date-time'
    },
    {
        Header: 'สรุปยอดเงิน',
        accessor: 'total',
        IdName: 'Total'
    },
]