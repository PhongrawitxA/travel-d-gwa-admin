export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อผู้ใช้',
        accessor: 'realname',
        IdName: 'ActivityRealname'
    },
    {
        Header: 'นามสกุล',
        accessor: 'surname',
        IdName: 'ActivitySurname'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'ActivityEmail'
    },
]