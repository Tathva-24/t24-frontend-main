import Image from "next/image";
import Flappybird from "./components/flappybird/flappybird";

export default function Home() {
  return (
    <div>
      <Flappybird
        length={200}
        birdimage="/flappybirdimages/yellowbird-upflap.png"
        pipeimage="/flappybirdimages/pipe-green.png"
      />
    </div>
  );
}
