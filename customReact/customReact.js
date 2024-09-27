function customRender(reactElemet,Container){
     /* 
     method one , not so good.

     const domElement = document.createElement(reactElemet.type)
     domElement.innerHTML = reactElemet.children
     domElement.setAttribute('href', reactElemet.props.href)
     domElement.setAttribute('target',reactElemet.props.target)
     Container.appendChild(domElement) 
     
     */

     const domElement = document.createElement(reactElemet.type)
     domElement.innerHTML = reactElemet.children

     for(const prop in reactElemet.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElemet.props[prop])
     }

     Container.appendChild(domElement)

}

const reactElemet = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root')

customRender(reactElemet,mainContainer)