import ContemporaryGeneralArticles from "../../../Articles/ContemporaryGeneralArticles/ContemporaryGeneralArticles";




const ContemporaryGeneralIssue = () => {
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-4">
                <ContemporaryGeneralArticles></ContemporaryGeneralArticles>
            </div>
        </div>

    );
};

export default ContemporaryGeneralIssue;
