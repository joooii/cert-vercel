export {}; // 이 줄이 중요합니다! 파일을 모듈로 만듭니다.

declare global {
  interface Window {
    // 브라우저 환경에서는 setTimeout이 number를 반환합니다
    searchTimeout: number;
  }
}
