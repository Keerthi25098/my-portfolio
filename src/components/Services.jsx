import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import {
    ArrowUpRight,
    Code2,
    Layout,
    Smartphone,
    Palette,
    Globe,
    Wrench,
} from 'lucide-react';

import './Services.css';

const PRESET_ROTATIONS = [-7, 4, -3, 5, -4, 6];

const DEFAULT_SERVICES = [
    {
        id: 1,
        title: 'Frontend Development',
        description:
            'Modern, responsive and interactive websites built with clean HTML, CSS, JavaScript and Bootstrap.',
        icon: Code2,
        tag: 'Development',
    },
    {
        id: 2,
        title: 'React.js Development',
        description:
            'Scalable React applications with reusable components, smooth interactions and clean user experiences.',
        icon: Globe,
        tag: 'React.js',
    },
    {
        id: 3,
        title: 'Responsive Web Design',
        description:
            'Mobile-first websites that provide a consistent and engaging experience across all screen sizes.',
        icon: Smartphone,
        tag: 'Responsive',
    },
    {
        id: 4,
        title: 'Figma to Website',
        description:
            'Pixel-focused conversion of Figma designs into functional, responsive and production-ready websites.',
        icon: Palette,
        tag: 'UI Development',
    },
    {
        id: 5,
        title: 'WordPress Development',
        description:
            'Professional WordPress websites customized according to business requirements and brand identity.',
        icon: Layout,
        tag: 'WordPress',
    },
    {
        id: 6,
        title: 'Website Maintenance',
        description:
            'Website updates, content changes, UI improvements, bug fixes and ongoing performance support.',
        icon: Wrench,
        tag: 'Support',
    },
];

function ServiceFooter({ index }) {
    return (
        <div className="service-stack-footer">
            <div className="service-stack-divider" />

            <div className="service-stack-footer-row">

                <a
                    href="#contact"
                    className="service-stack-explore"
                >
                    <span className="service-stack-arrow">
                        <ArrowUpRight size={15} />
                    </span>

                    <span>Enquire Now</span>
                </a>

                <span className="service-stack-number">
                    {String(index + 1).padStart(2, '0')}
                </span>

            </div>
        </div>
    );
}

