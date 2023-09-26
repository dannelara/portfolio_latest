"use client"
import Contact from "@/components/sections/Contact";
import RenderView from "../components/common/RenderView";
import ViewTabs from "../components/common/ViewTabs";
import Layout from "../components/global/Layout";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

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
