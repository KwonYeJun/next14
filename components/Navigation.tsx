"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
const path = usePathname();
  return (
    <>
<ul>
  <li><Link href="/">home</Link></li> {path === "/" ? "🔥" : ""}
  <li><Link href="/two">two</Link></li>{path === "/two" ? "💙" : ""}

</ul>


    </>

  )
}