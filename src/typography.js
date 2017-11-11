import CodePlugin from 'typography-plugin-code'
import theme from 'typography-theme-github'
import gray from 'gray-percentage'

theme.plugins = [
  new CodePlugin(),
]

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'body': {
    // background: '#eee none repeat scroll 0 0',
  },
  'div#content': {
    // border: '1px solid #bbb',
    // background: '#fff',
    // margin: 0,
    // padding: '3em',
  },
  '.title': {
    // margin: '-1em -1em 0',
    // fontWeight: 'bold',
    // background: '#369',
    // color: '#fff',
    // padding: '.75em 1em',
    // letterSpacing: '.1em',
    textAlign: 'center',
  },
  'h2': {
    borderBottom: 0,
  },
  '.timestamp': {
    textAlign: 'right',
    color: gray(70),
    fontSize: rhythm(0.5),
    marginTop: '0.8em',
    marginBottom: '-0.5em',
  },
})

export default theme
