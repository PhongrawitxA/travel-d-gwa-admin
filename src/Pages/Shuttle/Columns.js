export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'usernameID.realname',
        IdName: 'ShuttleRealname'
    },
    {
        Header: 'นามสกุล',
        accessor: 'usernameID.surname',
        IdName: 'ShuttleSurname'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'ShuttleEmail'
    },
]