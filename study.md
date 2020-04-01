
## 200323
### `npm run-all -D'
express 서버를 실행하고, 다른 터미널을 열어서 react를 실행해야하지만, 
npm-run-all을 이용하면 하나의 명령어로 두개의 script를 실행 시킬 수 있다.
 - npm install npm-run-all -D
 - package.json scripts 수정

### `npm install --save react-router-dom`
 - url 주소로 페이지는 연결해준다.
 - navigator를 만들어주는 모듈!

## 200401
### 로그인 
1. LoginPage에서 axios로 서버에 로그인 요청(POST /api/auth/login {id,password})
2. 완료 결과 success면 App의 state(isLogin) 변경 실패면 변경 X & err 메세지!!
-> 컴포넌트에 바인드 된 함수 불러서 변경할 수 있음!
3. cookie 저장
* 쿠키는 사용자의 브라우저에 저장, session 은 서버측에 저장
BACK-END 에서 세션을 저장, FRONT-END 에서는 그 값을 쿠키에 암호화하여 저장


* Redux 공부하기..ㅠ 
- diapatch: reducer를 호출(현재 state값과 action을 파라미터로 전달한다)해서 state값을 바꾼다.-> subscribe를 이용해서 render함수를 호출해 화면을 바꾼다.
- reducer: state값을 파라미터로 받고 action을 참조하여 새로운 state값을 만들어 리턴하는 역할을 함. state가공자 역할
- 