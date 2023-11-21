import React from "react";

// GET 파라미터 추출 기능을 갖는 useLocation() 함수를 react-router-dom 패키지로 참조함
import { useLocation } from "react-router-dom";

// HTTP GET 파라미터를 전달받은 페이지
export default function DepartmentGet() {
  // 요청 데이터 확인하기
  //   http://localhost:3001/department_get?id=102&msg=world
  const location = useLocation();
  console.group("useLocation()의 리턴값 확인");
  //   console.debug(location);
  console.log(location);
  console.groupEnd();

  //   QueryString을 객체 형태로 변환
  //   ?id=101&msg=hello
  const { search } = location;
  console.log(search);

  //   객체이기 때문에 그냥은 안나옴
  const query = new URLSearchParams(search);
  console.group("QueryString 확인");
  //   console.debug(query);
  console.log(query);
  console.groupEnd();

  //   추출된 변수값과 데이터 타입 확인
  console.group("파라미터 처리 결과 확인");
  console.log(
    "요청된 학과번호 값 = %s (%s)",
    query.get("id"),
    typeof query.get("id")
  );
  console.log(
    "요청된 메시지 내용 = %s (%s)",
    query.get("msg"),
    typeof query.get("msg")
  );
  console.groupEnd();

  //   생성된 객체를 JSON으로 변환
  console.group("파라미터 JSON으로 변환 확인");
  const params = Object.fromEntries(query);
  console.log(params);
  const { id, msg } = params;
  console.log("요청된 학과번호 값 = %s (%s)", id, typeof id);
  console.log("요청된 메시지 내용 = %s (%s)", msg, typeof msg);
  console.groupEnd();

  return (
    <div>
      <h2>DepartmentGet</h2>
    </div>
  );
}
