import { Outlet } from "react-router-dom";
import InternationalNav from "../Journals/International/InternationalNav/InternationalNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import InternationalDetails from "../Journals/International/InternationalDetails/InternationalDetails";


const InternationalLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Journal of Chemistry and Biochemistry"}></PageTitle>
            <InternationalDetails></InternationalDetails>
            <ArticleRoutingTop>
                <div className="flex px-20 my-8 gap-8">
                    <InternationalNav></InternationalNav>
                    <Outlet></Outlet>
                </div>
                </ArticleRoutingTop>
        </div>
    );
};

export default InternationalLayout;