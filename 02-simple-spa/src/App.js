import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Main from "./pages/Main";
import Error404 from "./pages/Error404";
import DepartmentGet from "./pages/DepartmentGet";
function App() {
  return (
    <div>
      <div>App</div>
      <hr />
      {/* 링크 구성 부분 */}
      <nav>
        <Link to="/home">[Home]</Link>
        <Link to="/about">[About]</Link>
        <Link to="/main">[Main(SubRoute)]</Link>

        {/* HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
      </nav>

      <a href="/about">일반링크</a>

      {/* 페이지 역할을 할 컴포넌트 명시하기 */}
      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        {/* 서브 라우팅 사용 */}
        <Route path="/main/*" element={<Main />} />

        {/* GET 파라미터 사용 */}
        <Route path="/department_get" element={<DepartmentGet />} />

        {/* path 속성 없이 Route 지정
              -> 지정되지 않은 모든 요청에 반응 */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
