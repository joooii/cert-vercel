// mocks/mockBoardDetailData.ts

import { AttachedFile } from "@/types/attachFile";

interface BoardDetailData {
  id: number;
  detailContent: string;
  tags: string[];
  authorInfo: {
    initials: string;
    role: string;
  };
  attachedFiles: AttachedFile[];
}

export const mockBoardDetailData: BoardDetailData[] = [
  {
    id: 1,
    detailContent: `# 2024년 상반기 CTF 대회 참가 안내

국제 CTF 대회에 팀 단위로 참가합니다. 웹 해킹, 포렌식, 암호학 등 다양한 분야의 문제가 출제됩니다.

## 대회 개요

| 항목 | 내용 |
|------|------|
| 날짜 | 2024년 3월 15일 ~ 17일 |
| 장소 | 서울 코엑스 컨벤션센터 |
| 참가비 | 팀당 50,000원 |

## 출제 분야

### 🌐 Web Hacking
- **SQL Injection**: 데이터베이스 조작 공격
- **XSS**: 스크립트 삽입 공격  
- **CSRF**: 요청 위조 공격

### 🔍 Forensics
- 메모리 덤프 분석
- 네트워크 패킷 분석
- 디지털 증거 수집

### 🔒 Cryptography
- RSA 암호화 알고리즘
- 해시 함수 분석
- 대칭키/비대칭키 암호

## 신청 방법

1. [동아리 홈페이지](https://security-club.com)에서 팀 등록
2. 참가비 납부 (계좌: 국민은행 123-456-789)
3. 서약서 제출

> **⚠️ 중요**: 모든 참가자는 보안 서약서 작성이 필수입니다.

### 체크리스트
- [x] 팀 구성 완료 (3-4명)
- [x] 팀장 선정
- [ ] 참가비 납부
- [ ] 서약서 제출

**신청 마감**: 2024년 2월 28일까지

---

문의사항은 \`\`\`admin@security-club.com\`\`\`으로 연락주세요!`,
    tags: ["CTF", "대회", "웹해킹", "포렌식"],
    authorInfo: { initials: "관리", role: "운영진" },
    attachedFiles: [
      {
        id: "file_1_1",
        name: "해커톤_기획서.pdf",
        size: 2547892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
      {
        id: "file_1_2",
        name: "해커톤_기획서.pdf",
        size: 3427892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
    ],
  },
  {
    id: 2,
    detailContent: `# 신규 취약점 CVE-2024-0001 분석 보고서

Apache 웹서버에서 발견된 **치명적인 취약점**에 대한 상세 분석과 대응 방안입니다.

## 🚨 취약점 개요

- **CVE ID**: CVE-2024-0001
- **CVSS 점수**: 9.8 (Critical)
- **영향 범위**: Apache HTTP Server 2.4.0 ~ 2.4.58
- **발견일**: 2024년 1월 10일

## 공격 시나리오

\`\`\`mermaid
graph TD
    A[공격자] --> B[악성 HTTP 헤더 전송]
    B --> C[Apache 서버 처리]
    C --> D[버퍼 오버플로우 발생]
    D --> E[원격 코드 실행]
    E --> F[서버 장악]
\`\`\`

### 공격 코드 예시

\`\`\`bash
# 취약점 악용 예시 (교육용)
curl -H "X-Malicious-Header: $(python -c 'print("A"*1024)')" \\
     -H "Content-Type: application/x-www-form-urlencoded" \\
     http://target-server.com/
\`\`\`

\`\`\`python
# Python 스크립트 예시
import requests

def exploit_server(target_url):
    headers = {
        'X-Malicious-Header': 'A' * 1024,
        'User-Agent': 'Mozilla/5.0 (Exploit)'
    }
    
    response = requests.get(target_url, headers=headers)
    return response.status_code
\`\`\`

## 대응 방안

### 즉시 대응 (High Priority)
1. **Apache 2.4.59 이상으로 업그레이드**
   - \`sudo apt update && sudo apt upgrade apache2\`
   - 재시작 필요: \`sudo systemctl restart apache2\`

2. **WAF 규칙 추가**
   - ModSecurity 규칙 업데이트
   - 의심스러운 헤더 패턴 차단

3. **모니터링 강화**
   - 로그 분석 도구 활용
   - 비정상 트래픽 탐지

### 장기 대책
- [x] 정기적인 보안 패치 프로세스 구축
- [x] 침입 탐지 시스템(IDS) 도입
- [ ] 보안 교육 강화
- [ ] 정기적인 취약점 스캔

> **💡 팁**: 자동화된 패치 관리 시스템을 구축하여 향후 유사한 취약점에 신속히 대응할 수 있습니다.

## 영향도 분석

| 대상 | 영향도 | 패치 현황 |
|------|--------|-----------|
| 주요 포털사이트 | 🔴 높음 | ✅ 완료 |
| 중소기업 웹사이트 | 🟠 중간 | ⚠️ 진행중 |
| 개인 사이트 | 🟡 낮음 | ❌ 미완료 |

**업데이트**: 이 보고서는 새로운 정보 확인 시 지속적으로 업데이트됩니다.`,
    tags: ["CVE", "Apache", "취약점분석", "보안패치"],
    authorInfo: { initials: "김보", role: "보안연구원" },
    attachedFiles: [
      {
        id: "file_1_1",
        name: "해커톤_기획서.pdf",
        size: 2547892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
      {
        id: "file_1_2",
        name: "해커톤_기획서.pdf",
        size: 3427892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
    ],
  },
  {
    id: 3,
    detailContent: `# 모의해킹 실습 환경 구축 가이드

Kali Linux와 Metasploit을 활용한 모의해킹 실습 환경을 구축하는 **단계별 가이드**입니다.

## 📋 시스템 요구사항

### 하드웨어 스펙
- **CPU**: Intel i5 이상 (가상화 지원 필수)
- **RAM**: 최소 8GB *(권장: 16GB)*
- **저장공간**: 50GB 이상 여유 공간
- **네트워크**: 유선 인터넷 연결 권장

### 소프트웨어 요구사항
- [VMware Workstation Pro](https://www.vmware.com/) 또는 [VirtualBox](https://www.virtualbox.org/)
- Windows 10/11 또는 Ubuntu 20.04 LTS
- 안정적인 인터넷 연결

## 🛠️ 설치 단계

### 1단계: 가상화 환경 설정

\`\`\`bash
# VirtualBox 설치 (Ubuntu 기준)
sudo apt update
sudo apt install virtualbox virtualbox-ext-pack
\`\`\`

### 2단계: Kali Linux 설치

1. **ISO 다운로드**
   - [Kali Linux 공식 사이트](https://www.kali.org/get-kali/)
   - 파일: \`kali-linux-2024.1-installer-amd64.iso\`

2. **가상머신 생성**
   - 메모리: 4GB 이상 할당
   - 디스크: 40GB 이상 생성
   - 네트워크: NAT 모드 설정

3. **설치 과정**
   - 언어: English (권장)
   - 계정: kali / kali123!
   - 파티션: 전체 디스크 사용

### 3단계: 모의해킹 도구 설정

\`\`\`bash
# 시스템 업데이트
sudo apt update && sudo apt upgrade -y

# 필수 도구 설치
sudo apt install -y curl wget git vim

# Metasploit 초기화
sudo msfdb init
sudo systemctl enable postgresql
sudo systemctl start postgresql

# 테스트
msfconsole
\`\`\`

## 🎯 실습 환경

### DVWA (Damn Vulnerable Web Application)
\`\`\`bash
cd /var/www/html
sudo git clone https://github.com/digininja/DVWA.git
sudo chown -R www-data:www-data DVWA/
sudo chmod -R 755 DVWA/
\`\`\`

### WebGoat 설정
\`\`\`bash
# Java 확인
java -version

# WebGoat 실행
wget https://github.com/WebGoat/WebGoat/releases/download/v8.2.2/webgoat-server-8.2.2.jar
java -jar webgoat-server-8.2.2.jar
\`\`\`

## 🔧 실습 시나리오

### 시나리오 1: 웹 애플리케이션 테스트
1. **SQL Injection 테스트**
   - DVWA 대상 실습
   - Burp Suite 활용

2. **XSS 취약점 발견**
   - 스크립트 삽입 테스트
   - 페이로드 분석

### 시나리오 2: 네트워크 스캔
\`\`\`bash
# Nmap 스캔 예시
nmap -sV -sC target-ip
nmap -p- target-ip

# 취약점 스캔
nmap --script vuln target-ip
\`\`\`

## ⚠️ 주의사항

> **🚨 중요**: 이 가이드는 **교육 목적**으로만 사용하세요. 무단으로 타인의 시스템을 공격하는 것은 **불법**입니다.

### 윤리적 해킹 원칙
- ✅ 승인받은 시스템에서만 테스트
- ✅ 화이트햇 해커의 윤리 준수
- ✅ 발견된 취약점은 즉시 보고
- ❌ 개인 이익을 위한 악용 금지

### 법적 고지
이 가이드는 보안 교육 및 연구 목적으로만 제공됩니다. 관련 법령을 준수하여 사용하시기 바랍니다.

---

**다음 단계**: [고급 침투 테스트 가이드](./advanced-pentest-guide.md)`,
    tags: ["Kali Linux", "모의해킹", "실습환경", "DVWA", "Metasploit"],
    authorInfo: { initials: "이해", role: "기술팀장" },
    attachedFiles: [
      {
        id: "file_1_1",
        name: "해커톤_기획서.pdf",
        size: 2547892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
      {
        id: "file_1_2",
        name: "해커톤_기획서.pdf",
        size: 3427892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
    ],
  },
  {
    id: 4,
    detailContent: `# 보안 동아리 랩실 이용 규칙 업데이트

랩실 보안 강화를 위한 **새로운 이용 규칙**이 적용됩니다. 모든 회원은 필독 바랍니다.

## 📢 업데이트 배경

최근 보안 사고 예방 및 장비 보호를 위해 랩실 이용 규칙을 강화합니다.

### 주요 변경사항
- 🔐 출입 통제 시스템 도입
- 📊 장비 사용 로그 기록 의무화
- 🎓 보안 교육 이수 필수화

## 📋 새로운 이용 규칙

### 1. 출입 관리
| 구분 | 시간 | 비고 |
|------|------|------|
| 평일 | 09:00 ~ 22:00 | 정규 운영 |
| 토요일 | 10:00 ~ 18:00 | 단축 운영 |
| 일요일 | 휴무 | 긴급시 승인 필요 |

**출입 방법**:
1. 학생증 태그
2. 지문 인식 확인
3. 동반자 있을 시 사전 신청

### 2. 장비 사용 규칙

\`\`\`
📝 사용 전 체크리스트:
□ 사용 로그 작성
□ 장비 상태 확인
□ 개인 장비와 구분 보관
□ 사용 후 정리정돈
□ 전원 차단 확인
\`\`\`

### 3. 보안 준수사항

#### 필수 사항
- **비밀번호**: 3개월마다 변경
- **USB 사용**: 바이러스 검사 후 사용
- **데이터 보관**: 암호화 저장 권장

#### 금지 사항
- 🚫 개인 정보 유출
- 🚫 불법 소프트웨어 사용
- 🚫 외부인 무단 출입
- 🚫 음식물 섭취

## 📚 교육 이수 의무

### 신규 회원
- **기초 보안 교육**: 4시간 (필수)
- **랩실 이용 교육**: 2시간 (필수)
- **실습 교육**: 6시간 (선택)

### 기존 회원
- **보안 업데이트 교육**: 연 2회 (필수)
- **고급 보안 교육**: 연 1회 (선택)

> **📌 참고**: 교육 미이수 시 랩실 이용이 제한됩니다.

## ⚖️ 위반 시 제재 조치

### 1차 위반 (⚠️ 경고)
- 경고 조치 및 재교육 이수
- 위반 사항 개선 지도

### 2차 위반 (🚫 제재)
- 1개월 랩실 이용 정지
- 부모님/지도교수 통보

### 3차 위반 (❌ 퇴출)
- 동아리 제명 검토
- 향후 가입 제한

## 📅 시행 일정

\`\`\`timeline
2024.01.12 ~ 2024.01.26: 공지 기간
2024.02.01: 정식 시행
2024.02.01 ~ 2024.02.14: 적응 기간 (경고만 실시)
2024.02.15~: 본격 제재 시행
\`\`\`

### 준비해야 할 것들
- [x] 출입 통제 시스템 설치
- [x] 교육 자료 준비
- [ ] 회원 대상 설명회 개최
- [ ] 새로운 이용 가이드 배포

---

**문의사항**: 동아리 운영진 (security-admin@club.com)  
**긴급 연락**: 010-1234-5678`,
    tags: ["랩실규칙", "보안정책", "공지사항", "출입통제"],
    authorInfo: { initials: "관리", role: "운영진" },
    attachedFiles: [
      {
        id: "file_1_1",
        name: "해커톤_기획서.pdf",
        size: 2547892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
      {
        id: "file_1_2",
        name: "해커톤_기획서.pdf",
        size: 3427892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
    ],
  },
  {
    id: 5,
    detailContent: `# CISSP 자격증 스터디 그룹 모집

**CISSP**(Certified Information Systems Security Professional) 자격증 취득을 목표로 하는 스터디 그룹을 모집합니다.

## 🎯 CISSP 자격증 소개

### 자격증 정보
- **발급기관**: (ISC)² International
- **유효기간**: 3년 (매년 CPE 120점 이수 필요)
- **응시 자격**: 보안 분야 5년 이상 경력
- **학력 대체**: 4년제 대학 졸업 시 1년 경력 대체 가능

### 자격증 가치
> 💰 **연봉 상승률**: 평균 15-25%  
> 🌍 **글로벌 인정**: 전 세계 140개국에서 인정  
> 🏢 **필수 자격**: 대기업 보안 담당자 우대 사항

## 📚 스터디 계획

### 전체 일정
\`\`\`
📅 학습 기간: 6개월 (2024년 2월 ~ 7월)
📝 시험 일정: 2024년 8월 중 (Pearson VUE)
🕐 주간 일정: 매주 토요일 오후 2시 ~ 6시 (4시간)
📍 장소: 보안 동아리 랩실 또는 스터디룸
\`\`\`

### 학습 도메인 (8개 영역)

#### Domain 1: Security and Risk Management (15%)
- 기밀성, 무결성, 가용성 (CIA Triad)
- 거버넌스와 위험 관리
- 규정 준수 및 법적 이슈

#### Domain 2: Asset Security (10%)
- 자산 분류 및 관리
- 데이터 보안 정책
- 개인정보보호 정책

#### Domain 3: Security Architecture and Engineering (13%)
- 보안 모델 및 보안 평가
- 보안 아키텍처 설계
- 취약점 평가

#### Domain 4: Communication and Network Security (13%)
- 네트워크 프로토콜 보안
- 네트워크 공격 및 대응
- 방화벽 및 VPN

#### Domain 5: Identity and Access Management (13%)
- 신원 관리 및 액세스 제어
- 인증, 인가, 계정 관리
- 싱글 사인온 (SSO)

#### Domain 6: Security Assessment and Testing (12%)
- 보안 평가 방법론
- 침투 테스트 및 취약점 스캔
- 보안 감사

#### Domain 7: Security Operations (13%)
- 보안 운영 및 관리
- 사고 대응 및 복구
- 로깅 및 모니터링

#### Domain 8: Software Development Security (11%)
- 보안 소프트웨어 개발
- 애플리케이션 보안
- 보안 테스트 및 평가

## 📖 스터디 방법

### 주간 스케줄
| 시간 | 내용 | 활동 |
|------|------|------|
| 14:00-14:30 | 지난 주 복습 | 퀴즈 및 토론 |
| 14:30-16:00 | 새로운 도메인 학습 | 강의 및 실습 |
| 16:00-16:15 | 휴식 | ☕ Coffee Break |
| 16:15-17:30 | 문제 풀이 | 모의고사 및 해설 |
| 17:30-18:00 | 정리 및 과제 | 다음 주 준비 |

### 학습 자료
- **공식 교재**: (ISC)² CISSP Official Study Guide
- **보조 교재**: CISSP All-in-One Exam Guide
- **온라인 자료**: Cybrary, LinkedIn Learning
- **모의고사**: Boson ExSim, MeasureUp

## 🙋‍♂️ 참가 조건

### 필수 조건
- 보안 분야에 대한 **강한 관심**
- 매주 토요일 스터디 **참석 가능**
- 자격증 취득에 대한 **확고한 의지**

### 우대 조건
- 보안 관련 업무 경험
- 기존 보안 자격증 보유
- 영어 독해 능력 (교재가 영어)

### 스터디 규칙
- **출석률**: 80% 이상 유지
- **과제 수행**: 매주 부여되는 과제 성실히 수행
- **상호 협력**: 서로 도움을 주고받는 협력적 자세

## 💰 비용 및 혜택

### 비용
- **스터디 비용**: 월 2만원 (교재 및 자료 구입)
- **시험 응시료**: 약 80만원 (개별 부담)

### 혜택
- **무료 교육**: 전문가 초청 특강
- **취업 지원**: 이력서 작성 및 면접 지원
- **네트워킹**: 동료 보안 전문가들과의 인맥 형성

---

**신청 방법**: [신청 폼 작성](https://forms.gle/cissp-study-group)  
**신청 마감**: 2024년 1월 31일까지  
**문의**: 박자격증 (cissp-study@club.com)

> **💡 한 번의 기회**: 이번 기수를 놓치면 다음 기수는 **1년 후**입니다!`,
    tags: ["CISSP", "자격증", "스터디", "보안전문가"],
    authorInfo: { initials: "박자", role: "스터디리더" },
    attachedFiles: [
      {
        id: "file_1_1",
        name: "해커톤_기획서.pdf",
        size: 2547892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
      {
        id: "file_1_2",
        name: "해커톤_기획서.pdf",
        size: 3427892,
        type: "application/pdf",
        category: "document",
        downloadUrl: "/api/files/download/hackathon_plan.pdf",
        uploadDate: "2025-01-15T09:30:00Z",
        description: "해커톤 전체 기획서 및 일정표",
      },
    ],
  },
];
