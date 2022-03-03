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
        Header: 'บทบาทพาร์ทเนอร์ที่ร้องขอ',
        accessor: 'surname',
        IdName: 'Role'
    },
]