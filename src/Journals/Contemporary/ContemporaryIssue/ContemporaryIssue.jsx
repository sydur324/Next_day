import ContemporaryArticls from "../../../Articles/ContemporaryArticls/ContemporaryArticls";

const ContemporaryIssue = () => {
    return (
        <div className="w-full">
            <h2 className="text-xl font-bold text-[#91000D] aimsscope">Current Issue</h2>
            <div className="my-8">
                <ContemporaryArticls></ContemporaryArticls>
            </div>
        </div>

    );
};

export default ContemporaryIssue;
