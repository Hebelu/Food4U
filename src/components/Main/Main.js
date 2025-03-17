import { Link } from "react-router-dom";
import background from '../Images/resturant.jpg'

function Main() {
    return (
        <div style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'relative',backgroundSize: 'cover' }}>
            <div className='bg-success text-dark fw-bolder fs-1'><marquee><h1>Welcome to Resturant Food4U</h1></marquee></div><br />

            <div className="container justify-content-center">
                <Link to="/AdminLogin" className="btn btn-warning mx-3 fw-bolder fs-5 text-dark ">Admin Login <span class="material-symbols-outlined">login</span> </Link>

                <Link to="/userlogin" className="btn btn-primary mx-3 fw-bolder fs-5">User Login <span class="material-symbols-outlined">login</span> </Link>
            </div>
            <div className="py-4">
                <div className="py-4"></div>
                <div className="py-4"></div>
                <div className="py-4"></div>
                <div className="py-4"></div>
                <div className="py-4"></div>
            </div>
            <br /><br /><br />
            <div className=" shadow bg-info fw-bold text-dark fs-4 "><span className="col-row text-warning fw-bolder fs-2 mx-5"> Contact :</span>
                <span className="">If you ever need any Assistance Feel free to Reach out. To the Given below details.</span>
            </div><br />

            <div className="fw-bolder fs-3 text-dark bg-light text-center">
                ☎&nbsp;6281113710 &nbsp;&nbsp;
                ✉&nbsp;Hebelupasam1437@gmail.com &nbsp;&nbsp;
                ✉&nbsp;Food4U@help.in&nbsp;&nbsp;
                🌐&nbsp;WWW.Food4U.in&nbsp;&nbsp;
            </div>

            <div>
                <div className="text-center fs-2 fw-bold bg-primary">
                    📷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🕿
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ✆
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🖂
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✈
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☮
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;©Food4U®
                </div>
            </div>
        </div>
        // </div>

    );
}
export default Main;