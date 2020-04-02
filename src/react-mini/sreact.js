/*
 * @Author: tz
 * @Date: 2020-02-29 13:59:22
 * @LastEditors: tz
 * @LastEditTime: 2020-04-02 21:38:18
 * @Description: description
 */
function createElement(type, props, ...children) {
    console.log('arguments', arguments)
    props.children = children
    delete props.__source
    delete props.__self
    
    // vtype: 1-原生标签；2-函数组件；3-类组件
    let vtype;
    if(typeof type == 'string') {
        vtype = 1
    } else {
        if(type.isReactComponent) {
            vtype = 3
        } else {
            vtype = 2
        }
    }
    return {vtype, type, props}
}

export class Component {
    static isReactComponent = true;
    constructor(props) {
        this.props = props
        this.state = {}
    }
    setState() {}
    forceUpdate() {}
}

export default { createElement }
