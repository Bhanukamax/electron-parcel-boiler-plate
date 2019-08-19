const root = document.querySelector("#root")

const ele = document.createElement('div')

ele.innerHTML = `
<h1>This  build from parcel</h1>
<p>guid url:</p>
<code>
https://medium.com/@yogeshkumarr/production-ready-electron-app-using-react-and-parcel-web-bundler-74dcda63f148
</code>
`

root.append(ele)
