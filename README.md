# react-mobx

这个项目基于[Create React App](https://github.com/facebookincubator/create-react-app).

这里你可以找到常见问题的解决方法和最新版本的说明 [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

# 这个项目用到的技术栈

- react
- react-router-dom
- mobx
- mobx-react
- custom-react-scripts

# 使用说明

npm start或yarn start进行调试 npm run build生成production版本 npm run eject慎用，生成不可逆的未来ES.Next版本

# 备注

- custom-react-scripts代替了平时的react中使用的react-scripts，用来支持Mobx的ES未来版本写法；.env文件是对应的配置文件；
- babel-plugin-transform-decorators-legacy是为了支持Mobx的ES6写法；.babelrc是对应的配置文件；
