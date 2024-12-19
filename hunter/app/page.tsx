import Image from "next/image";
import Hello from "./components/hello";
import File from "./components/file";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <Hello/>
      <File/>
    </>
  );
}
