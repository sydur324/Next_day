import PhilosophyArticles from "../../../Articles/PhilosophyArticles/PhilosophyArticles";

const PhilosophyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <PhilosophyArticles></PhilosophyArticles>
            </div>
        </div>

    );
};

export default PhilosophyIssue;
