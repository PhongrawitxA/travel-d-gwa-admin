export const COLUMNS = [
    {
        Header: 'ลำดับ',
        accessor: (_row: any, i : number) => i + 1 ,
        IdName: 'Number'
    },
    {
        Header: 'ชื่อบริษัท',
        accessor: 'namepartner',
        IdName: 'RentcarName'
    },
    {
        Header: 'อีเมล',
        accessor: 'email',
        IdName: 'RentcarEmail'
    },
    {
        Header: 'เบอร์โทร',
        accessor: 'phone',
        IdName: 'RentcarPhone'
    }
]