import EcommerceArticles from "../../../Articles/EcommerceArticles/EcommerceArticles";

const EcommerceIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <EcommerceArticles></EcommerceArticles>
            </div>
        </div>

    );
};

export default EcommerceIssue;
