import Head from "next/head";
import Image from "next/image";
import { AudioCard } from "../components/AudioCard/AudioCard";
import { AudioList } from "../components/AudioList/AudioList";
import { Header } from "../components/Header/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <AudioCard />
      <AudioList />
      <AudioList isPlaying />
    </>
  );
}
