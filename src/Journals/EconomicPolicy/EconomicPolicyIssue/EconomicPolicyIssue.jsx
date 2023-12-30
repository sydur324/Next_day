
import EconomicPolicyArticles from "../../../Articles/EconomicPolicyArticles/EconomicPolicyArticles";

const EconomicPolicyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <EconomicPolicyArticles></EconomicPolicyArticles>
            </div>
        </div>

    );
};

export default EconomicPolicyIssue;
