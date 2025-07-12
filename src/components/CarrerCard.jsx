import React, { useState } from 'react';
import { Cpu, MoveHorizontal, SquareChartGantt, Lightbulb, Rocket } from 'lucide-react';
import qr_code from '../assets/qr_code.svg';

const CareerCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);
    setTimeout(() => setActiveSkill(null), 300);
  };

  const qr_link = "https://www.career.go.kr/cloud/w/job/view?seq=98";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center p-10">
      <div
        className={`
          relative bg-white rounded-3xl p-8 shadow-lg transition-all duration-300 ease-out
          w-2/5 overflow-hidden
          ${isHovered ? 'transform -translate-y-4 shadow-xl' : 'hover:shadow-md'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 rounded-t-3xl"></div>

        <a
          href={qr_link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 w-24 h-24 bg-gray-50 rounded-xl shadow-sm flex items-center justify-center cursor-pointer transition-opacity duration-200 hover:opacity-80"
        >
          <img
            src={qr_code}
            alt="QR 코드"
            className="w-full h-full object-contain p-2"
          />
        </a>

        <div className="flex items-center mb-6 mt-2">
          <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mr-4 shadow-inner">
            <span className="text-3xl text-indigo-400">
              <Cpu className="text-black" />
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">신경회로망연구원</h2>
            <p className="text-sm text-gray-600 mt-1">인공지능전문가</p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-600 leading-relaxed text-sm">
            신경회로망연구원은 인공지능 시대의 핵심 기술 분야에서 활동하는 전문가로, 인간의 뇌 구조와 신경계를 모방한 컴퓨터 시스템을 연구하고 개발하는 직업이다.<br />
            영상 및 음성인식, 로봇의 제어, 통신 등에 사용되는 인공지능형 반도체 및 응용기술을 연구하고 개발하는 일을 담당하며, 인공지능 모델을 설계하고, 이를 통해 데이터 분석, 패턴 인식, 예측 모델링 등의 업무를 수행한다.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="text-lg text-gray-800 mr-2">
              <SquareChartGantt />
            </span>
            <h3 className="text-lg font-bold text-gray-800">주요 업무</h3>
          </div>
          <p className="text-gray-600 leading-relaxed text-sm">
            <b>기술 연구 및 개발:</b> 인간의 신경계 시스템과 같이 컴퓨터나 로봇도 동일하게 사고하고 학습하는 시스템을 개발한다.<br />
            <b>응용 기술 구현:</b> 영상 처리, 음성 인식, 로봇 제어, 통신 시스템 등 다양한 분야에서 신경회로망 기술을 적용한다.<br />
            <b>알고리즘 개발:</b> 인간 뇌 구조에 대한 지식을 바탕으로 인간처럼 사고하고, 의사결정을 하는 인공지능 알고리즘을 개발한다.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="text-lg text-gray-800 mr-2">
              <Lightbulb />
            </span>
            <h3 className="text-lg font-bold text-gray-800">적성과 흥미</h3>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              className={`
                bg-blue-100 bg-opacity-70 px-4 py-3 rounded-full text-sm font-medium
                text-blue-700 shadow-sm cursor-pointer transition-shadow duration-200
                ${activeSkill === 'self-reflection' ? 'shadow-md' : 'hover:shadow'}
              `}
              onClick={() => handleSkillClick('self-reflection')}
            >
              <b className="text-blue-600">수리·논리력</b>
            </button>
            <span className="text-lg text-gray-400">
              <MoveHorizontal />
            </span>
            <button
              className={`
                bg-purple-100 bg-opacity-70 px-4 py-3 rounded-full text-sm font-medium
                text-purple-700 shadow-sm cursor-pointer transition-shadow duration-200
                ${activeSkill === 'logical-thinking' ? 'shadow-md' : 'hover:shadow'}
              `}
              onClick={() => handleSkillClick('logical-thinking')}
            >
              <b className="text-purple-600">공간지각력</b>
            </button>
          </div>

          <p className="text-xs text-gray-600 leading-relaxed">
            - 각종 컴퓨터 응용 프로그램을 능숙하게 활용할 수 있는 소프트웨어(프로그래밍) 관련 전문 지식과 수리·논리력이 필요하다.<br />
            - 입체적인 구조를 잘 파악할 수 있는 공간지각력이 필요하다.<br />
            - 컴퓨터공학, 정보공학, 정보시스템, 데이터 프로세싱이나 이와 관련된 전공 분야에서의 학사 학위가 필요할 수 있다.<br />
            - 인간의 신경망 및 전자공학 등에 흥미를 가진 사람에게 적합하다.<br />
            - 수학, 물리, 화학 등 기초적 과학 분야에 관심을 가진 사람에게 적합하다.<br />
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-5 mb-6 border border-gray-100">
          <div className="flex items-center mb-3">
            <span className="text-lg text-gray-800 mr-2">
              <Rocket />
            </span>
            <h3 className="text-lg font-bold text-gray-800">미래 전망</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            신경회로망연구원은 인공지능, 머신러닝, 딥러닝 기술의 발전과 함계 그 중요성이 더욱 커지고 있는 직업으로,
            미래 기술 발전의 핵심 역학을 담당하고 있다.
            <br />
            특히 자율주행차, 스마트 시티, IoT 등 다양한 첨단 기술 분야에서 활용되는 기술을 연구하는
            매우 전문적이고 전망이 밝은 직업이다.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {['인공지능', '#인공로봇'].map((tag, index) => (
            <div
              key={index}
              className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600
                         border border-gray-200 hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default CareerCard;