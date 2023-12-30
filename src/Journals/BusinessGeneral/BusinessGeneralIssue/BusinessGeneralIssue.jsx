import BusinessGeneralArticles from "../../../Articles/BusinessGeneralArticles/BusinessGeneralArticles";

const BusinessGeneralIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BusinessGeneralArticles></BusinessGeneralArticles>
            </div>
        </div>

    );
};

export default BusinessGeneralIssue;
