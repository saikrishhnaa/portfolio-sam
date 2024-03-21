import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { GetStaticProps } from "next";
import { Experience, PageInfo, Project, Skill, Social } from "../../typing";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSocial } from "../utils/fetchSocials";
import Head from "next/head";
import Link from "next/link";
import "../styles/globals.css";
import { fetchOpenGLProjects } from "@/utils/fetchOpenGLProjects";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  openGLProjects: Project[];
  socials: Social[];
};

const Home = ({
  pageInfo,
  experiences,
  skills,
  projects,
  openGLProjects,
  socials,
}: Props) => {
  return (
    <div className="scroll z-0 h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-[#0a1a2b] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name + " - Software Engineer"}</title>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link
          rel="android-chrome"
          type="image/png"
          sizes="192x192"
          href="/images/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome"
          type="image/png"
          sizes="512x512"
          href="/images/android-chrome-512x512.png"
        />
      </Head>

      <Header socials={socials} pageInfo={pageInfo} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} openGLProjects={openGLProjects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      <Link href="#hero">
        <div className="sticky bottom-5 m-auto h-[40px] w-[40px] cursor-pointer">
          <img
            className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
            src="/me_profileimg.jpg"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const openGLProjects: Project[] = await fetchOpenGLProjects();
    const socials: Social[] = await fetchSocial();

    return {
      props: {
        pageInfo,
        experiences,
        skills,
        projects,
        openGLProjects,
        socials,
      },
      // Next.js will attempt to re-generate the page:
      // - when a request comes in
      // - At most once every 10 seconds
      revalidate: 10,
    };
  } catch (e) {
    return {
      props: {
        pageInfo: {
          _type: "pageInfo",
          _createAt: "",
          _updatedAt: "",
          _id: "",
          _rev: "",
          address: "",
          backgroundInformation: "",
          email: "",
          role: "",
          heroImage: {
            _type: "Image",
            asset: {
              _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
              _type: "reference",
            },
          },
          name: "",
          phoneNumber: "",
          profilePic: {
            _type: "Image",
            asset: {
              _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
              _type: "reference",
            },
          },
          cvFile: {
            _type: "File",
            asset: {
              _ref: "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg",
              _type: "reference",
            },
          },
        },
        experiences: [],
        skills: [],
        projects: [],
        openGLProjects: [],
        socials: [],
      },
    };
  }
};
