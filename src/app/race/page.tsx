import { Heading } from "@/components/ui/heading";
import PracticeRaceCard from "./components/cards/PracticeRaceCard";
import MultiplayerRaceCard from "./components/cards/MultiplayerRaceCard";
import FriendsRaceCard from "./components/cards/FriendsRaceCard";

export default function RacePage() {
  return (
    <main className="pt-12">
      <Heading
        title="Choose a Race Mode"
        description="Practice your typing skills by yourself, with friends, or with other devs online"
        centered
      />
      <div className="grid grid-cols-1 gap-8 my-10 lg:grid-cols-3">
        <PracticeRaceCard />
        <MultiplayerRaceCard enabled />
        <FriendsRaceCard enabled />
      </div>
    </main>
  );
}
