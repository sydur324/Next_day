import SportsArticles from "../../../Articles/SportsArticles/SportsArticles";

const SportsIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
               <SportsArticles></SportsArticles>
            </div>
        </div>

    );
};

export default SportsIssue;
