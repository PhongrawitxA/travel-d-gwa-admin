export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'realname',
        IdName: 'ConfirmRealname'
    },
    {
        Header: 'นามสกุล',
        accessor: 'surname',
        IdName: 'ConfirmSurname'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'ConfirmEmail'
    },
]