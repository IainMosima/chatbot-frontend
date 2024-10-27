import "./ChatHistory.scss";

interface HistoryProps {
    duration: string;
}

const History = (props: HistoryProps) => {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-semibold text-md">{props.duration}</h2>
            <ul className="list-disc pl-5">
                <li className="mb-3 cursor-pointer">Sample 1</li>
                <li className="mb-3 cursor-pointer">Sample 2</li>
                <li className="mb-3 cursor-pointer">Sample 3</li>
                <li className="mb-3 cursor-pointer">Sample 4</li>
            </ul>
        </div>
    )
}

function ChatHistory() {
    return (
        <div className="w-full h-[95%] rounded-2xl py-5 px-4 bg-neutral flex flex-col justify-start gap-5 overflow-y-auto">
            <History duration="Yesterday"/>
            <History duration="Past 7 days"/>
            <History duration="Past 30 days"/>
            <History duration="Past 50 days"/>
            <History duration="Past 90 days"/>

        </div>
    )
}

export default ChatHistory