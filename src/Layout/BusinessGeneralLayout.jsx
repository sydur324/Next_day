import { Outlet } from "react-router-dom";
import BusinessGeneralNav from "../Journals/BusinessGeneral/BusinessGeneralNav/BusinessGeneralNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BusinessGeneralDetails from "../Journals/BusinessGeneral/BusinessGeneralDetails/BusinessGeneralDetails";

const BusinessGeneralLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Business and Social Science"}></PageTitle>
            <BusinessGeneralDetails></BusinessGeneralDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <BusinessGeneralNav></BusinessGeneralNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default BusinessGeneralLayout;