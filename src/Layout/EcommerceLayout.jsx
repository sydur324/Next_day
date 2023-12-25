import { Outlet } from "react-router-dom";
import EcommerceNav from "../Journals/Ecommerce/EcommerceNav/EcommerceNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import EcommerceDetails from "../Journals/Ecommerce/EcommerceDetails/EcommerceDetails";

const EcommerceLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Management Information System & E-commerce"}></PageTitle>
            <EcommerceDetails></EcommerceDetails>
            <div className="flex px-20 my-8 gap-8">
                <ArticleRoutingTop>
                    <EcommerceNav></EcommerceNav>
                    <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default EcommerceLayout;