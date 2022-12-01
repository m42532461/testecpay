// 以下為Component範例。直接使用也可以。

import React, { Component } from "react";

// 此為引入，不需要再使用<script></script>引入
import TwCitySelector from "../../node_modules/tw-city-selector/dist/tw-city-selector.js";

const CitySelector = () => {
  new TwCitySelector({
    el: ".my-selector-c",
    elCounty: ".county", // 在 el 裡查找 dom
    elDistrict: ".district", // 在 el 裡查找 dom
    elZipcode: ".zipcode", // 在 el 裡查找 dom
  });

  // 在render()參考「js 實例方式加載」增加相對應element即可

  return (
    <div class="my-selector-c">
      <div>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          class="county"
        ></select>
      </div>
      <div>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          class="district"
        ></select>
      </div>
      <div>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
          class="zipcode"
        />
      </div>
    </div>
  );
};

export default CitySelector;
