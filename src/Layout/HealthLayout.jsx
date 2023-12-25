import { Outlet } from "react-router-dom";
import HealthNav from "../Journals/Health/HealthNav/HealthNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import HealthDetails from "../Journals/Health/HealthDetails/HealthDetails";



const HealthLayout = () => {
    return (
        <div className="">
            <PageTitle title={"International Journal of Health Sciences"}></PageTitle>
            <HealthDetails></HealthDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <HealthNav></HealthNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default HealthLayout;