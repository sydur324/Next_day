import { Outlet } from "react-router-dom";
import BusinessReviewsNav from "../Journals/BusinessReviews/BusinessReviewsNav/BusinessReviewsNav";
import ArticleRoutingTop from "../Utilities/ArticleRoutingTop/ArticleRoutingTop";
import PageTitle from "../Utilities/PageTitle/PageTitle";
import BusinessReviewsDetails from "../Journals/BusinessReviews/BusinessReviewsDetails/BusinessReviewsDetails";


const BusinessReviewsLayout = () => {
    return (
        <div className="">
            <PageTitle title={"Business Research Review"}></PageTitle>
            <BusinessReviewsDetails></BusinessReviewsDetails>
            <div className="flex px-20 my-8 gap-8">
            <ArticleRoutingTop>
               <BusinessReviewsNav></BusinessReviewsNav>
                <Outlet></Outlet>
                </ArticleRoutingTop>
            </div>

        </div>
    );
};

export default BusinessReviewsLayout;