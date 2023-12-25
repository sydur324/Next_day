import { Outlet } from "react-router-dom";
import ForeignLagNav from "../Journals/ForeignLag/ForeignLagNav/ForeignLagNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import ForeignLagDetails from "../Journals/ForeignLag/ForeignLagDetails/ForeignLagDetails";



const ForeignLagLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Foreign Languages, Cultures & Civilizations"}></PageTitle>
            <ForeignLagDetails></ForeignLagDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <ForeignLagNav></ForeignLagNav>
                    <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default ForeignLagLayout;