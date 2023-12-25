import { Outlet } from "react-router-dom";
import BUTNav from "../Journals/BUT/BUTNav/BUTNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BUTDetails from "../Journals/BUT/BUTDetails/BUTDetails";

const BUTLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Business, Humanities and Technology"}></PageTitle>
            <BUTDetails></BUTDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <BUTNav></BUTNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default BUTLayout;