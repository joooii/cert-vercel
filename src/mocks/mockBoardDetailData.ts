export const mockBoardDetailData = [
  {
    id: 1,
    detailContent: `# 2024년 상반기 CTF 대회 참가 안내

국제 CTF 대회에 팀 단위로 참가합니다. 웹 해킹, 포렌식, 암호학 등 다양한 분야의 문제가 출제됩니다.

## 대회 개요
- **날짜**: 2024년 3월 15일 ~ 17일
- **장소**: 서울 코엑스 컨벤션센터
- **참가비**: 팀당 50,000원

## 출제 분야
- Web Hacking (SQL Injection, XSS, CSRF)
- Forensics (메모리 덤프, 네트워크 패킷 분석)
- Cryptography (RSA, 해시 함수)

## 신청 방법
1. 팀 등록: 동아리 홈페이지
2. 참가비 납부
3. 서약서 제출

**신청 마감**: 2024년 2월 28일까지`,
    tags: ["CTF", "대회", "웹해킹"],
    authorInfo: { initials: "관리", role: "운영진" },
    attachments: [
      { name: "CTF_대회_안내서.pdf", size: "2.1 MB", type: "application/pdf" },
    ],
  },
  {
    id: 2,
    detailContent: `# 신규 취약점 CVE-2024-0001 분석 보고서

Apache 웹서버 취약점 상세 분석과 대응 방안입니다.

## 취약점 개요
- **CVE ID**: CVE-2024-0001
- **CVSS 점수**: 9.8 (Critical)
- **영향**: Apache HTTP Server 2.4.0 ~ 2.4.58

## 공격 시나리오
1. 악성 HTTP 헤더 전송
2. 버퍼 오버플로우 발생
3. 원격 코드 실행

## 대응 방안
- Apache 2.4.59 이상 업그레이드
- WAF 규칙 추가
- 모니터링 강화`,
    tags: ["CVE", "Apache", "취약점분석"],
    authorInfo: { initials: "김보", role: "보안연구원" },
    attachments: [
      {
        name: "CVE-2024-0001_분석.pdf",
        size: "3.2 MB",
        type: "application/pdf",
      },
    ],
  },
  {
    id: 3,
    detailContent: `# 모의해킹 실습 환경 구축 가이드

Kali Linux와 Metasploit 실습 환경 구축 방법입니다.

## 시스템 요구사항
- CPU: Intel i5 이상
- RAM: 최소 8GB
- 저장공간: 50GB

## 설치 단계
1. VMware/VirtualBox 설치
2. Kali Linux ISO 다운로드
3. 가상머신 생성 및 설치
4. 모의해킹 도구 설정

## 실습 환경
- DVWA (취약한 웹 애플리케이션)
- Metasploitable 2
- WebGoat`,
    tags: ["Kali Linux", "모의해킹", "실습환경"],
    authorInfo: { initials: "이해", role: "기술팀장" },
    attachments: [
      {
        name: "실습환경_체크리스트.xlsx",
        size: "1.2 MB",
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  },
  {
    id: 4,
    detailContent: `# 보안 동아리 랩실 이용 규칙 업데이트

랩실 보안 강화를 위한 새로운 이용 규칙입니다.

## 주요 변경사항
- 출입 통제 시스템 도입
- 장비 사용 로그 기록
- 보안 교육 이수 필수

## 새로운 규칙
- **출입 시간**: 평일 09:00~22:00
- **출입 방법**: 학생증 + 지문 인식
- **교육 의무**: 기초 보안 교육 4시간

## 시행 일정
- **시행일**: 2024년 2월 1일
- **적응기간**: 첫 2주간 경고만`,
    tags: ["랩실규칙", "보안정책", "공지사항"],
    authorInfo: { initials: "관리", role: "운영진" },
    attachments: [
      { name: "랩실_이용_규칙.pdf", size: "1.8 MB", type: "application/pdf" },
    ],
  },
  {
    id: 5,
    detailContent: `# CISSP 자격증 스터디 그룹 모집

CISSP 자격증 취득을 위한 스터디 그룹을 모집합니다.

## 스터디 계획
- **기간**: 6개월 (2024년 2월 ~ 7월)
- **일정**: 매주 토요일 오후 2~6시
- **목표**: 2024년 8월 시험 응시

## 학습 영역 (8개 도메인)
1. Security and Risk Management
2. Asset Security
3. Security Architecture
4. Network Security
5. Identity and Access Management
6. Security Assessment
7. Security Operations
8. Software Development Security

## 참가 조건
- 보안 분야 관심자
- 주 1회 스터디 참석 가능
- 자격증 취득 의지`,
    tags: ["CISSP", "자격증", "스터디"],
    authorInfo: { initials: "박자", role: "스터디리더" },
    attachments: [],
  },
];
