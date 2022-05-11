export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อบริษัท',
        accessor: 'namepartner',
        IdName: 'ConfirmRentcarName'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'ConfirmRentcarEmail'
    },
    {
        Header: 'เบอร์โทร',
        accessor: 'phone',
        IdName: 'ConfirmRentcarSurname'
    }
]