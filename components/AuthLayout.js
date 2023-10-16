export default function AuthLayout(props){
    return <>
        <div className='bg-dark d-flex justify-content-center align-items-center vh-100 vw-100'>
            <div className='card' style={{height: 'auto', width: '400px'}}>
                <h2 className='text-center card-header'>{props.title}</h2>
                <div className='card-body' >
                    {props.children}
                </div>
            </div>
        </div>
    </>
}