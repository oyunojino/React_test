import React from "react";
import MySubComponent from "./MySubComponent";

// # 함수형 컴포넌트 정의
//      - 함수 이름은 혼선을 방지하기 위해 소스파일 이름과 동일하게 구성하는 것이 일반적

export default function MyComponent1() {
  return (
    // 리턴은 항상 HTML 구조를 의미하는 JSX 문법이어야 하고,
    // JSX 구조는 무조건 단 하나의 태그요소만 반환해야 함
    //    -> 복잡한 구조는 부모 요소 하나에 모두 포함되어야 한다는 의미

    <div>
      <div>메롱</div>
      <MySubComponent />
    </div>
  );
}
