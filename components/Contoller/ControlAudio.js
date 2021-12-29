import Image from "next/image";
import styles from "./ControlAudio.module.css";

export const ConrolAudio = () => {
  return (
    <div className={styles.controlAudio}>
      <Image src="/images/Start.svg" height={30} width={30} />
      <div className={styles.controlAudioCenter}>
        <Image src="/images/Play.svg" height={30} width={30} />
      </div>
      <Image src="/images/End.svg" height={30} width={30} />
    </div>
  );
};
