import ContemporaryGeneralArticles from "../../../Articles/ContemporaryGeneralArticles/ContemporaryGeneralArticles";




const ContemporaryGeneralIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ContemporaryGeneralArticles></ContemporaryGeneralArticles>
            </div>
        </div>

    );
};

export default ContemporaryGeneralIssue;
