/**
 * 에러 관리
 * @param {string} errCode - 개발자를 위한 에러 코드
 * @return {ErrorType} statusCode: HTTP 응답 상태 코드, errorMessage: 클라이언트를 위한 메세지
 */

interface ErrorType {
  statusCode: number;
  errorMessage: string;
}

function errorHandler(errCode: string): ErrorType {
  switch (errCode) {
    case 'req/invalid-body':
      return { statusCode: 400, errorMessage: '잘못된 요청입니다.' };
    case 'req/invalid-query':
      return { statusCode: 400, errorMessage: '잘못된 요청입니다.' };
    case 'req/no-token':
      return { statusCode: 401, errorMessage: '다시 로그인해주세요.' };
    case 'req/invalid-date':
      return { statusCode: 409, errorMessage: '올바른 날짜를 입력해주세요.' };
    case 'auth/wrong-password':
      return { statusCode: 409, errorMessage: '비밀번호를 확인해주세요.' };
    case 'auth/account-not-found':
      return { statusCode: 404, errorMessage: '없는 계정입니다.' };
    case 'auth/token-expired':
      return { statusCode: 401, errorMessage: '다시 로그인해주세요.' };
    case 'auth/invalid-token':
      return { statusCode: 401, errorMessage: '다시 로그인해주세요.' };
    case 'auth/existing-email':
      return { statusCode: 409, errorMessage: '이미 가입된 이메일입니다.' };
    case 'auth/unauthorized-token':
      return { statusCode: 409, errorMessage: '다시 로그인해주세요.' };
    case 'auth/need-re-signin':
      return { statusCode: 409, errorMessage: '다시 로그인해주세요.' };

    default:
      return { statusCode: 500, errorMessage: '다시 시도해주세요.' };
  }
}

export default errorHandler;