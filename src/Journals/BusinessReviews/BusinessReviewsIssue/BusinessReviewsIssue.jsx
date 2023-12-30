import BusinessReviewsArticles from "../../../Articles/BusinessReviewsArticles/BusinessReviewsArticles";


const BusinessReviewsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BusinessReviewsArticles></BusinessReviewsArticles>
            </div>
        </div>

    );
};

export default BusinessReviewsIssue;
