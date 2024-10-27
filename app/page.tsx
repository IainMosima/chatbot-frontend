import ChatHistory from "@/components/ChatHistory/ChatHistory";
import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";


export default function Home() {
  return (
    <div className="w-full h-full flex">
      <div className="basis-[25%]">
        <ChatHistory/>
      </div>
      <div className="basis-[75%]">
        <WelcomeCard/>
      </div>
    </div>
  );
}
