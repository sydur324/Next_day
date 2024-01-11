import useEditorials from "../../../Hooks/useEditorials";

const PsychologyBoard = () => {
    const [editorials] = useEditorials()
    const accountingEditoris = editorials.filter((editorial) => editorial.category === 'Psychology')
    return (
        <div className="w-full">
            <h2 className="font-medium text-[#91000D] aimsscope">Editorial Boad</h2>

            <div className="my-4 space-y-3">
                {
                    accountingEditoris.map((board, index) => <div key={index}>
                        <h2 className="flex  items-center space-x-2 font-medium">{board.name}</h2>
                        <p className="text-[#262525dd]">{board.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PsychologyBoard;