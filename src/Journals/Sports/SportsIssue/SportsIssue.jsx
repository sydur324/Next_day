import SportsArticles from "../../../Articles/SportsArticles/SportsArticles";

const SportsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
               <SportsArticles></SportsArticles>
            </div>
        </div>

    );
};

export default SportsIssue;
