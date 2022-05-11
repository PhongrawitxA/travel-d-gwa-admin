export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อสถานที่',
        accessor: 'name',
        IdName: 'ActivityName'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'usernameID.realname',
        IdName: 'ConfirmRealname'
    },
    {
        Header: 'นามสกุล',
        accessor: 'usernameID.surname',
        IdName: 'ConfirmSurname'
    },
    {
        Header: 'อีเมล',
        accessor: 'usernameID.email',
        IdName: 'ConfirmEmail'
    },
]