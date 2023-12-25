import { Outlet } from "react-router-dom";
import ContemporaryGeneralNav from "../Journals/ContemporaryGeneral/ContemporaryGeneralNav/ContemporaryGeneralNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ContemporaryGeneralDetails from "../Journals/ContemporaryGeneral/ContemporaryGeneralDetails/ContemporaryGeneralDetails";

const ContemporaryGeneralLayout = () => {
    return (
        <div className="">
            <PageTitle title={"American International Journal of Contemporary Research"}></PageTitle>
            <ContemporaryGeneralDetails></ContemporaryGeneralDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <ContemporaryGeneralNav></ContemporaryGeneralNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default ContemporaryGeneralLayout;