import { Outlet } from "react-router-dom";
import EconomicPolicyNav from "../Journals/EconomicPolicy/EconomicPolicyNav/EconomicPolicyNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import EconomicPolicyDetails from "../Journals/EconomicPolicy/EconomicPolicyDetails/EconomicPolicyDetails";

const EconomicPolicyLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Business & Economic Policy"}></PageTitle>
            <EconomicPolicyDetails></EconomicPolicyDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <EconomicPolicyNav></EconomicPolicyNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default EconomicPolicyLayout;