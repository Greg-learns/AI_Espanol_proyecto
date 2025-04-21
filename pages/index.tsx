import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [textInput, setTextInput] = useState("");
  const [response, setResponse] = useState("");
  const [minutesUsedToday, setMinutesUsedToday] = useState(0);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSpeak = () => {
    if (!isSubscribed && minutesUsedToday >= 5) {
      alert("Free daily limit reached. Subscribe to continue speaking.");
      return;
    }
    setResponse(`AI (${getRandomCharacter()}): ¡Hola! ¿Cómo estás hoy?`);
    setMinutesUsedToday(prev => prev + 1);
  };

  const getRandomCharacter = () => {
    const characters = ["Lucía", "Carlos", "Mateo", "Sofía", "Diego", "Isabella"];
    return characters[Math.floor(Math.random() * characters.length)];
  };

  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Learn Spanish with AI</h1>

      <Card className="mb-4">
        <CardContent>
          <Textarea
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type or speak something in Spanish..."
            className="mb-2"
          />
          <Button onClick={handleSpeak}>Speak</Button>
          {response && <p className="mt-4">{response}</p>}
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <p className="mb-2">
            {isSubscribed
              ? "You have full access to guided classes and unlimited speaking."
              : `You have ${5 - minutesUsedToday} free speaking minutes left today.`}
          </p>
          {!isSubscribed && <Button onClick={() => setIsSubscribed(true)}>Subscribe</Button>}
        </CardContent>
      </Card>
    </main>
  );
}
