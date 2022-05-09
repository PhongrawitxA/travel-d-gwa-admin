export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'usernameID.realname',
        IdName: 'RentcarRealname'
    },
    {
        Header: 'นามสกุล',
        accessor: 'usernameID.surname',
        IdName: 'RentcarSurname'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'RentcarEmail'
    },
]