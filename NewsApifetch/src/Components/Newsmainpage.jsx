function Newsmainpage() {
    return(
        <>
        <div>
            <header>
                <div className="navbar">
                    <div style={{width:"50%", display:"flex" , marginLeft:"3vw"}}>
                <img src="/images/img1.png" className="logo-img"/>
                <ul style={{display:"flex", gap:"2vw"}}>
                <li>Threat Intelligence</li>
                <li>Market Intelligence</li>
                <li>News Reader</li>
                </ul>
                </div>
                <div style={{width:"40%", display:"flex", marginLeft:"5vw"}}>
                    <ul style={{display:"flex", gap:"2vw"}}>
                        <li>Resources</li>
                        <li>ChangeLog</li>
                    </ul>
                    <button className="button1">LOG IN</button>
                    <button className="button2">GET STARTED FOR FREE</button>

                </div>
                </div>
            </header>
        </div>
        </>
    )
}
export default Newsmainpage;