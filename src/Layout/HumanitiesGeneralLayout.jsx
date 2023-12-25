import { Outlet } from "react-router-dom";
import HumanitiesGeneralNav from "../Journals/HumanitiesGeneral/HumanitiesGeneralNav/HumanitiesGeneralNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import HumanitiesGeneralDetails from "../Journals/HumanitiesGeneral/HumanitiesGeneralDetails/HumanitiesGeneralDetails";

const HumanitiesGeneralLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Humanities and Social Science"}></PageTitle>
            <HumanitiesGeneralDetails></HumanitiesGeneralDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <HumanitiesGeneralNav></HumanitiesGeneralNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default HumanitiesGeneralLayout;