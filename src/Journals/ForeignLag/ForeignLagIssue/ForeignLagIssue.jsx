
import ForeignLagArticles from "../../../Articles/ForeignLagArticles/ForeignLagArticles";

const ForeignLagIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ForeignLagArticles></ForeignLagArticles>
            </div>
        </div>

    );
};

export default ForeignLagIssue;
