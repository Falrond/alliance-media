const React = require("react");
const GlobalLayout = require("./src/components/templates/GlobalLayout").default;

exports.wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};
