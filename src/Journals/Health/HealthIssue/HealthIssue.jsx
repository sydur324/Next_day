import HealthArticles from "../../../Articles/HealthArticles/HealthArticles";

const HealthIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <HealthArticles></HealthArticles>
            </div>
        </div>

    );
};

export default HealthIssue;