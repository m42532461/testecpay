import React from "react";

const Checkout = () => {
  return (
    <div className="flex flex-col">
      <div className="border">購物車</div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col flex-1">
          左
          <div className="border">
            顧客資料 顧客名稱 電子信箱 電話號碼 性別 生日 電話
          </div>
          <div className="border">訂單備註</div>
        </div>
        <div className="flex flex-col flex-1">
          右
          <div className="border">
            送貨資料 已選擇送貨方式:宅配-新竹貨運 口 收件人資料與顧客資料相同
            收件人名稱 請填入收件人真實姓名，以確保順利收件 收件人電話號碼 地址
            送貨地點: 台灣 儲存這個送貨地址 設定為預設地址
          </div>
        </div>
      </div>
      <div className="">
        我同意網站服務條款及隱私權政策
        <button>返回購物車</button>
        <button>提交訂單 </button>
      </div>
    </div>
  );
};

export default Checkout;
