
import { Outlet } from "react-router-dom";
import LifeNav from "../Journals/Life/LifeNav/LifeNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import LifeDetails from "../Journals/Life/LifeDetails/LifeDetails";


const LifeLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Agriculture & Life Sciences"}></PageTitle>
            <LifeDetails></LifeDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <LifeNav></LifeNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default LifeLayout;