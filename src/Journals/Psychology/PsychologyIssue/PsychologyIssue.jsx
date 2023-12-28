import PsychologyArticles from "../../../Articles/PsychologyArticles/PsychologyArticles";

const PsychologyIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <PsychologyArticles></PsychologyArticles>
            </div>
        </div>

    );
};

export default PsychologyIssue;
