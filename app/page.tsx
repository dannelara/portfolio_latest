"use client"
import Contact from "@/sections/Contact";
import RenderView from "../components/common/RenderView";
import ViewTabs from "../components/common/ViewTabs";
import Layout from "../components/global/Layout";
import About from "../sections/About";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <About />
      <Contact />
      {/* <ViewTabs />
      <RenderView /> */}
    </Layout>
  )
}
