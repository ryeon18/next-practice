import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Top from "../src/component/Top";
import Footer from "../src/component/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

/**
 * 페이지 전환시 레이아웃을 유지
 * 페이지 전환시 상태값 유지
 * componentDidCatch를 이용해서 커스텀 에러 핸들링
 * 추가적인 데이터를 페이지로 주입시키는 게 가능
 * 글로벌 CSS같은 전 페이지에서 쓰는 것들을 여기서 선언
 *
 * Component는 현재 페이지를 뜻하고, 페이지 전환 시에 pageProps가 변경됨
 * 데이터 패칭 메소드에 통해 미리 가져 온 초기 객체, 데이터 패칭 메소드를 안쓰면 빈객체 반환.
 */

/**
 * Next js는 모든 페이지를 사전 렌더링을 한다.
 * 미리 html 파일의 틀을 만들어 준다.
 * 더 좋은 포퍼먼스를 만들어주고, 검색엔진최적화에 효율적이고
 * 1. 정적 생성
 * 2. Server Side Rendering
 * 차이점은 언제 html 파일을 생성하는가
 *
 * [정적 생성]
 * - 프로젝트가 빌드하는 시점에 html파일들이 생성된다.
 * - 모든 요청에 그 파일들을 재사용
 * - 한번 파일을 쭉 만들어놓고 호출이 들어올 때마다 재활용
 * - 포퍼먼스의 이유로 넥스트 js는 정적 생성을 권고
 * - 정적 생성된 페이지들은 CDN에 캐시가 된다.
 * - 유저가 요청하기 전에 미리 페이지를 만들어놔도 상관없으면 정적페이지
 * - getStaticProps / getStaticPaths
 *
 * [서버사이드 렌더링]
 * - 매 요청마다 html을 생성
 * - 항상 최신상태 유지
 * - getServerSideProps
 */
