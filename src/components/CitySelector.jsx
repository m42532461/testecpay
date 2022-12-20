// 以下為Component範例。直接使用也可以。

import React, { Component } from "react";

// 此為引入，不需要再使用<script></script>引入
import TwCitySelector from "../../node_modules/tw-city-selector/dist/tw-city-selector.js";

const CitySelector = ({ handleInput }) => {
  new TwCitySelector({
    el: ".my-selector-c",
    elCounty: ".county", // 在 el 裡查找 dom
    elDistrict: ".district", // 在 el 裡查找 dom
    elZipcode: ".zipcode", // 在 el 裡查找 dom
  });

  // 在render()參考「js 實例方式加載」增加相對應element即可

  return (
    <div class="my-selector-c flex">
      <div className="flex-1">
        <select
          id="city"
          onChange={handleInput}
          class="county w-full px-2 py-1"
        ></select>
      </div>
      <div className="flex-1">
        <select
          id="area"
          onChange={handleInput}
          class="district w-full px-2 py-1"
        ></select>
      </div>
      {/* <div>
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="text"
          class="zipcode"
        />
      </div> */}
    </div>
  );
};

export default CitySelector;
