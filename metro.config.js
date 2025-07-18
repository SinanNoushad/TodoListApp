const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add webp to asset extensions
config.resolver.assetExts.push("webp");

module.exports = withNativeWind(config, { input: "./global.css" });
