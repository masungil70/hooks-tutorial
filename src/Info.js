import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [name2, setName2] = useState("");

  const onChangeName = (e) => setName(e.target.value);

  const onChangeNickname = (e) => setNickname(e.target.value);

  const onChangeName2 = (e) => setName2(e.target.value);

  useEffect(() => {
    console.log("랜더링이 완료되었습니다");
    console.log({ name, nickname, name2 });
    return () => {
      console.log("cleanup 정리");
      console.log(name);
    };
  }, []);

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
        <input type="text" value={name2} onChange={onChangeName2} />
      </div>
      <div>
        <div>
          <b>{name}</b>
        </div>
        <div>
          <b>{nickname}</b>
        </div>
        <div>
          <b>{name2}</b>
        </div>
      </div>
    </div>
  );
};

export default Info;
