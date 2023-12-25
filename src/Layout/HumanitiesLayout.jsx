import { Outlet } from "react-router-dom";
import HumanitiesNav from "../Journals/Humanities/HumanitiesNav/HumanitiesNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import HumanitiesDetails from "../Journals/Humanities/HumanitiesDetails/HumanitiesDetails";


const HumanitiesLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Review of Arts and Humanities"}></PageTitle>
            <HumanitiesDetails></HumanitiesDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <HumanitiesNav></HumanitiesNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default HumanitiesLayout;