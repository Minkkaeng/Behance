import React from "react";

function About() {
  return (
    <div className="section-inner about-inner">
      <div className="section-header">
        <p className="eyebrow">Profile</p>
        <h2>About</h2>
      </div>

      <div className="about-album">
        <div className="about-card-wide">
          <div className="about-card-main">
            <h3 className="about-title">조용히, 하지만 결과는 명확하게.</h3>

            <p className="about-sub">React 기반 UI를 컴포넌트 구조로 나누고, 상태/라우팅 흐름을 정리해서 구현합니다.</p>

            <p className="about-body">
              단순히 예쁜 화면보다 <b>유지보수 가능한 구조</b>를 더 중요하게 봅니다.
              <br />
              마크업/레이아웃/상태 흐름이 정리되어야 안정감을 느끼고,
              <br />
              디자인과 개발 사이의 간격, <br />
              타이포/인터랙션 같은 애매한 지점을 정의해서 완성도를 올리는 것을 좋아합니다.
            </p>

            <div className="about-badges">
              <span>Component Thinking</span>
              <span>Ownership</span>
              <span>Pixel + Code</span>
            </div>
          </div>

          <div className="about-card-side">
            <div className="about-notes">
              <p>
                # 팀 프로젝트 Play Farm: <br />
                사용자/관리자 UI 흐름 설계 및 구현 경험
              </p>
              <p># 토큰 기반 CSS로 스타일 일관성 유지</p>
              <p># GitHub Pages 배포 및 설정 트러블슈팅 경험</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
