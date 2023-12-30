import BUTArticles from "../../../Articles/BUTArticles/BUTArticles";



const BUTIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <BUTArticles></BUTArticles>
            </div>
        </div>

    );
};

export default BUTIssue;
