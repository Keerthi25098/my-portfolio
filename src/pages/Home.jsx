import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Services from '../components/Services';

import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { dataService } from '../services/dataService';
import './Home.css';

export default function Home() {
    const [siteSettings, setSiteSettings] = useState(null);
    const [heroContent, setHeroContent] = useState(null);
    const [aboutContent, setAboutContent] = useState(null);
    const [projectsList, setProjectsList] = useState([]);
    const [experienceList, setExperienceList] = useState([]);
    const [skillsList, setSkillsList] = useState([]);
    const [educationList, setEducationList] = useState([]);
    const [servicesList, setServicesList] = useState([]);
    const [testimonialsList, setTestimonialsList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAllContent() {
            try {
                const [
                    settingsData,
                    heroData,
                    aboutData,
                    projData,
                    expData,
                    skillData,
                    eduData,
                    servData,
                    testData,
                ] = await Promise.all([
                    dataService.getSiteSettings(),
                    dataService.getHeroContent(),
                    dataService.getAboutContent(),
                    dataService.getProjects(false),
                    dataService.getExperience(false),
                    dataService.getSkills(false),
                    dataService.getEducation(),
                    dataService.getServices(),
                    dataService.getTestimonials(false),
                ]);

                setSiteSettings(settingsData);
                setHeroContent(heroData);
                setAboutContent(aboutData);
                setProjectsList(projData);
                setExperienceList(expData);
                setSkillsList(skillData);
                setEducationList(eduData);
                setServicesList(servData);
                setTestimonialsList(testData);
            } catch (err) {
                console.error('Error loading portfolio home data:', err);
            } finally {
                setLoading(false);
            }
        }

        loadAllContent();
    }, []);

    if (loading) {
        return (
            <div className="home-loader-screen">
                <div className="loader-spinner">
                    <div className="spinner-ring" />
                    <span className="loader-brand">K.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="portfolio-app-root">
            <Navbar siteSettings={siteSettings} />
            <main>
                <Hero heroContent={heroContent} siteSettings={siteSettings} />
                <About aboutContent={aboutContent} />
                <Experience experienceList={experienceList} />
                <Projects projectsList={projectsList} />
                <Skills skillsList={skillsList} />
                <Education educationList={educationList} />
                <Services servicesList={servicesList} />
              
                <ContactSection siteSettings={siteSettings} />
            </main>
            <Footer siteSettings={siteSettings} />
        </div>
    );
}
