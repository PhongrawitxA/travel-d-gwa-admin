export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'realname',
        IdName: 'RentcarRealname'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'RentcarEmail'
    },
]