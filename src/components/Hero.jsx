import React from "react";

function Hero() {
  return (
    <div className="hero-inner">
      <div className="hero-left">
        <p className="hero-kicker">Frontend Developer · React · UI Architecture</p>

        <h1>
          서비스 흐름을 이해하고
          <br />
          <span>구조적으로</span>구현하는
          <br />
          <span>프론트엔드 개발자</span>
        </h1>

        <p className="hero-lead">
          React 기반 SPA에서 컴포넌트 설계·라우팅·상태 흐름을 정리하고,
          <br />
          유지보수 가능한 UI를 만드는 데 집중합니다.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View projects
          </a>
          <a href="#contact" className="btn-ghost">
            Contact
          </a>
        </div>

        <div className="hero-tags">
          <span className="tag">React · Router · Vite</span>
          <span className="tag">HTML · CSS · JS</span>
          <span className="tag">Git · 배포 경험</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card hero-card-main">
          <p className="hero-label">Strength</p>
          <p className="hero-main-text">
            Component-first
            <br />
            Structure & Maintainability
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
