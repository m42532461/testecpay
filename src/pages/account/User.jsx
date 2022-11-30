import { indigo } from "@material-ui/core/colors";
import React, { useState } from "react";

const User = () => {
  const user = JSON.parse(localStorage.getItem("profile")).result;
  const [isEditing, setIsEditing] = useState(false);
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
              { id: "mail", title: "信箱", type: "mail", value: user.email },
              { id: "phone", title: "手機", type: "text", value: user.phone },
              {
                id: "credit",
                title: "信用卡",
                type: "text",
                value: user.credit,
              },
              ,
              { id: "birth", title: "生日", type: "date", value: user.birth },
            ].map((info) => (
              <div className="flex flex-col" key={info.id + info.type}>
                <label htmlFor={info.id}>{info.title}</label>
                <input
                  type={info.type}
                  id={info.id}
                  className="border p-2"
                  defaultValue={info.value}
                />
              </div>
            ))}
            <div className="flex flex-col">
              <label htmlFor="gender">性別</label>
              <select name="gender" id="gender" className="p-2">
                <option value=""></option>
                <option value="male">男</option>
                <option value="female">女</option>
                <option value="female">不透漏</option>
              </select>
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
        <button className="bg-gray-300 p-3">取消</button>
        <button className="bg-gray-300 p-3">儲存</button>
      </div>
    </div>
  );
};

export default User;
