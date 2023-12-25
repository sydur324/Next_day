import { Outlet } from "react-router-dom";
import ContemporaryNav from "../Journals/Contemporary/ContemporaryNav/ContemporaryNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ContemporaryDetails from "../Journals/Contemporary/ContemporaryDetails/ContemporaryDetails";


const ContemporaryLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Review of Contemporary Business Research"}></PageTitle>
            <ContemporaryDetails></ContemporaryDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <ContemporaryNav></ContemporaryNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default ContemporaryLayout;