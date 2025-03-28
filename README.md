# AI-Based-Sexual-Violence-Support-Platform
# 🛡️ AI 기반 성범죄 피해 지원 시스템

**AI-Powered Sexual Violence Support Platform**  
GPT 기반 대화 분석, 자동 증거 정리, AI 챗봇 연동, 익명성과 보안을 핵심으로 한 통합 피해자 지원 시스템입니다.

---

## 📌 주요 기능

- 🤖 **AI 대화 분석**: 피해자의 대화를 요약하고, 위협·성적·강요성 발언을 추출합니다.
- 📄 **PDF 증거 생성**: 분석 내용을 문서화하여 피해자가 직접 보관하거나 제출할 수 있도록 합니다.
- 💬 **AI 챗봇 지원**: 법률 정보, 신고 절차, 상담소 등 피해자 지원 정보 제공
- 🔐 **완전한 익명성 보장**: 데이터는 암호화되어 처리되며 저장되지 않거나 즉시 삭제됩니다.

---

## 🛠 기술 스택

| 영역 | 기술 |
|------|------|
| 프론트엔드 | React, HTML/CSS, Axios |
| 백엔드 | Spring Boot (Java), Spring Security |
| AI 분석 | OpenAI GPT API |
| 문서 생성 | iText (PDF) |
| 데이터 저장 | PostgreSQL, Amazon S3 |
| 배포 (예정) | Vercel (Frontend), Render or EC2 (Backend) |

---

## 📁 디렉토리 구조

```bash
📦 ai-support-project
┣ 📂 frontend/           # React 프로젝트
┃ ┗ 📄 package.json
┣ 📂 backend/            # Spring Boot 프로젝트
┃ ┗ 📄 build.gradle or pom.xml
┣ 📄 README.md
┣ 📄 .gitignore
