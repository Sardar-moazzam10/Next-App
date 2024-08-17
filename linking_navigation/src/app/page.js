"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
     <h1>Moazzam</h1>
     <br /> <Link href="/homepage">Home Page Link</Link>
    </main>
  );
}
