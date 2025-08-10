"use client";
import React from "react";
import styled from "styled-components";
import { Lightbulb, Filter, Heart, Globe } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <StyledWrapper>
      <div className="notification">
        <div className="notiglow" />
        <div className="notiborderglow" />
        <div className="icon-container">
          <Icon className="feature-icon" size={30} />
        </div>
        <div className="notititle">{title}</div>
        <div className="notibody">{description}</div>
      </div>
    </StyledWrapper>
  );
};

const BusinessFeatures = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Generate Ideas",
      description:
        "Enter your business keywords and let our AI-powered generator create hundreds of unique, creative business names instantly.",
    },
    {
      icon: Filter,
      title: "Filter Results",
      description:
        "Refine your search with smart filters including industry type, name length, style preferences, and domain availability.",
    },
    {
      icon: Globe, // You can use a domain/web icon instead of Heart
      title: "Check Domain Availability",
      description:
        "Instantly verify if your desired business name has an available domain. Save time and secure your perfect online identity before it’s taken.",
    },
  ];

  return (
    <div className="md:flex justify-between gap-10 md:px-56 px-5 mt-28">
      {features.map((feature, index) => (
        <div key={index} className="md:mb-0 mb-10">
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </div>
  );
};

const StyledWrapper = styled.div`
  .notification {
    display: flex;
    flex-direction: column;
    isolation: isolate;
    position: relative;
    width: 100%;
    min-height: 12rem;
    background: #29292c;
    border-radius: 1rem;
    overflow: hidden;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
    --gradient: linear-gradient(to bottom, #2eadff, #3d83ff, #7e61ff);
    --color: #32a6ff;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .notification:hover {
    transform: translateY(-5px);
  }

  .notification:before {
    position: absolute;
    content: "";
    inset: 0.0625rem;
    border-radius: 0.9375rem;
    background: #18181b;
    z-index: 2;
  }

  .notification:after {
    position: absolute;
    content: "";
    width: 0.25rem;
    inset: 0.65rem auto 0.65rem 0.5rem;
    border-radius: 0.125rem;
    background: var(--gradient);
    transition: transform 300ms ease;
    z-index: 4;
  }

  .notification:hover:after {
    transform: translateX(0.15rem);
  }

  .icon-container {
    padding: 1rem 1.25rem 0.5rem 1.25rem;
    z-index: 5;
    transition: transform 300ms ease;
  }

  .feature-icon {
    color: var(--color);
  }

  .notification:hover .icon-container {
    transform: translateX(0.15rem);
  }

  .notititle {
    color: var(--color);
    padding: 0.4rem 1.25rem;
    font-weight: 600;
    font-size: 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
  }

  .notification:hover .notititle {
    transform: translateX(0.15rem);
  }

  .notibody {
    color: #99999d;
    padding: 0 1.25rem 1.25rem 1.25rem;
    transition: transform 300ms ease;
    z-index: 5;
    line-height: 1.5;
    flex-grow: 1;
  }

  .notification:hover .notibody {
    transform: translateX(0.25rem);
  }

  .notiglow,
  .notiborderglow {
    position: absolute;
    width: 20rem;
    height: 20rem;
    transform: translate(-50%, -50%);
    background: radial-gradient(
      circle closest-side at center,
      white,
      transparent
    );
    opacity: 0;
    transition: opacity 300ms ease;
  }

  .notiglow {
    z-index: 3;
  }

  .notiborderglow {
    z-index: 1;
  }

  .notification:hover .notiglow {
    opacity: 0.1;
  }

  .notification:hover .notiborderglow {
    opacity: 0.1;
  }

  @media (max-width: 768px) {
    .notification {
      width: 100%;
    }
  }
`;

export default BusinessFeatures;
