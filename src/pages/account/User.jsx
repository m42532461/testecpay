import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Select from "react-select";
import CitySelector from "../../components/CitySelector";
const colourOptions = [
  { value: "male", label: "男" },
  { value: "female", label: "女" },
  { value: "unknown", label: "不透漏" },
];
const User = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  console.log(user);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [input, setInput] = useState({ ...user });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    console.log(input);
  };
  const handleSubmit = () => {
    console.log(input);
    dispatch();
  };
  return (
    <div className="w-full">
      <h1>{user.name}</h1>
      <div className="p-10">
        {!isEditing && (
          <div className="flex flex-col">
            <span>{user.name ? user.name : "手機"}</span>
            <span>{user.phone ? user.phone : "手機"}</span>
            <span>{user.email ? user.email : "信箱"}</span>
            <span>{user.credit ? user.credit : "信用卡"}</span>
            <span>{user.subscribe ? user.subscribe : "訂閱通知"}</span>
            <span>{user.gender ? user.gender : "性別"}</span>
            <span>{user.birth ? user.birth : "生日"}</span>
            <span>{user.address ? user.address : "地址"}</span>
          </div>
        )}
        {isEditing && (
          <div>
            {[
              { id: "name", title: "姓名", type: "text", value: user.name },
              { id: "email", title: "信箱", type: "mail", value: user.email },
              { id: "phone", title: "手機", type: "text", value: user.phone },
              { id: "birth", title: "生日", type: "date", value: user.birth },
            ].map((info) => (
              <div className="flex flex-col" key={info.id + info.type}>
                <label htmlFor={info.id}>{info.title}</label>
                <input
                  type={info.type}
                  id={info.id}
                  className="border p-2"
                  defaultValue={info.value}
                  onChange={handleInput}
                />
              </div>
            ))}
            <div className="flex flex-col">
              <label htmlFor="gender">性別</label>
              <Select
                id="gender"
                className="basic-single"
                classNamePrefix="select"
                isLoading={isLoading}
                isRtl={isRtl}
                name="color"
                options={colourOptions}
                onChange={(e) => {
                  setInput({ ...input, gender: e.value });
                  console.log(input);
                }}
              />
            </div>
          </div>
        )}
        <button
          onClick={() => {
            setIsEditing((prev) => !prev);
          }}
          className="bg-gray-300 p-3"
        >
          編輯
        </button>
        <button className="bg-gray-300 p-3">發送驗證碼</button>
        <button className="bg-gray-300 p-3">新增地址</button>
        <button
          className="bg-gray-300 p-3"
          onClick={() => {
            setInput({ ...user });
            setIsEditing(false);
          }}
        >
          取消
        </button>
        <button className="bg-gray-300 p-3" onClick={handleSubmit}>
          儲存
        </button>
      </div>
    </div>
  );
};

export default User;
