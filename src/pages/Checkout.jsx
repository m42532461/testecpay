import React, { useState } from "react";
import CitySelector from "../components/CitySelector";
import FormInput from "../components/FormInput";

const Checkout = () => {
  const [input, setInput] = useState({});
  const handleInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
    console.log(input);
  };
  return (
    <div className="flex flex-col w-[380px] p-3">
      <div className="border">購物車</div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col flex-1">
          左
          <div className="border flex flex-col p-3">
            <h2>顧客資料</h2>
            <FormInput handleInput={handleInput} id="name" title="顧客名稱" />
            <FormInput handleInput={handleInput} id="email" title="電子信箱" />
            <FormInput handleInput={handleInput} id="phone" title="電話號碼" />
            <div className="flex flex-col">
              訂單備註
              <textarea
                onChange={handleInput}
                name="ps"
                id="ps"
                rows="5"
                className="w-full px-2 py-1"
                placeholder="有什麼想告訴賣家嗎?"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          右
          <div className="border p-3">
            <h2>送貨資料</h2>
            已選擇送貨方式:宅配-新竹貨運
            <FormInput
              handleInput={handleInput}
              type="checkbox"
              id="checkInfoTheSame"
              title="收件人資料與顧客資料相同"
            />
            <FormInput
              handleInput={handleInput}
              id="reciverName"
              title="收件人名稱"
              desc="請填入收件人真實姓名，以確保順利收件"
            />
            <FormInput
              handleInput={handleInput}
              id="reciverPhone"
              title="收件人電話號碼"
            />
            地址 送貨地點: 台灣
            <CitySelector handleInput={handleInput} />
            <textarea
              onChange={handleInput}
              name="addressDetail"
              id="addressDetail"
              rows="1"
              className="w-full px-3 py-2"
              placeholder="地址"
            ></textarea>
            <FormInput
              handleInput={handleInput}
              type="checkbox"
              id="saveAddress"
              title="儲存這個送貨地址"
            />
            <FormInput
              handleInput={handleInput}
              type="checkbox"
              id="setDefaultAddress"
              title="設定為預設地址"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <FormInput
          handleInput={handleInput}
          type="checkbox"
          id="agreement"
          title="我同意網站服務條款及隱私權政策"
        />

        <button>返回購物車</button>
        <button>提交訂單 </button>
      </div>
    </div>
  );
};

export default Checkout;