export default function Services({
    servicesList,
    cardWidth = 285,
    cardHeight = 350,
    overlap = 102,
    hoverLift = 28,
    pushDistance = 225,
    spread = 25,
    duration = 0.5,
}) {
    const services =
        Array.isArray(servicesList) &&
        servicesList.length > 0
            ? servicesList.map((service, index) => ({
                ...service,
                icon:
                    service.icon ||
                    DEFAULT_SERVICES[index]?.icon ||
                    Code2,
            }))
            : DEFAULT_SERVICES;

    const [activeIndex, setActiveIndex] = useState(null);
    const [isTouch, setIsTouch] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);
    const [reduceMotion, setReduceMotion] = useState(false);

    useEffect(() => {
        setHasMounted(true);

        const pointerQuery = window.matchMedia(
            '(pointer: coarse)'
        );

        const updatePointer = () => {
            setIsTouch(pointerQuery.matches);
        };

        updatePointer();

        pointerQuery.addEventListener(
            'change',
            updatePointer
        );

        return () => {
            pointerQuery.removeEventListener(
                'change',
                updatePointer
            );
        };
    }, []);

    useEffect(() => {
        const motionQuery = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        );

        const updateMotion = () => {
            setReduceMotion(motionQuery.matches);

            if (motionQuery.matches) {
                setActiveIndex(null);
            }
        };

        updateMotion();

        motionQuery.addEventListener(
            'change',
            updateMotion
        );

        return () => {
            motionQuery.removeEventListener(
                'change',
                updateMotion
            );
        };
    }, []);

    const preparedServices = useMemo(() => {
        return services.map((service, index) => ({
            ...service,
            rotation:
                PRESET_ROTATIONS[
                    index % PRESET_ROTATIONS.length
                ],
            baseX: index * overlap,
            baseZ: index + 1,
        }));
    }, [services, overlap]);

    const getCardStyle = (service, index) => {
        const isActive = activeIndex === index;
        const hasActive = activeIndex !== null;

        let x = service.baseX;
        let y = 0;
        let rotate = service.rotation;
        let zIndex = service.baseZ;
        let scale = 1;

        if (reduceMotion) {
            if (isActive) {
                zIndex = 999;
            }

            return {
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`,
                zIndex,
                transition: 'none',
            };
        }

        if (hasActive) {
            if (index < activeIndex) {
                x -= pushDistance;
                y -= spread * 0.4;
            }

            if (index > activeIndex) {
                x += pushDistance;
                y += spread * 0.4;
            }

            if (isActive) {
                x = service.baseX;
                y = -hoverLift;
                rotate = 0;
                zIndex = 999;
                scale = 1.035;
            }
        }

        const activeDuration = isActive
            ? duration
            : hasActive
                ? duration
                : duration * 0.7;

        return {
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transform: `
                translate3d(${x}px, ${y}px, 0)
                rotate(${rotate}deg)
                scale(${scale})
            `,
            zIndex,
            transition: `
                transform ${activeDuration}s cubic-bezier(0.22, 1, 0.36, 1),
                box-shadow ${activeDuration}s ease
            `,
            boxShadow: isActive
                ? '0 22px 55px rgba(0, 0, 0, 0.42)'
                : undefined,
        };
    };

    const totalWidth =
        preparedServices.length > 0
            ? preparedServices[
                preparedServices.length - 1
            ].baseX + cardWidth
            : cardWidth;

    if (!hasMounted) {
        return null;
    }

    return (
        <section
            className="services-section"
            id="services"
        >
            <div className="section-container">

                {/* Header */}
                <div className="section-header">

                    <span className="section-tag">
                        <span>What I Offer</span>
                    </span>

                    <h2 className="section-title">
                        Services & Solutions
                    </h2>

                    <p className="section-subtitle">
                        Practical web development solutions
                        designed to create modern, responsive
                        and engaging digital experiences.
                    </p>

                </div>

                {/* Mobile Services */}
                {isTouch ? (
                    <div className="service-stack-mobile">

                        {services.map(
                            (service, index) => {
                                const Icon =
                                    service.icon ||
                                    Code2;

                                return (
                                    <motion.div
                                        key={
                                            service.id ||
                                            index
                                        }
                                        className="service-stack-mobile-card"
                                        initial={{
                                            opacity: 0,
                                            y: 25,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.15,
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            delay:
                                                index *
                                                0.08,
                                        }}
                                    >

                                        <div className="service-stack-card-top">

                                            <div className="service-stack-icon">
                                                <Icon
                                                    size={
                                                        22
                                                    }
                                                />
                                            </div>

                                            <span className="service-stack-tag">
                                                {service.tag ||
                                                    'Service'}
                                            </span>

                                        </div>

                                        <div className="service-stack-content">

                                            <h3>
                                                {
                                                    service.title
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    service.description
                                                }
                                            </p>

                                        </div>

                                        <ServiceFooter
                                            index={index}
                                        />

                                    </motion.div>
                                );
                            }
                        )}

                    </div>
                ) : (
                    /* Desktop Hover Stack */
                    <div
                        className="service-stack-desktop"
                        style={{
                            width: `${totalWidth}px`,
                            height: `${
                                cardHeight +
                                hoverLift +
                                35
                            }px`,
                        }}
                    >

                        {preparedServices.map(
                            (service, index) => {
                                const Icon =
                                    service.icon ||
                                    Code2;

                                return (
                                    <div
                                        key={
                                            service.id ||
                                            index
                                        }
                                        className="service-stack-card"
                                        style={getCardStyle(
                                            service,
                                            index
                                        )}
                                        onMouseEnter={() =>
                                            setActiveIndex(
                                                index
                                            )
                                        }
                                        onMouseLeave={() =>
                                            setActiveIndex(
                                                null
                                            )
                                        }
                                    >

                                        <div className="service-stack-card-top">

                                            <div className="service-stack-icon">
                                                <Icon
                                                    size={
                                                        22
                                                    }
                                                />
                                            </div>

                                            <span className="service-stack-tag">
                                                {service.tag ||
                                                    'Service'}
                                            </span>

                                        </div>

                                        <div className="service-stack-content">

                                            <h3>
                                                {
                                                    service.title
                                                }
                                            </h3>

                                            <p>
                                                {
                                                    service.description
                                                }
                                            </p>

                                        </div>

                                        <ServiceFooter
                                            index={index}
                                        />

                                    </div>
                                );
                            }
                        )}

                    </div>
                )}

            </div>
        </section>
    );
}