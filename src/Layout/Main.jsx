import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";


const Main = () => {
    const [loading, setLoading] = useState(false)
 
    useEffect(() => {
        setLoading(true)
   
        setTimeout(() => {
            setLoading(false)
      
        }, 200)
    }, [])
    return (
        <div>
            {
                loading ? (
                    <ClipLoader
                    loading={loading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> 
                ): <>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </>
            }


        </div>
    );
};

export default Main;