import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Base64Encoder from "../pages/Base64Encoder";
import CryptoJs from "../pages/CryptoJs";
import Timestamp from "../pages/Timestamp";
import Timezones from "../pages/Timezones";
import HexToDecimal from "../pages/HexToDecimal";
import ClockFacePage from '../pages/ClockfacePage';
import PresetTimestamps from '../pages/PresetTimestamp';

export const ROUTER_PATH_BASE64 = 'base64';
export const ROUTER_PATH_CRYPTO = 'crypto-js';
export const ROUTER_PATH_TIMESTAMP = 'timestamp';
export const ROUTER_PATH_TIMEZONE = 'timezone';
export const ROUTER_PATH_HEX_TO_DEC = 'hex-to-decimal';
export const ROUTER_PATH_CLOCK_FACE = 'clockface';
export const ROUTER_PATH_PRESET_TIMESTAMP = 'preset-timestamp';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={ROUTER_PATH_BASE64} element={<Base64Encoder />} />
          <Route path={ROUTER_PATH_CRYPTO} element={<CryptoJs />} />
          <Route path={ROUTER_PATH_TIMEZONE} element={<Timezones />} />
          <Route path={ROUTER_PATH_HEX_TO_DEC} element={<HexToDecimal />} />
          <Route path={ROUTER_PATH_CLOCK_FACE} element={<ClockFacePage />} />
          <Route path={ROUTER_PATH_PRESET_TIMESTAMP} element={<PresetTimestamps />} />
          <Route index element={<Timestamp />} />
          <Route path="*" element={<Timestamp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default Router;
